import { FieldPrimary } from '../../../../lib/element/field';
import { TitlePrimary } from '../../../../lib/element/title';
import { ButtonPrimary } from '../../../../lib/element/button';
import { IndentLayout } from '../../../../lib/element/layout';

export function AuthFormRecoveryAccountComponent(props) {
  return (
    <form>
      <IndentLayout type="small">
        <TitlePrimary tid="AUTH.RECOVERY_ACCOUNT.TITLE" />
        <FieldPrimary
          titleTid="AUTH.RECOVERY_ACCOUNT.EMAIL.TITLE"
          placeholderTid="AUTH.RECOVERY_ACCOUNT.EMAIL.PLACEHOLDER"
          type="email"
        />
        <ButtonPrimary tid="AUTH.RECOVERY_ACCOUNT.SUBMIT" type="submit" />
      </IndentLayout>
    </form>
  );
}
