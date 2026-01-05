
const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

async function splitPdf() {
    const pdfBytes = fs.readFileSync('GEsTA CONSULTORA2.pdf');
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const pageCount = pdfDoc.getPageCount();

    if (!fs.existsSync('public/temp_pdfs')) {
        fs.mkdirSync('public/temp_pdfs');
    }

    console.log(`Splitting ${pageCount} pages...`);

    for (let i = 0; i < pageCount; i++) {
        const newPdf = await PDFDocument.create();
        const [copiedPage] = await newPdf.copyPages(pdfDoc, [i]);
        newPdf.addPage(copiedPage);
        const pdfBytes = await newPdf.save();
        fs.writeFileSync(`public/temp_pdfs/page_${i + 1}.pdf`, pdfBytes);
        console.log(`Saved page ${i + 1}`);
    }
}

splitPdf().catch(err => console.error(err));
