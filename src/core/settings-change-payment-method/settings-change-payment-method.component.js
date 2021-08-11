import styled from 'styled-components';

import { FieldSelect } from '../../lib/element/field';
import { TitlePrimary } from '../../lib/element/title';
import { ButtonSecondary } from '../../lib/element/button';
import { IndentLayout } from '../../lib/element/layout';
import { SuccessAlert } from '../../lib/element/alert';

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
      <IndentLayout type="small">
        <TitlePrimary tid="SETTINGS.CHANGE_PAYMENT_METHOD.TITLE" />
        <FieldSelect
          name={fieldPaymentMethod}
          options={options}
          value={values[fieldPaymentMethod]}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {isSuccess && (
          <SuccessAlert tid="SETTINGS.CHANGE_PAYMENT_METHOD.SUCCESS" />
        )}
        <Submit tid="SETTINGS.CHANGE_PAYMENT_METHOD.SUBMIT" type="submit" />
      </IndentLayout>
    </form>
  );
}

const Submit = styled(ButtonSecondary)`
  width: 50%;
`;