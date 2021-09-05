import styled, { css } from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { LinkSecondary } from '../../lib/element/link';
import { IconButton } from '../../lib/element/button';
import { ReactComponent as UserIcon } from '../../asset/svg/user.svg';
import { ReactComponent as ScissorsIcon } from '../../asset/svg/scissors.svg';
import { ReactComponent as TShirtIcon } from '../../asset/svg/tee-shirt.svg';
import { ReactComponent as PostIcon } from '../../asset/svg/post.svg';
import { setLinkRedirect } from 'src/main/navigation';

export function MobileNavMenu(props) {
  const { activePath } = props;
  return (
    <Container>
      <Button onClick={setLinkRedirect('/purchases-history')}>
        <UserStyledIcon active={activePath?.startsWith('/purchases-history')} />
      </Button>

      <Button onClick={setLinkRedirect('/sewing-goods')}>
        <ScissorsStyledIcon active={activePath?.startsWith('/sewing-goods')} />
      </Button>

      <Button onClick={setLinkRedirect('/patterns')}>
        <TShirtStyledIcon active={activePath?.startsWith('/patterns')} />
      </Button>

      <Button onClick={setLinkRedirect('/article')}>
        <PostStyledIcon active={activePath?.startsWith('/article')} />
      </Button>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 2;
  width: 100%;
  left: 0;
  display: flex;
  gap: ${spacing(6)};
  align-items: center;
  height: 55px;
  justify-content: space-evenly;
  background-color: ${THEME_COLOR.GRAY};
`;
const Button = styled(IconButton)`
  padding: 0;
`;
const UserStyledIcon = styled(UserIcon)`
  ${(p) =>
    p.active
      ? css`
          fill: ${THEME_COLOR.SECONDARY_DARK};
        `
      : css`
          fill: ${THEME_COLOR.TEXT.LIGHT};
        `}
`;

const ScissorsStyledIcon = styled(ScissorsIcon)`
  ${(p) =>
    p.active
      ? css`
          fill: ${THEME_COLOR.SECONDARY_DARK};
        `
      : css`
          fill: ${THEME_COLOR.TEXT.LIGHT};
        `}
`;

const TShirtStyledIcon = styled(TShirtIcon)`
  ${(p) =>
    p.active
      ? css`
          fill: ${THEME_COLOR.SECONDARY_DARK};
          stroke: ${THEME_COLOR.SECONDARY_DARK};
        `
      : css`
          fill: ${THEME_COLOR.TEXT.LIGHT};
          stroke: ${THEME_COLOR.TEXT.LIGHT};
        `}
`;

const PostStyledIcon = styled(PostIcon)`
  ${(p) =>
    p.active
      ? css`
          fill: ${THEME_COLOR.SECONDARY_DARK};
        `
      : css`
          fill: ${THEME_COLOR.TEXT.LIGHT};
        `}
`;
