import { ModifierComponent } from './component';
import { ModifierContainerProps } from './type';
import { THEME_COLOR } from 'src/lib/theme';

export function ModifierContainer(props: ModifierContainerProps) {
  const {
    titleTid,
    placeholderTid,
    colorTitleTid,

    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    name,
    colorName,
  } = props;

  return (
    <ModifierComponent
      titleTid={titleTid}
      placeholderTid={placeholderTid}
      colorTitleTid={colorTitleTid}
      name={name}
      colorName={colorName}
      values={values}
      error={touched[name] && errors[name]}
      handleChange={handleChange}
      handleBlur={handleBlur}
      colors={colors}
    />
  );
}

const colors = [
  { tid: 'белый', id: THEME_COLOR.WHITE },
  { tid: 'Розовый', id: THEME_COLOR.PRIMARY },
  { tid: 'Бордовый', id: THEME_COLOR.PRIMARY_DARK },
  { tid: 'Чёрный 1', id: THEME_COLOR.SECONDARY },
  { tid: 'чёрный 2', id: THEME_COLOR.SECONDARY_DARK },
  { tid: 'серый 1', id: THEME_COLOR.GRAY },
  { tid: 'серый 2', id: THEME_COLOR.LIGHT_GRAY },
  { tid: 'серый 3', id: THEME_COLOR.DARK_GRAY },
  { tid: 'синий', id: THEME_COLOR.BACKGROUND.INFO },
  { tid: 'красный', id: THEME_COLOR.BACKGROUND.DANGER },
  { tid: 'зелёный', id: THEME_COLOR.BACKGROUND.SUCCESS },
];
