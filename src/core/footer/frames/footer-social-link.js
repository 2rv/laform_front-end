import styled from 'styled-components';
import {
  spacing,
  THEME_SIZE,
  THEME_COLOR,
  THEME_VALUE,
} from '../../../lib/theme';
import { LinkSecondary } from '../../../lib/element/link';
import { ReactComponent as InstagramIcon } from '../../../asset/svg/instagram.svg';
import { ReactComponent as VkIcon } from '../../../asset/svg/vk.svg';
import { ReactComponent as OKIcon } from '../../../asset/svg/ok.svg';
import { ReactComponent as TiktokIcon } from '../../../asset/svg/tiktok.svg';
import { ReactComponent as FBIcon } from '../../../asset/svg/fb.svg';

export function FooterSocialLink(props) {
  return (
    <Container>
      <Link
        href="https://www.facebook.com/laforme.designbureau"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FBIcon />
      </Link>
      <Link
        href="https://instagram.com/laforme.ru"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
      </Link>
      <Link
        href="https://vk.com/laforme"
        target="_blank"
        rel="noopener noreferrer"
      >
        <VkIcon />
      </Link>
      <Link
        href="https://ok.ru/profile/560920150257"
        target="_blank"
        rel="noopener noreferrer"
      >
        <OKIcon />
      </Link>
      <Link
        href="https://vm.tiktok.com/ZSJknASGV"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TiktokIcon />
      </Link>
    </Container>
  );
}

const Link = styled.a`
  &:hover {
    opacity: ${THEME_VALUE.OPACITY.HOVER};
  }
  transition: opacity ${THEME_SIZE.TRANSACTION.DEFAULT};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
  @media screen and (max-width: 720px) {
    order: 2;
  }
`;
