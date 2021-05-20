import { TextSecondary } from '../../../../lib/element/text';
import { LinkPrimary } from '../../../../lib/element/link';

export function SignupFooterComponent() {
  return (
    <div>
      <TextSecondary tid="SIGNUP.FOOTER.HAVE_ACCOUNT" />
      &nbsp;
      <LinkPrimary tid="SIGNUP.FOOTER.LOGIN" href="/login" />
    </div>
  );
}
