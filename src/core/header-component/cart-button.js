import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR, THEME_VALUE } from '../../lib/theme';
import { ReactComponent as CartIcon } from '../../asset/svg/cart.svg';
import { IconButton } from '../../lib/element/button';
import { setLinkRedirect } from 'src/main/navigation';

export function CartButton(props) {
  const { isTablet } = props;
  return (
    <Container onClick={setLinkRedirect('/basket')}>
      {isTablet ? (
        <BadgeButton>
          <CartIcon />
          <Badge>0</Badge>
        </BadgeButton>
      ) : (
        <BadgeDark badgeContent={0}>
          <CartIcon />
        </BadgeDark>
      )}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  padding-right: 5px;
`;
const BadgeButton = styled(IconButton)`
  display: flex;
  position: relative;
  background-color: ${THEME_COLOR.WHITE};
  padding: 0;
`;
const Badge = styled.span`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  top: -10px;
  right: -10px;
  height: 19px;
  min-width: 19px;
  padding: 0 ${spacing(1)};
  align-content: center;
  justify-content: center;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  color: ${THEME_COLOR.WHITE};
  background-color: ${THEME_COLOR.PRIMARY_DARK};
  font-size: ${THEME_SIZE.FONT.SMALL};
  font-family: ${THEME_VALUE.FONT_NAME.PRIMARY};
  user-select: none;
`;

function BadgeDark(props) {
  const { badgeContent, children, onClick } = props;

  return (
    <Container2 onClick={onClick}>
      {children}
      <Badge2>{badgeContent}</Badge2>
    </Container2>
  );
}

const Container2 = styled.div`
  position: relative;
  cursor: pointer;
`;

const Badge2 = styled.span`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  top: 0;
  right: 0;
  height: 24px;
  min-width: 24px;
  padding: 0 ${spacing(1)};
  transform: translate(75%, -25%);
  align-content: center;
  justify-content: center;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  color: ${THEME_COLOR.WHITE};
  background-color: ${THEME_COLOR.PRIMARY_DARK};
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-family: ${THEME_VALUE.FONT_NAME.PRIMARY};
  user-select: none;
`;
