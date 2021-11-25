import {
  convertArticleProducts,
  convertMasterClassProducts,
  convertMultiProducts,
  convertPatternProducts,
  convertSewingGoodProducts,
} from 'src/lib/common/product-converters';
import { CardMultiType } from 'src/lib/element/card';
import {
  CompilationsPerformProps,
  productSelectionBlock,
} from './product-selections.type';

export function compilationsPerform(props: CompilationsPerformProps) {
  const {
    compilationRes = [],
    patternRes = [],
    articleRes = [],
    sewingRes = [],
    masterRes = [],
  } = props;

  const compilationData: productSelectionBlock[] = compilationRes.map(
    (item) => {
      const compilationProducts = convertMultiProducts(
        item.compilationProducts,
      );
      return {
        id: item.id,
        title: item.title,
        path: item.path,
        compilationProducts: compilationProducts,
      };
    },
  );

  const patternData = convertPatternProducts(patternRes);
  const articleData = convertArticleProducts(articleRes);
  const sewingData = convertSewingGoodProducts(sewingRes);
  const masterData = convertMasterClassProducts(masterRes);

  const baseArray: CardMultiType[] = [];
  const listItems: CardMultiType[] = baseArray.concat(
    patternData,
    sewingData,
    masterData,
    articleData,
  );

  return {
    products: compilationData,
    listItems: listItems,
  };
}
