import { TextPrimary, TextSecondary } from 'src/lib/element/text';
import styled from 'styled-components';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import {
  ButtonSecondary,
  IconButton,
  TextButton,
} from 'src/lib/element/button';
import { ReactComponent as RemoveIcon } from '../../../asset/svg/remove.svg';
import { ModalFull } from 'src/lib/element/modal';
import { TitlePrimary } from 'src/lib/element/title';
import { useState, SyntheticEvent } from 'react';
import { BasicField } from 'src/lib/element/field';
import { CategoriesModalProps, CategoryType } from './categories.type';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { Divider } from 'src/lib/element/divider';
import { ErrorAlert } from 'src/lib/element/alert';

export function CategoriesModal(props: CategoriesModalProps) {
  const {
    onOpen,
    setOpen,
    categories,
    createPending,
    createCategory,
    createError,
    deletePending,
    createErrorMessage,
    deleteCategory,
    deleteError,
    deleteErrorMessage,
  } = props;
  const [value, setValue] = useState('');

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleCreate = () => {
    createCategory(value);
    setValue('');
  };

  const handleDelete = (item: CategoryType) => {
    deleteCategory(item.basicId);
  };

  return (
    <ModalFull onOpen={onOpen}>
      <Container>
        <HeaderCase>
          <TitlePrimary tid="Категории" />
          <IconButton onClick={() => setOpen(false)}>
            <RemoveIcon />
          </IconButton>
        </HeaderCase>
        <FieldLayout type="double" adaptive>
          <BasicField
            placeholderTid="Введите название категории"
            value={value}
            onChange={handleChange}
          />
          <ButtonSecondary
            disabled={createPending || deletePending}
            tid="Создать"
            onClick={handleCreate}
          />
          {Boolean(
            createError ||
              createErrorMessage ||
              deleteError ||
              deleteErrorMessage,
          ) && <ErrorAlert tid={createErrorMessage || deleteErrorMessage} />}
        </FieldLayout>
        <TextTitle tid="Список категорий" />
        {categories.map((item) => (
          <SectionLayout type="SMALL" key={item.basicId}>
            <LineCase>
              <TextSecondary tid={item.tid} />
              <Button
                disabled={createPending || deletePending}
                tid="Удалить"
                onClick={() => handleDelete(item)}
              />
            </LineCase>
            <Divider />
          </SectionLayout>
        ))}
      </Container>
    </ModalFull>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: ${spacing(6)};
`;
const HeaderCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TextTitle = styled(TextPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;
const LineCase = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${spacing(2)};
`;
const Button = styled(TextButton)`
  width: auto;
  padding: 0;
`;
