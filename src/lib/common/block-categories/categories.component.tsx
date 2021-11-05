import { FieldArray } from 'formik';
import styled from 'styled-components';
import { SyntheticEvent, useState } from 'react';
import { FieldLayout, SectionLayout } from '../../element/layout';
import { CategoriesComponentProps, CATEGORIES_TYPE } from './categories.type';
import { FieldSelect } from 'src/lib/element/field';
import { TextPrimary, TextSecondary } from 'src/lib/element/text';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { IconButton } from 'src/lib/element/button';
import { ReactComponent as RemoveIcon } from '../../../asset/svg/remove.svg';
import { ReactComponent as PlusIcon } from '../../../asset/svg/plus-icon.svg';
import { CategoriesModal } from './categories.modal';
import { LoaderPrimary } from 'src/lib/element/loader';
import { ErrorAlert } from 'src/lib/element/alert';

export function CategoriesComponent(props: CategoriesComponentProps) {
  const {
    categories,
    uploadPending,
    uploadError,
    uploadErrorMessage,
    createCategory,
    createPending,
    createError,
    createErrorMessage,
    deleteCategory,
    deletePending,
    deleteError,
    deleteErrorMessage,
    values,
  } = props;

  const [open, setOpen] = useState(false);
  const [categoryExists, setCategoryExists] = useState('');

  return (
    <SectionLayout type="TEXT">
      {(uploadPending || createPending || deletePending) && <LoaderPrimary />}
      <Title tid="Категории" />
      <FieldArray name={CATEGORIES_TYPE.CATEGORIES}>
        {({ remove, push }) => {
          const handleAdd = (e: SyntheticEvent<HTMLInputElement>) => {
            const value: number = Number(e.currentTarget.value);
            const isCategoryExists: boolean = values[
              CATEGORIES_TYPE.CATEGORIES
            ].some((category: any) => {
              return category.tid === categories[value].tid;
            });

            if (isCategoryExists) {
              setCategoryExists('ERROR.CATEGORY_ALREADY_EXISTS');
              return;
            }

            if (value === 999999 || value === NaN) return;
            push(categories[value]);
            setCategoryExists('');
          };
          return (
            <FieldLayout type="double" adaptive>
              {values[CATEGORIES_TYPE.CATEGORIES].map(
                (value: any, index: number) => (
                  <LineCase key={index}>
                    <CategoryText tid={value.tid} />
                    <IconButton onClick={() => remove(index)}>
                      <RemoveIcon />
                    </IconButton>
                  </LineCase>
                ),
              )}
              <LineCase>
                <FieldSelect
                  options={[
                    { id: 999999, tid: 'Выберите категорию' },
                    ...categories,
                  ]}
                  onChange={handleAdd}
                  value={999999}
                />
                <Button onClick={() => setOpen(true)}>
                  <StyledPlusIcon />
                </Button>
              </LineCase>
            </FieldLayout>
          );
        }}
      </FieldArray>
      {Boolean(categoryExists.length > 0) && (
        <CategoryExistsText tid={categoryExists} />
      )}
      <CategoriesModal
        categories={categories}
        createPending={createPending}
        createCategory={createCategory}
        createError={createError}
        createErrorMessage={createErrorMessage}
        deletePending={deletePending}
        deleteCategory={deleteCategory}
        deleteError={deleteError}
        deleteErrorMessage={deleteErrorMessage}
        onOpen={open}
        setOpen={setOpen}
      />
      {(uploadError || uploadErrorMessage) && (
        <ErrorAlert tid={uploadErrorMessage} />
      )}
    </SectionLayout>
  );
}
const CategoryText = styled(TextPrimary)`
  background-color: ${THEME_COLOR.GRAY};
  height: 46px;
  width: 100%;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  display: flex;
  align-items: center;
  padding: 0 ${spacing(3)};
`;
const Title = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const LineCase = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
`;
const Button = styled(IconButton)`
  background-color: ${THEME_COLOR.SECONDARY_DARK};
  padding: 0;
`;
const StyledPlusIcon = styled(PlusIcon)`
  fill: ${THEME_COLOR.WHITE};
  width: 18;
  height: 18;
`;

const CategoryExistsText = styled(TextSecondary)`
  color: ${THEME_COLOR.TEXT.DANGER};
`;
