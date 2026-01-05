
import fs from 'fs';
import { PNG } from 'pngjs';

const imagePath = 'public/page_1.png';

fs.createReadStream(imagePath)
    .pipe(new PNG())
    .on('parsed', function () {
        let r = 0, g = 0, b = 0, count = 0;

        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let idx = (this.width * y + x) << 2;
                // Skip transparent or white pixels
                if (this.data[idx + 3] < 128 || (this.data[idx] > 240 && this.data[idx + 1] > 240 && this.data[idx + 2] > 240)) continue;

                r += this.data[idx];
                g += this.data[idx + 1];
                b += this.data[idx + 2];
                count++;
            }
        }

        if (count > 0) {
            r = Math.round(r / count);
            g = Math.round(g / count);
            b = Math.round(b / count);
            console.log(`Dominant Color (RGB): ${r}, ${g}, ${b}`);
            console.log(`Dominant Color (Hex): #${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`);
        } else {
            console.log("No dominant color found (image might be blank or fully white/transparent)");
        }
    });
