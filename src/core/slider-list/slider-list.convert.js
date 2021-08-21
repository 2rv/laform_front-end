const convertSliderData = (rowData) => {
  return rowData.map((item) => ({
    id: item.id,
    name: item.headingTextRu,
    image: item.imageUrl?.fileUrl,
  }));
};
