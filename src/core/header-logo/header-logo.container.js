import { useSelector } from 'react-redux';

import { LANG_SUPPORTED } from '../../main/lang/lang.constant';
import { LANG_STORE_NAME } from '../../lib/common/lang';

import { HeaderLogoComponent } from './header-logo.component';

export function HeaderLogoContainer(props) {
  const { currentLang } = useSelector((state) => ({
    currentLang: state[LANG_STORE_NAME].active,
  }));

  return (
    <HeaderLogoComponent
      isMobile={props.isMobile}
      currentLang={currentLang}
      supportedLang={LANG_SUPPORTED}
    />
  );
}
