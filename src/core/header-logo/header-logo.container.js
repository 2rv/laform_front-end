import { useSelector } from 'react-redux';

import { LANG_SUPPORTED } from '../../main/lang/lang.constant';
import { LANG_STORE_NAME } from '../../lib/common/lang';

import { HeaderLogoComponent } from './header-logo.component';

export function HeaderLogoContainer() {
  const { currentLang } = useSelector((state) => ({
    currentLang: state[LANG_STORE_NAME].active,
  }));

  return (
    <HeaderLogoComponent
      currentLang={currentLang}
      supportedLang={LANG_SUPPORTED}
    />
  );
}
