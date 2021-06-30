import styled from 'styled-components';

import { FieldPrimary, FieldSelect } from '../../../../lib/element/field';
import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonSecondary } from '../../../../lib/element/button';
import { FieldLayout, IndentLayout } from '../../../../lib/element/layout';
import { THEME_SIZE } from '../../../../lib/theme';
import { LoaderPrimary } from '../../../../lib/element/loader';
import { ErrorRequest } from '../../../../lib/element/error';
import { SuccessRequest } from '../../../../lib/element/success';

export function SettingsFormChangeDeliveryInfoComponent(props) {
  const {
    deliveryTypeOptions,
    fieldFullname,
    fieldPhone,
    fieldLocation,
    fieldDeliveryType,

    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,

    dataPending,
    formPending,
    formSuccess,
    formError,
    errorMessage,
  } = props;

  const getFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  return (
    <form onSubmit={handleSubmit}>
      <IndentLayout type="small">
        <Title tid="SETTINGS.CHANGE_DELIVERY_INFO.TITLE" />
        <FieldLayout>
          <FieldPrimary
            titleTid="SETTINGS.CHANGE_DELIVERY_INFO.FULLNAME.TITLE"
            placeholderTid="SETTINGS.CHANGE_DELIVERY_INFO.FULLNAME.PLACEHOLDER"
            name={fieldFullname}
            value={values[fieldFullname]}
            error={getFieldError(fieldFullname)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FieldPrimary
            titleTid="SETTINGS.CHANGE_DELIVERY_INFO.PHONE.TITLE"
            placeholderTid="SETTINGS.CHANGE_DELIVERY_INFO.PHONE.PLACEHOLDER"
            name={fieldPhone}
            value={values[fieldPhone]}
            error={getFieldError(fieldPhone)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FieldPrimary
            titleTid="SETTINGS.CHANGE_DELIVERY_INFO.LOCATION.TITLE"
            placeholderTid="SETTINGS.CHANGE_DELIVERY_INFO.LOCATION.PLACEHOLDER"
            name={fieldLocation}
            value={values[fieldLocation]}
            error={getFieldError(fieldLocation)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FieldSelect
            titleTid="SETTINGS.CHANGE_DELIVERY_INFO.DELIVERY_TYPE.TITLE"
            options={deliveryTypeOptions}
            name={fieldDeliveryType}
            value={values[fieldDeliveryType]}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {formError && <ErrorRequest tid={errorMessage} />}
          {formSuccess && (
            <SuccessRequest tid="SETTINGS.CHANGE_DELIVERY_INFO.SUCCESS" />
          )}
        </FieldLayout>
        <Submit
          tid="SETTINGS.CHANGE_DELIVERY_INFO.SUBMIT"
          type="submit"
          disabled={dataPending || formPending}
        />
        {(dataPending || formPending) && <LoaderPrimary />}
      </IndentLayout>
    </form>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;

const Submit = styled(ButtonSecondary)`
  width: 50%;
`;