import { PDFDocument, PDFName, PDFRawStream } from 'pdf-lib';
import fs from 'fs';

async function extractImages() {
    try {
        const pdfBytes = fs.readFileSync('GEsTA CONSULTORA2.pdf');
        const pdfDoc = await PDFDocument.load(pdfBytes);
        const pages = pdfDoc.getPages();

        let imageCount = 0;

        console.log("--- Scanning GEsTA CONSULTORA2.pdf for Images ---");

        // Recursive function to process XObjects
        function processXObjects(xObjects, pageIndex) {
            if (!xObjects) return;
            const keys = xObjects.keys();
            for (const key of keys) {
                const xObject = xObjects.lookup(key);

                if (xObject instanceof PDFRawStream) {
                    const dict = xObject.dict;
                    const subtype = dict.lookup(PDFName.of('Subtype'));

                    if (subtype === PDFName.of('Image')) {
                        const filter = dict.lookup(PDFName.of('Filter'));

                        let width = dict.lookup(PDFName.of('Width'));
                        if (width && typeof width.asNumber === 'function') width = width.asNumber();
                        else if (width && typeof width.value === 'number') width = width.value;

                        let height = dict.lookup(PDFName.of('Height'));
                        if (height && typeof height.asNumber === 'function') height = height.asNumber();
                        else if (height && typeof height.value === 'number') height = height.value;

                        console.log(`Page ${pageIndex}, Image ${imageCount}: Filter=${filter}, Width=${width}, Height=${height}`);
                        imageCount++;
                    } else if (subtype === PDFName.of('Form')) {
                        // Recursively process Form XObjects
                        const resources = dict.lookup(PDFName.of('Resources'));
                        if (resources) {
                            const subXObjects = resources.lookup(PDFName.of('XObject'));
                            processXObjects(subXObjects, pageIndex);
                        }
                    }
                }
            }
        }

        // Iterate through all pages
        for (let i = 0; i < pages.length; i++) {
            const page = pages[i];
            const resources = page.node.Resources();
            if (!resources) continue;

            const xObjects = resources.lookup(PDFName.of('XObject'));
            processXObjects(xObjects, i);
        }
        console.log("--- Scan Complete ---");
    } catch (err) {
        console.error("Error extracting images:", err);
    }
}

extractImages();
