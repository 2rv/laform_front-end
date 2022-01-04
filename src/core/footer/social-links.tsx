import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from 'src/lib/theme';
import { ReactComponent as FBIcon } from 'src/asset/svg/fb.svg';
import { ReactComponent as InstagramIcon } from 'src/asset/svg/instagram.svg';
import { ReactComponent as VkIcon } from 'src/asset/svg/vk.svg';
import { ReactComponent as OKIcon } from 'src/asset/svg/ok.svg';
import { ReactComponent as TiktokIcon } from 'src/asset/svg/tiktok.svg';
import { ReactComponent as GStoreIcon } from 'src/asset/svg/google-store.svg';
import { ReactComponent as AppStoreIcon } from 'src/asset/svg/app-store.svg';

const STORE_LINKS = [
  { url: 'https://play.google.com/store/apps', icon: GStoreIcon },
  { url: 'https://www.apple.com/ru/app-store/', icon: AppStoreIcon },
];
const SOCIAL_LINKS = [
  { url: 'https://www.facebook.com/laforme.designbureau', icon: FBIcon },
  { url: 'https://instagram.com/laforme.ru', icon: InstagramIcon },
  { url: 'https://vk.com/laforme', icon: VkIcon },
  { url: 'https://ok.ru/profile/560920150257', icon: OKIcon },
  { url: 'https://vm.tiktok.com/ZSJknASGV', icon: TiktokIcon },
];
export function SocialLinks() {
  return (
    <Container>
      <Content>
        {STORE_LINKS.map((item, key) => {
          const Icon = item.icon;
          return (
            <Link
              key={key}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
            </Link>
          );
        })}
      </Content>
      <VerticalDivider />
      <Content>
        {SOCIAL_LINKS.map((item, key) => {
          const Icon = item.icon;
          return (
            <Link
              key={key}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
            </Link>
          );
        })}
      </Content>
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
    order: 3;
    align-items: flex-start;
    flex-direction: column;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
`;
const VerticalDivider = styled.div`
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  width: 3px;
  height: 100%;
  background-color: ${THEME_COLOR.TEXT.LIGHT};
  @media screen and (max-width: 720px) {
    display: none;
  }
`;
