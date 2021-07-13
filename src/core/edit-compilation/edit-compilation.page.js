import { IndentLayout } from '../../lib/element/layout';

import { FooterContainer } from '../footer';
import { HeaderContainer } from '../header';
import { HeaderLogoContainer } from '../header-logo';

import { EditCompilationContainer } from './edit-compilation.container';

export function EditCompilationPage() {
  return (
    <IndentLayout type="large">
      <IndentLayout type="medium">
        <IndentLayout type="small">
          <HeaderLogoContainer />
          <HeaderContainer />
        </IndentLayout>
        <EditCompilationContainer />
      </IndentLayout>
      <FooterContainer />
    </IndentLayout>
  );
}
