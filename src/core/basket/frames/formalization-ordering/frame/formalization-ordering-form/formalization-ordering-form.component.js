import styled from 'styled-components';

import { FormalizationOrderingFooterComponent } from './formalization-ordering-footer.component';
import { FormalizationFormFieldsComponent } from './formalization-ordering-form-fields.component';

import { IndentLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';

import { THEME_COLOR } from 'src/lib/theme';

export function FormalizationFormComponent(props) {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <IndentLayout type="small">
        <TitlePrimary tid="BASKET.FORM.TITLE" />
        <FormalizationFormFieldsComponent {...props} />
        <Divider />
        <FormalizationOrderingFooterComponent />
      </IndentLayout>
    </form>
  );
}

const Divider = styled.hr`
  border: none;
  border-bottom: 3px solid ${THEME_COLOR.BACKGROUND.GRAY};
  border-radius: 1.5px;
  width: 100%;
  margin: 0;
`;
