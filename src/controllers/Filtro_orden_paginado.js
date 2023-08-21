const paginateAu = (auctions, page, pageSize) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  return auctions.slice(startIndex, endIndex);
}; 

const sortAuByName = async (sort = 'asc', auctions) => {
  const allAuctions = await auctions
  const sortedAuctions = allAuctions.slice().sort((a, b) => {
    let nameA = a.product_name ? a.product_name.toLowerCase() : '';
    let nameB = b.product_name ? b.product_name.toLowerCase() : '';


    if (sort === 'asc') {
      return nameA.localeCompare(nameB);
    } else if (sort === 'des') {
      return nameB.localeCompare(nameA);
    } else {
      throw new Error('Invalid sort order');
    }
  });
  return sortedAuctions;
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
  sortAuByName,
  getAuByType,
}