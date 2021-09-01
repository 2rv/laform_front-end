export const convertLikesData = (data) => ({
  name: data.postId.titleRu,
  image: data.postId?.image?.fileUrl ?? '',
  params: [],
});
