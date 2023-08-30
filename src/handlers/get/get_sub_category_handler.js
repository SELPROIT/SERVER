const { getAllSubCategories } = require('../../controllers/get/get_sub_category_controller.js');

function toSubCategory(req, res) {
    getAllSubCategories()
        .then(subCategories => {
            if (!subCategories) {
                return res.status(400).json({ message: "Error en la respuesta de la base de datos" });
            }
            res.status(200).json({ message: "Subcategorías obtenidas exitosamente", data: subCategories });
        })
        .catch(error => {
            return res.status(500).json({ message: "Error al obtener subcategorías", error: null });
        });
}

module.exports = {
    toSubCategory
};
