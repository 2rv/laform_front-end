import { useSelector } from 'react-redux';

import { LANG_SUPPORTED } from '../../main/lang/lang.constant';
import { LANG_STORE_NAME } from '../../lib/common/lang';

import { FooterLogoComponent } from './footer-logo.component';

export function FooterLogoContainer() {
  const { currentLang } = useSelector((state) => ({
    currentLang: state[LANG_STORE_NAME].active,
  }));

  return (
    <FooterLogoComponent
      currentLang={currentLang}
      supportedLang={LANG_SUPPORTED}
    />
  );
}
