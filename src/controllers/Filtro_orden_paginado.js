const paginateCards = (cards, page, pageSize) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  return cards.slice(startIndex, endIndex);
}; 