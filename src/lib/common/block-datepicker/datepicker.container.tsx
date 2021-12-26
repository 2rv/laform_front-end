import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import styled from 'styled-components';

export function DatepickerContainer(props: any) {
  const { className, children } = props;
  return <Container className={className}>{children}</Container>;
}
const Container = styled.div`
  background: ${THEME_COLOR.WHITE};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  position: 'relative';
  display: flex;
  width: 100%;
  padding: ${spacing(2)};
`;
