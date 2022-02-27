import { Formik } from 'formik';
import styled from 'styled-components';
import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { THEME_SIZE } from '../../lib/theme';
import { TextSecondary } from '../../lib/element/text';
import { BasketComponentProps } from './basket.type';
import { CartSign, CartTables, FormComponent } from './frames';

export function BasketComponent(props: BasketComponentProps) {
  const {
    isEmpty,
    isAuth,

    changeItem,
    deleteItem,
    sewingProducts,
    masterProducts,
    patternProducts,
    initialValues,
    validate,
    onSubmit,
    ...otherProps
  } = props;
  return (
    <SectionLayout>
      <Title tid="BASKET.TITLE" />
      {isEmpty ? (
        <TextSecondary tid="BASKET.CART_IS_EMPTY" />
      ) : (
        <SectionLayout>
          <CartTables
            changeItem={changeItem}
            deleteItem={deleteItem}
            sewingProducts={sewingProducts}
            masterProducts={masterProducts}
            patternProducts={patternProducts}
          />

          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
            enableReinitialize
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <FormComponent
                  formik={formik}
                  isAuth={isAuth}
                  {...otherProps}
                />
              </form>
            )}
          </Formik>
        </SectionLayout>
      )}
      {!isAuth && <CartSign />}
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
