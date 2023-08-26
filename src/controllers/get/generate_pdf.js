const PDFDocument = require('pdfkit');
const fs = require('fs');
const { User } = require('../../db');

async function generatePDF() {
    const doc = new PDFDocument();

    // Fetch the data from the 'Users' table
    const users = await User.findAll();

    // Define the table headers
    const headers = [
        'ID',
        'ID ref',
        'Nombre',
        'Numero de Identificacion',
        'Nombre de Usuario',
        'Telefono',
        'Email',
        'Dirección',
        'Nombre de la Empresa',
        'NIT',
        'Sector',
        'CIIU',
        'Subcategorias',
        'RUT',
        'Camara de Comercio',
        'Identificacion de Representante Legal',
        'Referencias Comerciales'
    ];

    // Set the initial y-coordinate for the table
    let y = 50;

    // Draw the table headers
    headers.forEach(header => {
        doc
            .fontSize(12)
            .text(header, 50, y)
            .moveDown(0.5);
    });

    // Set the font size for the table content
    doc.fontSize(10);

    // Draw the table rows
    users.forEach(user => {
        y += 20; // Adjust the row height as needed

        doc
            .text(user.id.toString(), 50, y)
            .text(user.user_id.toString(), 100, y)
            .text(user.name, 150, y)
            // Add more text calls for other table columns
            .moveDown(0.5);
    });

    // Save the PDF file
    doc.pipe(fs.createWriteStream('users.pdf'));
    doc.end();
}

module.exports = { generatePDF };
