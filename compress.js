const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directory = './public/images/';

fs.readdirSync(directory).forEach(file => {
    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        sharp(path.join(directory, file))
            .resize(1000) // عرض أكبر قليلاً للديكورات
            .webp({ quality: 85 }) // جودة أعلى للحفاظ على تفاصيل الدهان
            .toFile(path.join(directory, path.basename(file, ext) + '.webp'))
            .then(() => console.log(`✅ تم ضغط: ${file}`))
            .catch(err => console.error(`❌ خطأ في ${file}:`, err));
    }
});
