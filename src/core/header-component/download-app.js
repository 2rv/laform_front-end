import styled from 'styled-components';
import { LinkSecondary } from '../../lib/element/link';
import { ReactComponent as GStoreIcon } from '../../asset/svg/google-store.svg';
import { ReactComponent as AppStoreIcon } from '../../asset/svg/app-store.svg';
import { FieldLayout } from '../../lib/element/layout';
import { spacing } from 'src/lib/theme';

export function DownloadLinks() {
  return (
    <Container type="double" adaptive>
      <GStoreIcon />
      <AppStoreIcon />
      <LinkSecondary path="https://play.google.com/store/apps"></LinkSecondary>
      <LinkSecondary path="https://www.apple.com/ru/app-store/"></LinkSecondary>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: ${spacing(3)};
  @media screen and (max-width: 500px) {
    order: -1;
  }
`;
