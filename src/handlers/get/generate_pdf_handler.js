const { generatePDF } = require("../../controllers/get/generate_pdf")



const PDFgenerate = async (req, res) => {
    try {
        await generatePDF()
        res.send('PDF generado exitosamente')
    } catch (error) {
        res.send({error: error.message})
    }
}

module.exports = { PDFgenerate }