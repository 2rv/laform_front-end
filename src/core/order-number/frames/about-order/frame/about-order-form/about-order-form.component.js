import styled from 'styled-components';

import { AboutOrderFooterComponent } from './about-order-footer.component';
import { AboutOrderFormFieldsComponent } from './about-order-form-fields.component';

import { IndentLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { ButtonSecondary } from 'src/lib/element/button';

import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';

export function AboutOrderFormComponent(props) {
  const {
    values,
    handleSubmit,
    handleChange,

    orderNumberDetails,
    fieldOrderStatus,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <IndentLayout type="small">
        <AboutOrderText tid="ORDER_NUMBER.FORM.TITLE" />
        <AboutOrderFormFieldsComponent {...props} />
        <Divider />
        <AboutOrderFooterComponent
          values={values}
          handleChange={handleChange}
          fieldOrderStatus={fieldOrderStatus}
          orderNumberDetails={orderNumberDetails}
        />
      </IndentLayout>
    </form>
  );
}

const AboutOrderText = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 3px solid ${THEME_COLOR.BACKGROUND.GRAY};
  border-radius: 1.5px;
  width: 100%;
  margin: 0;
`;
