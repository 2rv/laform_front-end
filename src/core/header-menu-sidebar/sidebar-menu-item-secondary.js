import styled, { css } from 'styled-components';
import { Divider } from '../../lib/element/divider';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { LinkSecondary } from 'src/lib/element/link';

export function SidebarMenuItemSecondary(props) {
  const { title, pathname } = props.data;
  return (
    <Container>
      <Text tid={title} path={pathname} />
      <Divider />
    </Container>
  );
}
const Text = styled(LinkSecondary)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT.LIGHT};
  text-align: start;
  line-height: 1.5;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${spacing(2)};
  margin-left: ${spacing(3)};
`;
