import { BasicCompilationType } from 'src/lib/basic-types';
import { CompilationDto } from 'src/lib/basic-types/create';
import { convertProductsLink } from 'src/lib/common/block-select-recomendation';
import { CompilationType } from './products-compilation.type';

export function convertProductsCompilation(
  data: BasicCompilationType[],
): CompilationType[] {
  return data.map((item) => ({
    id: item.id,
    title: item.title,
    path: item.path,
    compilationProducts: convertProductsLink(item.compilationProducts),
    inEnglish: !!item.inEnglish,
  }));
}

export function convertProductsCompilationForSave(
  data: CompilationType[],
): CompilationDto[] {
  return data.map((item) => ({
    id: item.id,
    title: item.title,
    path: item.path,
    compilationProducts: item.compilationProducts.map((item) => ({
      id: item.id,
      masterClassId: item.masterClassId,
      postId: item.postId,
      patternProductId: item.patternProductId,
      sewingProductId: item.sewingProductId,
    })),
    inEnglish: !!item.inEnglish,
  }));
}
