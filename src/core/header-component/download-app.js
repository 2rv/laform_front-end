import styled from 'styled-components';
import { ReactComponent as GStoreIcon } from '../../asset/svg/google-store.svg';
import { ReactComponent as AppStoreIcon } from '../../asset/svg/app-store.svg';
import { FieldLayout } from '../../lib/element/layout';
import { spacing, THEME_SIZE, THEME_VALUE } from 'src/lib/theme';

export function DownloadLinks() {
  return (
    <Container type="double" adaptive>
      <Link
        href="https://play.google.com/store/apps"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GStoreIcon />
      </Link>
      <Link
        href="https://www.apple.com/ru/app-store/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AppStoreIcon />
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: ${spacing(3)};
  @media screen and (max-width: 500px) {
    order: -1;
  }
  @media screen and (max-width: 380px) {
    flex-direction: column;
  }
`;
const Link = styled.a`
  &:hover {
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  }
  transition: opacity ${THEME_SIZE.TRANSACTION.DEFAULT};
`;
