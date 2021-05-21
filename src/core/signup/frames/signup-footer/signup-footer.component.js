import { TextSecondary } from '../../../../lib/element/text';
import { LinkPrimary } from '../../../../lib/element/link';

import { SIGNUP_FORM_ALREADY_REGISTERED_PATH } from '../../signup.constant';

export function SignupFooterComponent() {
  return (
    <div>
      <TextSecondary tid="SIGNUP.FOOTER.HAVE_ACCOUNT" />
      &nbsp;
      <LinkPrimary
        tid="SIGNUP.FOOTER.LOGIN"
        path={SIGNUP_FORM_ALREADY_REGISTERED_PATH}
      />
    </div>
  );
}
