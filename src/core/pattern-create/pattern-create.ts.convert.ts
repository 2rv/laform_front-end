import {
  dataValueType,
  FileType,
  formValueType,
  optionType,
} from './pattern-create.ts.type';

function convertOptions(
  options: optionType[],
  isCount: boolean,
  type: 1 | 2,
  filesPdf: FileType[][],
): optionType[] {
  return options.map((item, index: number) => {
    return {
      size: item.size,
      price: Number(Number(item.price).toFixed(2)),
      discount: Number(item.discount) ? item.discount : undefined,
      count: isCount && type === 2 ? Number(item.count) : undefined,
      filesPdf: filesPdf?.[index],
      optionVisibility: item.optionVisibility,
    };
  });
}
function convertRecommendations(recommendation: any = []) {
  return recommendation.map((item: any) => {
    return {
      masterClassId: item.masterClassId,
      patternProductId: item.patternProductId,
      postId: item.postId,
      sewingProductId: item.sewingProductId,
      type:
        item.masterClassId?.type ||
        item.patternProductId?.type ||
        item.postId?.type ||
        item.sewingProductId?.type,
    };
  });
}
export function convertForUpdateImage(
  newImages: any = [],
  formValues: formValueType,
) {
  let indexImage = 0;
  return formValues.images.map((item: any) => {
    if (!Boolean(item.id) && indexImage < newImages.length) {
      item.id = newImages[indexImage].id;
      indexImage = indexImage + 1;
    }
    return item;
  });
}
export function convertForUpdateFilesPdf(
  filesPdf: any = [],
  formValues: formValueType,
) {
  if (formValues.optionType === 0) {
    let indexFilePdf = 0;
    const result = (formValues.filesPdf || []).map((item: any) => {
      if (!Boolean(item.id) && indexFilePdf < filesPdf.length) {
        item.id = filesPdf[0][indexFilePdf].id;
        indexFilePdf = indexFilePdf + 1;
      }
      return { id: item.id };
    });
    return [result];
  } else {
    const result = formValues.options.map((item: any, index: number) => {
      let indexFilePdf = 0;
      item.filesPdf = item.filesPdf.map((fileItem: any) => {
        if (!Boolean(fileItem.id) && indexFilePdf < filesPdf.length) {
          fileItem.id = filesPdf[index][indexFilePdf].id;
          indexFilePdf = indexFilePdf + 1;
        }

        return { id: fileItem.id };
      });
      return item.filesPdf;
    });

    return result;
  }
}
export function convertForUpload(
  images: FileType[],
  filesPdf: FileType[][],
  values: formValueType,
): dataValueType {
  const noneParams = values.optionType === 0;
  const isPrintAndCount =
    values.isCount && values.optionType === 0 && values.type === 2;
  return {
    type: values.type,
    titleRu: values.titleRu,
    vendorCode: values.vendorCode,
    descriptionRu: values.descriptionRu,
    modifierRu: values.modifierRu,
    materialRu: values.materialRu,
    images: images.map((item) => ({
      id: item.id,
    })),
    recommendation: Boolean(values.recommendation.length)
      ? { recommendationProducts: values.recommendation }
      : null,
    categories: values.categories.map((i) => ({ id: i.basicId })),
    complexity: values.complexity,
    filesPdf: noneParams ? filesPdf[0] : null,
    price: noneParams
      ? Number(Number(values.price).toFixed(2)) || 0
      : undefined,
    discount: noneParams
      ? Number(values.discount)
        ? values.discount
        : undefined
      : undefined,
    count: isPrintAndCount ? Number(values.count) : undefined,
    isCount: values.isCount,
    optionType: values.optionType,
    options: convertOptions(
      values.options,
      values.isCount,
      values.type,
      filesPdf,
    ),
    deleted: values.deleted,
    inEnglish: !!values.inEnglish,
  };
}

export function convertForPreUploadPDFFiles(formValues: formValueType) {
  if (formValues.optionType === 0) return [formValues.filesPdf];
  return formValues.options.map((item) => item.filesPdf);
}

export function convertForChange(rowData: dataValueType): formValueType {
  return {
    titleRu: rowData.titleRu,
    vendorCode: rowData.vendorCode,
    type: rowData.type,
    descriptionRu: rowData.descriptionRu,
    modifierRu: rowData.modifierRu,
    images: rowData.images,
    recommendation: convertRecommendations(
      rowData.recommendation?.recommendationProducts,
    ),
    categories: rowData.categories.map((i) => ({
      basicId: i.id,
      tid: i.categoryNameRu,
    })),
    price: Number(rowData.price),
    filesPdf: rowData.filesPdf,
    discount: rowData.discount,
    count: rowData.count,
    isCount: rowData.isCount,
    optionType: rowData.optionType,
    options: rowData.options,
    complexity: rowData.complexity,
    materialRu: rowData.materialRu || [],
    deleted: rowData.deleted,
    inEnglish: !!rowData.inEnglish,
  };
}
