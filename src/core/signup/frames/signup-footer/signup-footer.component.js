import { TextSecondary } from '../../../../lib/element/text';
import { LinkPrimary } from '../../../../lib/element/link';
import { LOGIN_ROUTE_PATH } from '../../../login';

export function SignupFooterComponent() {
  return (
    <div>
      <TextSecondary tid="SIGNUP.FOOTER.HAVE_ACCOUNT" />
      &nbsp;
      <LinkPrimary
        tid="SIGNUP.FOOTER.LOGIN"
        path={LOGIN_ROUTE_PATH}
      />
    </div>
  );
}
