// Función para paginar un array de subastas
const paginateAu = (auctions, page, pageSize) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  return auctions.slice(startIndex, endIndex);
};

// Función para ordenar las subastas
const sortAuctions = (sort, auctions) => {
  const allAuctions = auctions.slice(); // Copia del array para no modificar el original

  switch (sort) {
    case 'asc':
      return allAuctions.sort((a, b) => (a?.name || '').localeCompare(b?.name || ''));
    case 'desc':
      return allAuctions.sort((a, b) => (b?.name || '').localeCompare(a?.name || ''));
    case 'raitingAsc':
      return allAuctions.sort((a, b) => b.rating - a.rating);
    case 'raitingDesc':
      return allAuctions.sort((a, b) => a.rating - b.rating);
    case 'ascPrice':
      return allAuctions.sort((a, b) => a.price - b.price);
    case 'descPrice':
      return allAuctions.sort((a, b) => b.price - a.price);
    default:
      throw new Error('Invalid sort order');
  }
};

const filterByPrice = (price, auctions) => {
  // console.log(auctions);
  // if(auctions.base_price >= price){
  //   return auctions.filter(auction => {
  //     const difPrice = auction.base_price - price;
  //     return auction.base_price >= difPrice && auction.base_price <= difPrice;
  //   });
  // }
  // console.log(auctions);

  if(!auctions) throw new Error ("Not auctions were found.");

  if(price === "morePrice"){
  
    return auctions.filter(auction => auction.base_price >= 1000);
    
  }
  if(price === "lessPrice"){
    
    return auctions.filter(auction => auction.base_price <= 1000);
  }

};


// Función para filtrar subastas por tipo (AU o IA)
const getAuByType = (type, auctions) => {
  return auctions.filter(auction => auction.type === type);
};

// Función para filtrar subastas por categoría
const getAuByCategory = (category, auctions) => {
  return auctions.filter(auction => auction.category_id === category);
};

// Función para filtrar subastas por subcategoría
const getAuBySubCategory = (subCategory, auctions) => {
  return auctions.filter(auction => auction.sub_category_id === subCategory);
};

// Exportar todas las funciones
module.exports = {
  paginateAu,
  sortAuctions,
  getAuByType,
  getAuByCategory,
  getAuBySubCategory, 
  filterByPrice
};
