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
} from '../product-selections.type';
import { ReactComponent as RemoveIcon } from 'src/asset/svg/remove.svg';
import { IconButton } from 'src/lib/element/button';
import { CompilationModal } from './compilation-modal';

export function CompilationBlock(props: CompilationBlockProps) {
  const {
    value: { title, items },
    index,
    listItems,
    remove,
    formik: { handleBlur, handleChange, setFieldValue },
  } = props;

  function handleAdd(id: string, _: any, status: boolean) {
    const result: any = listItems.find((item) => item?.id === id);
    if (result === -1) {
      alert('Произошла ошибка товар не добавлен');
      return false;
    }
    if (status) {
      items.push(result);
      setFieldValue(getIndexItems(index), items);
    } else {
      handleRemove(id);
    }
    return true;
  }

  function handleRemove(id: string) {
    const newItems = items.filter((item) => item?.id !== id);
    setFieldValue(getIndexItems(index), newItems);
  }

  return (
    <SectionLayout>
      <HeaderCase>
        <Title tid={title} />
        <FieldLayout type="double" adaptive>
          <BasicField
            titleTid="Название"
            placeholderTid="Название блока"
            name={getIndexName(index)}
            value={title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <LineCase>
            <CompilationModal handleAdd={handleAdd} listItems={listItems} />
            <Button onClick={() => remove(index)}>
              <RemoveIcon />
            </Button>
          </LineCase>
        </FieldLayout>
      </HeaderCase>
      <BasicCardList
        onRemove={handleRemove}
        emptyText="Добавьте товары в список"
        items={items}
        admin
      />
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Button = styled(IconButton)`
  margin-top: 19px;
`;
const HeaderCase = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${spacing(3)};
  align-items: center;
`;
const LineCase = styled.div`
  display: flex;
  gap: ${spacing(3)};
`;
