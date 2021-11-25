import styled from 'styled-components';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { BasicField } from 'src/lib/element/field';
import { BasicCardList } from 'src/lib/element/card-list';
import {
  CompilationBlockProps,
  getIndexName,
  getIndexItems,
  formNames,
  getIndexPath,
} from '../product-selections.type';
import { ReactComponent as RemoveIcon } from 'src/asset/svg/remove.svg';
import { IconButton } from 'src/lib/element/button';
import { CompilationModal } from './compilation-modal';
import { text } from 'src/lib/common/text';

export function CompilationBlock(props: CompilationBlockProps) {
  const {
    value,
    index,
    listItems,
    remove,
    formik: { handleBlur, handleChange, setFieldValue },
    compilationDelete,
  } = props;

  function handleAdd(id: string, _: any, status: boolean) {
    const result: any = listItems.find((item) => item?.id === id);
    if (result === -1) {
      alert(text('COMPILATION.ERROR_ALERT'));
      return false;
    }
    if (status) {
      value[formNames.blockItems].push(result);
      setFieldValue(getIndexItems(index), value[formNames.blockItems]);
    } else {
      handleRemove(id);
    }
    return true;
  }

  function handleRemove(id: string) {
    const newItems = value[formNames.blockItems].filter(
      (item) => item?.id !== id,
    );
    setFieldValue(getIndexItems(index), newItems);
  }

  function handleRemoveBlock() {
    compilationDelete(value.id);
    remove(index);
  }

  return (
    <SectionLayout>
      <FieldLayout type="double" adaptive>
        <Title tid={value[formNames.blockName]} />
        <BasicField
          titleTid="Ссылка"
          placeholderTid="Ссылка на раздел"
          name={getIndexPath(index)}
          value={value[formNames.blockPath]}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FieldLayout>

      <FieldLayout type="double" adaptive>
        <BasicField
          titleTid="COMPILATION.BLOCK_NAME_TITLE"
          placeholderTid="COMPILATION.BLOCK_NAME_PLACEHOLDER"
          name={getIndexName(index)}
          value={value[formNames.blockName]}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <LineCase>
          <CompilationModal handleAdd={handleAdd} listItems={listItems} />
          <Button onClick={handleRemoveBlock}>
            <RemoveIcon />
          </Button>
        </LineCase>
      </FieldLayout>

      <BasicCardList
        onRemove={handleRemove}
        emptyText="COMPILATION.ADD_PRODUCTS_IN_BLOCK"
        items={value[formNames.blockItems]}
        admin
      />
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  height: fit-content;
  margin-top: 19px;
  align-self: center;
`;
const Button = styled(IconButton)`
  margin-top: 19px;
`;
const LineCase = styled.div`
  display: flex;
  gap: ${spacing(3)};
`;
