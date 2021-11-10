import { FieldArray } from 'formik';
import { ButtonPrimary, ButtonSecondary } from 'src/lib/element/button';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { CompilationBlock } from '.';
import { CompilationArrayProps, formNames } from '../product-selections.type';

export function CompilationArray(props: CompilationArrayProps) {
  const {
    formik,
    listItems,
    formik: { values },
    initialBlock,
  } = props;

  return (
    <FieldArray name={formNames.productBlockArray}>
      {({ remove, push }) => (
        <SectionLayout type="SMALL">
          {values.products.map((value, index: number) => {
            return (
              <CompilationBlock
                listItems={listItems}
                key={index}
                index={index}
                value={value}
                formik={formik}
                remove={remove}
              />
            );
          })}
          <FieldLayout type="double" adaptive>
            <ButtonSecondary
              tid="Добавить блок"
              onClick={() => push(initialBlock)}
            />
            <ButtonPrimary tid="Сохранить" type="submit" />
          </FieldLayout>
        </SectionLayout>
      )}
    </FieldArray>
  );
}
