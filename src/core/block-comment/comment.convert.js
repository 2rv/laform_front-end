export function convertForCreateComment(id, type, text) {
  if (type === 0) {
    return {
      text: text,
      masterClassId: id,
    };
  }
  if (type === 1) {
    return {
      text: text,
      patternProductId: id,
    };
  }
  if (type === 2) {
    return {
      text: text,
      patternProductId: id,
    };
  }
  if (type === 3) {
    return {
      text: text,
      sewingProductId: id,
    };
  }
  if (type === 4) {
    return {
      text: text,
      postId: id,
    };
  }
}
