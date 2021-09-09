export function convertForCreateComment(id, type, text, commentId) {
  if (type === 0) {
    return {
      text: text,
      masterClassId: id,
      commentId: commentId,
    };
  }
  if (type === 1) {
    return {
      text: text,
      patternProductId: id,
      commentId: commentId,
    };
  }
  if (type === 2) {
    return {
      text: text,
      patternProductId: id,
      commentId: commentId,
    };
  }
  if (type === 3) {
    return {
      text: text,
      sewingProductId: id,
      commentId: commentId,
    };
  }
  if (type === 4) {
    return {
      text: text,
      postId: id,
      commentId: commentId,
    };
  }
}
