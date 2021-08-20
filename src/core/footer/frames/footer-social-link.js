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

export function FooterSocialLink(props) {
  return (
    <Container>
      <Link
        href={'https://instagram.com'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
      </Link>
      <Link href={'https://vk.com'} target="_blank" rel="noopener noreferrer">
        <VkIcon />
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
  gap: ${spacing(3)};
  @media screen and (max-width: 875px) {
    order: 2;
  }
`;
