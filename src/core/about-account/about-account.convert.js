export const convertLikesData = (data) => ({
  id: data.id,
  name: data.postId.titleRu,
  image: data?.postId.image?.fileUrl ?? null,
});

export const convertCommentsData = (data) => ({
  id: data.id,
  name: data?.postName ?? null,
  image: data?.postId.image?.fileUrl ?? null,
  comment: data.text,
});
