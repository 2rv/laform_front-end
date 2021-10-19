interface FormikProps {
  errors?: any;
  touched?: any;
  values?: any;
  setFieldValue: Function;
  handleChange?: Function;
  handleBlur?: Function;
  onChange?: Function;
}

export interface ComplexityFieldProps extends FormikProps {
  name: string;
  value: number;
  title: string;
}
