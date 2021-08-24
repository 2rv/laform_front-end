import { useSelector } from 'react-redux';
import { LANG_STORE_NAME } from '../../lib/common/lang';
import { AUTH_STORE_NAME } from 'src/lib/common/auth';
import { LANG_SUPPORTED } from '../../main/lang/lang.constant';
import { HeaderLogoComponent } from './header-logo.component';

export function HeaderLogoContainer(props) {
  const { currentLang, auth } = useSelector((state) => ({
    currentLang: state[LANG_STORE_NAME].active,
    auth: state[AUTH_STORE_NAME],
  }));

  return (
    <HeaderLogoComponent
      isMobile={props.isMobile}
      logged={auth.logged}
      currentLang={currentLang}
      supportedLang={LANG_SUPPORTED}
    />
  );
}
