import { FieldPrimary } from '../../../../lib/element/field';
import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonPrimary } from '../../../../lib/element/button';
import { FieldLayout, IndentLayout } from '../../../../lib/element/layout';

export function AuthFormChangePasswordComponent(props) {
  return (
    <IndentLayout type="small">
      <TitlePrimary tid="AUTH_FORM_CHANGE_PASSWORD.TITLE" />
      <FieldLayout>
        <FieldPrimary
          titleTid="AUTH_FORM_CHANGE_PASSWORD.OLD_PASSWORD.TITLE"
          placeholderTid="AUTH_FORM_CHANGE_PASSWORD.OLD_PASSWORD.PLACEHOLDER"
        />
        <FieldPrimary
          titleTid="AUTH_FORM_CHANGE_PASSWORD.NEW_PASSWORD.TITLE"
          placeholderTid="AUTH_FORM_CHANGE_PASSWORD.NEW_PASSWORD.PLACEHOLDER"
        />
        <FieldPrimary
          titleTid="AUTH_FORM_CHANGE_PASSWORD.REPEAT_NEW_PASSWORD.TITLE"
          placeholderTid="AUTH_FORM_CHANGE_PASSWORD.REPEAT_NEW_PASSWORD.PLACEHOLDER"
        />
      </FieldLayout>
      <ButtonPrimary tid="AUTH_FORM_CHANGE_PASSWORD.SUBMIT" />
    </IndentLayout>
  );
}
