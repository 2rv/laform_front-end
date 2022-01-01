import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_VALUE } from 'src/lib/theme';
import { ReactComponent as FBIcon } from 'src/asset/svg/fb.svg';
import { ReactComponent as InstagramIcon } from 'src/asset/svg/instagram.svg';
import { ReactComponent as VkIcon } from 'src/asset/svg/vk.svg';
import { ReactComponent as OKIcon } from 'src/asset/svg/ok.svg';
import { ReactComponent as TiktokIcon } from 'src/asset/svg/tiktok.svg';

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
      {SOCIAL_LINKS.map((item) => {
        const Icon = item.icon;
        return (
          <Link href={item.url} target="_blank" rel="noopener noreferrer">
            <Icon />
          </Link>
        );
      })}
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

{
  /* <Link
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
</Link> */
}
