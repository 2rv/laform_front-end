import { IndentLayout } from '../../../../lib/element/layout';
import { TextSecondary } from '../../../../lib/element/text';
import { LinkPrimary } from '../../../../lib/element/link';

import {
  LOGIN_FORM_FORGOT_PASSWORD_PATH,
  LOGIN_FORM_REGISTER_PATH,
} from '../../login.constant';

export function LoginFooterComponent() {
  return (
    <IndentLayout type="text">
      <div>
        <TextSecondary tid="LOGIN.FOOTER.HAVENT_ACCOUNT_YET" />
        &nbsp;
        <LinkPrimary
          tid="LOGIN.FOOTER.REGISTER"
          path={LOGIN_FORM_REGISTER_PATH}
        />
      </div>
      <div>
        <TextSecondary tid="LOGIN.FOOTER.FORGOT_PASSWORD" />
        &nbsp;
        <LinkPrimary
          tid="LOGIN.FOOTER.FORGOT_PASSWORD_LINK"
          path={LOGIN_FORM_FORGOT_PASSWORD_PATH}
        />
      </div>
    </IndentLayout>
  );
}
