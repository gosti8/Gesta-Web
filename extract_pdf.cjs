const fs = require('fs');
const pdf = require('pdf-parse');

try {
    const pdfFile = 'manual_fixed.pdf';
    console.log("Reading file:", pdfFile);
    let dataBuffer = fs.readFileSync(pdfFile);

    pdf(dataBuffer).then(function (data) {
        console.log("--- START PDF CONTENT ---");
        console.log(data.text);
        console.log("--- END PDF CONTENT ---");
    }).catch(function (error) {
        console.error("Error parsing PDF:", error);
    });
} catch (err) {
    console.error("Error reading file:", err);
}
