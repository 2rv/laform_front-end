import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import { IconButton } from '../../lib/element/button';

export function MenuButton(props) {
  const { setOpen, open } = props;
  return (
    <Button onClick={() => setOpen(!open)}>
      <Stick1 close={open} />
      <Stick2 close={open} />
      <Stick3 close={open} />
    </Button>
  );
}
const Button = styled(IconButton)`
  display: flex;
  flex-direction: column;
  gap: ${spacing(1.2)};
  background-color: ${THEME_COLOR.WHITE};
  padding: 0;
`;
const Stick1 = styled.div`
  width: 20px;
  min-height: 3px;
  max-height: 3px;
  background-color: ${THEME_COLOR.SECONDARY_DARK};
  transition: 0.4s;
  ${(p) => p.close && 'transform: rotate(-45deg) translate(-6px, 7px);'}
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const Stick2 = styled(Stick1)`
  ${(p) => p.close && 'opacity: 0;'}
`;
const Stick3 = styled(Stick1)`
  ${(p) => p.close && 'transform: rotate(45deg) translate(-6px, -7px);'}
`;
