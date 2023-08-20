const paginateAu = (auctions, page, pageSize) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  return auctions.slice(startIndex, endIndex);
}; 

const sortAuctions = async (sort, auctions) => {
  const allAuctions = await auctions.slice(); // Hacer una copia del array para no modificar el original
 

  switch (sort) {
    case 'asc':
      return allAuctions.sort((a, b) =>
        (a?.name || '').localeCompare(b?.name || '')
      );
    case 'des':
      return allAuctions.sort((a, b) =>
        (b?.name || '').localeCompare(a?.name || '')
      );
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


const getAuByType = async (type = 'AU', auctions) => {
  const allAuctions = await auctions;
  if (type === 'AU') {
    const filteredAuctions = allAuctions.filter((a) =>
      a.type === 'AU');
    return filteredAuctions;
  } else if (type === 'IA') {
    const filteredAuctions = allAuctions.filter((a) =>
      a.type === 'IA');
    return filteredAuctions;
  }
};

const getAuByCategory = (category, auctions) => {
  console.log("en el getAuByCategory. Las auctions: " + auctions + "La categoría " + category);
  return auctions.filter(auction => auction.category_id === category);
}

const getAuBySubCategory = (subCategory, auctions) => {
  console.log("en el getAuBySubCategory. Las auctions: " + auctions + "La subcategoría " + subCategory);
  return auctions.filter(auction => auction.sub_category_id === subCategory);
}



module.exports = {
  paginateAu,
  sortAuctions,
  getAuByType,
  getAuByCategory,
  getAuBySubCategory
}