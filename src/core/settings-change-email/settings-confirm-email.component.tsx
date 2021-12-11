import { ButtonSecondary } from 'src/lib/element/button';
import { BasicField } from 'src/lib/element/field';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import React, { useState, useCallback, SyntheticEvent } from 'react';
import { httpRequest } from 'src/main/http';
import { ErrorAlert, SuccessAlert } from 'src/lib/element/alert';
import { useDispatch } from 'react-redux';
import { authSetData } from 'src/lib/common/auth';

enum FIELD_NAMES {
  OLD_EMAIL = 'codeOldEmail',
  NEW_EMAIL = 'codeNewEmail',
}
interface ValuesType {
  codeOldEmail: string;
  codeNewEmail: string;
}
interface UseValuesType {
  disabled: boolean;
  values: ValuesType;
  success: boolean;
  error: string;
  onSubmit: () => void;
  onChange: (n: FIELD_NAMES) => (e: SyntheticEvent<HTMLInputElement>) => void;
}

const useValues = (): UseValuesType => {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const [values, setValues] = useState({
    codeOldEmail: '',
    codeNewEmail: '',
  });

  const onChange = useCallback(
    (name: FIELD_NAMES) => {
      return (e: SyntheticEvent<HTMLInputElement>) => {
        setSuccess(false);
        setError('');
        setValues({ ...values, [name]: e.currentTarget.value });
      };
    },
    [values],
  );

  const onSubmit = useCallback(async () => {
    if (pending) return;
    setPending(true);
    try {
      const res = await httpRequest({
        method: 'PUT',
        url: '/auth/update-email',
        data: values,
      });
      dispatch(authSetData(res.data.accessToken));
      setSuccess(true);
    } catch (err: any) {
      if (err.response.data) {
        setError(err.response.data.message);
      }
    }
    setPending(false);
  }, [pending, values, success, error]);
  const disabled = !values.codeNewEmail || !values.codeOldEmail;

  return {
    disabled,
    values,
    success,
    error,
    onSubmit,
    onChange,
  };
};

export function SettingsConfirmEmailComponent() {
  const { disabled, values, success, error, onSubmit, onChange } = useValues();
  return (
    <SectionLayout type="TEXT">
      <BasicField
        titleTid="Код с текущей почты"
        placeholderTid="Введите код с текущей почты"
        value={values[FIELD_NAMES.OLD_EMAIL]}
        onChange={onChange(FIELD_NAMES.OLD_EMAIL)}
      />
      <BasicField
        titleTid="Код с новой почты"
        placeholderTid="Введите код с новой почты"
        value={values[FIELD_NAMES.NEW_EMAIL]}
        onChange={onChange(FIELD_NAMES.NEW_EMAIL)}
      />
      <FieldLayout type="double" adaptive>
        <ButtonSecondary
          tid="Подтвердить смену"
          onClick={onSubmit}
          disabled={disabled}
        />
      </FieldLayout>
      {success && <SuccessAlert tid="Успешно" />}
      {error && <ErrorAlert tid={error} />}
    </SectionLayout>
  );
}
