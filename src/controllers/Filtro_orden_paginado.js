const paginateAu = (auctions, page, pageSize) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  return auctions.slice(startIndex, endIndex);
}; 

const sortAuctions = async (sort, auctions) => {
  const allAuctions = await auctions.slice(); // Hacer una copia del array para no modificar el original
  console.log(allAuctions);
  // let nameOfProduct = allAuctions.product_name ? allAuctions.product_name.toLowerCase() : '';

  switch (sort) {
    case 'asc':
      return allAuctions.sort((a, b) =>
        (a?.product_name || '').localeCompare(b?.dataValues?.product_name || '')
      );
    case 'des':
      return allAuctions.sort((a, b) =>
        (b?.product_name || '').localeCompare(a?.dataValues?.product_name || '')
      );
    case 'raitingAsc':
      return allAuctions.sort((a, b) => a.rating - b.rating);
    case 'raitingDesc':
      return allAuctions.sort((a, b) => b.rating - a.rating);
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

module.exports = {
  paginateAu,
  sortAuctions,
  getAuByType
}