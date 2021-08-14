import { FieldSelect } from '../../lib/element/field';
import { TitlePrimary } from '../../lib/element/title';
import { ButtonSecondary } from '../../lib/element/button';
import { SuccessAlert } from '../../lib/element/alert';
import { SectionLayout, FieldLayout } from '../../lib/element/layout';
import { THEME_SIZE } from '../../lib/theme';
import styled from 'styled-components';

export function SettingsChangePaymentMethodComponent(props) {
  const {
    fieldPaymentMethod,

    options,
    values,

    handleChange,
    handleBlur,
    handleSubmit,

    isSuccess,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <SectionLayout type="SMALL">
        <Title tid="SETTINGS.CHANGE_PAYMENT_METHOD.TITLE" />
        <SectionLayout type="TEXT">
          <FieldSelect
            titleTid="Способ оплаты"
            name={fieldPaymentMethod}
            options={options}
            value={values[fieldPaymentMethod]}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FieldLayout type="double">
            <ButtonSecondary
              tid="SETTINGS.CHANGE_PAYMENT_METHOD.SUBMIT"
              type="submit"
            />
          </FieldLayout>
          {isSuccess && (
            <SuccessAlert tid="SETTINGS.CHANGE_PAYMENT_METHOD.SUCCESS" />
          )}
        </SectionLayout>
      </SectionLayout>
    </form>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
