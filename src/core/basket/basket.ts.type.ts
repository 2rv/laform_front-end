import {
  BasicMasterClassType,
  BasicPatternType,
  BasicSewingGoodType,
} from 'src/lib/basic-types';

export interface basketStateType {
  id: string;
  indexId: string;
  type: number;
  optionId: string;
  count: number;
  length: string;
  isCount: false | true;
  isLength: false | true;
  masterClassId: BasicMasterClassType;
  patternProductId: BasicPatternType;
  sewingProductId: BasicSewingGoodType;
}
