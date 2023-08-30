const PDFDocument = require('pdfkit');
const fs = require('fs');
const { User } = require('../../db.js');

async function generatePDF() {
    const doc = new PDFDocument();

    // Fetch the data from the 'Users' table
    const users = await User.findAll();

    // Define the table headers
    const headers = [
        'Ref',
        'Nombre',
        'ID Num',
        'Telefono',
        'Email',
        'Dirección',
        'Empresa',
        'NIT',
        'CIIU',
        'Sector',
    ];

    // Set the initial y-coordinate for the table
    let y = 30;

    // Define the custom x-coordinates for each header
const customXCoordinates = [30, 52, 108, 145, 194, 285, 420, 480, 520, 540];

    // Draw the table headers
    headers.forEach((header, index) => {
        const x = customXCoordinates[index];

        doc
            .fontSize(8)
            .text(header, x, y)
            .moveDown(0.5);
    });

    // Set the font size for the table content
    doc.fontSize(6);

    // Draw the table rows
    users.forEach(user => {
        y += 10; // Adjust the row height as needed

        doc
            .text(user.user_id.toString(), 30, y)
            .text(user.name, 52, y)
            .text(user.num_ident, 108, y)
            .text(user.phone, 145, y)
            .text(user.email, 194, y)
            .text(user.adress.join(', '), 285, y)
            .text(user.company_name, 420, y)
            .text(user.NIT, 480, y)
            .text(user.CIIU, 520, y)
            .text(user.sector, 540, y)
            // .moveDown(0.1);
    });

    // Save the PDF file
    doc.pipe(fs.createWriteStream('users.pdf'));
    doc.end();
}

module.exports = { generatePDF };
