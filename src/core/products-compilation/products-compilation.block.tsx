import styled from 'styled-components';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { BasicField, FieldCheckbox } from 'src/lib/element/field';
import { ReactComponent as RemoveIcon } from 'src/asset/svg/remove.svg';
import { IconButton } from 'src/lib/element/button';
import { RecomendationBlock } from 'src/lib/common/block-select-recomendation';
import { ProductsCompilationBlockProps } from './products-compilation.type';

export function ProductsCompilationBlock(props: ProductsCompilationBlockProps) {
  const {
    index,
    value,
    formik: { handleBlur, handleChange, setFieldValue },
    remove,
    onDelete,
  } = props;

  function handleRemoveBlock() {
    if (value.id) {
      onDelete(value.id);
    }
    remove(index);
  }

  return (
    <SectionLayout>
      <LineCase>
        <Title tid={value.title} />
        <Button onClick={handleRemoveBlock}>
          <RemoveIcon />
        </Button>
      </LineCase>

      <FieldLayout type="double" adaptive>
        <BasicField
          titleTid="COMPILATION.BLOCK_NAME_TITLE"
          placeholderTid="COMPILATION.BLOCK_NAME_PLACEHOLDER"
          name={`products.${index}.title`}
          value={value.title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <BasicField
          titleTid="Ссылка"
          placeholderTid="Ссылка на раздел"
          name={`products.${index}.path`}
          value={value.path}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FieldCheckbox
          titleTid="На английском"
          labelTid="Этот товар на английском"
          name={`products.${index}.inEnglish`}
          checked={value.inEnglish}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FieldLayout>
      <RecomendationBlock
        value={value.compilationProducts}
        name={`products.${index}.compilationProducts`}
        setFieldValue={setFieldValue}
      />
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  height: fit-content;
  align-self: center;
`;
const Button = styled(IconButton)`
  padding: 0;
`;
const LineCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${spacing(3)};
`;
