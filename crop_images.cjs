
const fs = require('fs');
const { PNG } = require('pngjs');

function cropImage(inputPath, outputPath) {
    fs.createReadStream(inputPath)
        .pipe(new PNG())
        .on('parsed', function () {
            let minX = this.width, minY = this.height, maxX = 0, maxY = 0;

            // Find bounds
            for (let y = 0; y < this.height; y++) {
                for (let x = 0; x < this.width; x++) {
                    let idx = (this.width * y + x) << 2;
                    let r = this.data[idx];
                    let g = this.data[idx + 1];
                    let b = this.data[idx + 2];
                    let a = this.data[idx + 3];

                    // Check if pixel is NOT white/transparent
                    // Assuming white is > 240, 240, 240
                    if (a > 0 && !(r > 240 && g > 240 && b > 240)) {
                        if (x < minX) minX = x;
                        if (x > maxX) maxX = x;
                        if (y < minY) minY = y;
                        if (y > maxY) maxY = y;
                    }
                }
            }

            // Add padding
            const padding = 10;
            minX = Math.max(0, minX - padding);
            minY = Math.max(0, minY - padding);
            maxX = Math.min(this.width, maxX + padding);
            maxY = Math.min(this.height, maxY + padding);

            const width = maxX - minX;
            const height = maxY - minY;

            if (width <= 0 || height <= 0) {
                console.log(`No content found in ${inputPath}`);
                return;
            }

            const dst = new PNG({ width: width, height: height });
            this.bitblt(dst, minX, minY, width, height, 0, 0);

            dst.pack().pipe(fs.createWriteStream(outputPath))
                .on('finish', () => console.log(`Cropped ${inputPath} -> ${outputPath}`));
        });
}

cropImage('public/page_1.png', 'public/logo_main_cropped.png');
cropImage('public/page_2.png', 'public/logo_footer_cropped.png');
