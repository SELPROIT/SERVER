// Función para paginar un array de subastas
const paginateAu = (auctions, page, pageSize) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  return auctions.slice(startIndex, endIndex);
};

// Función para ordenar las subastas
const sortAuctions = (sort, auctions) => {
  // Verificar si el criterio de ordenación es válido
  if (
    ![
      "asc",
      "desc",
      "raitingAsc",
      "raitingDesc",
      "ascPrice",
      "descPrice",
    ].includes(sort)
  ) {
    throw new Error("Invalid sort order");
  }
console.log(sort, auctions);
  // Definir las funciones de ordenación para cada criterio
  const sortingFunctions = {
    asc: (a, b) => (a.name || "").localeCompare(b.name || ""),
    desc: (a, b) => (b.name || "").localeCompare(a.name || ""),
    raitingAsc: (a, b) => b.rating - a.rating,
    raitingDesc: (a, b) => a.rating - b.rating,
    ascPrice: (a, b) => a.proposed_price - b.proposed_price,
    descPrice: (a, b) => b.proposed_price - a.proposed_price,
  };

  // Obtener la función de ordenación correspondiente al criterio
  const sortingFunction = sortingFunctions[sort];

  // Crear una copia del array de subastas para no modificar el original
  const allAuctions = auctions.slice();

  // Ordenar las subastas utilizando la función de ordenación
  return allAuctions.sort(sortingFunction);
};

// Función para filtrar subastas por precio
// const filterByPrice = (filter, auctions) => {
//   // Verificar si se han proporcionado subastas
//   if (!auctions) {
//     throw new Error("No auctions were found.");
//   }

//   // Filtrar subastas

//   switch (filter) {
//     case "morePrice":
//       return auctions.filter((auction) => auction.base_price >= 1000);
//     case "lessPrice":
//       return auctions.filter((auction) => auction.base_price <= 1000);
//     default:
//       throw new Error("Filtros incorrerrectos.");
//   }
// }

  
// Función para filtrar subastas por tipo (AU o IA)
const getAuByType = (type, auctions) => {
  return auctions.filter(auction => auction.type === type);
};

// Función para filtrar subastas por categoría
const getAuByCategory = (category, auctions) => {
  return auctions.filter(auction => auction.category === category);
};

// Función para filtrar subastas por subcategoría
const getAuBySubCategory = (subCategory, auctions) => {
  return auctions.filter(auction => auction.subCategory === subCategory);
};


// Exportar las funciones de ordenación y filtrado
module.exports = {
  sortAuctions,
  // filterByPrice,
  paginateAu,
  getAuByType,
  getAuByCategory,
  getAuBySubCategory
};