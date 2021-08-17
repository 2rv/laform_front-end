export const convertCompilationData = (data, type) => ({
  id: data?.id,
  name: data?.titleRu,
  image: data.imageUrls[0]?.fileUrl,
  type,
});
