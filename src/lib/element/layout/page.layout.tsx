import styled from 'styled-components';
import { THEME_SIZE } from '../../theme';
import { PageLayoutPropsType } from './layout.type';

export function PageLayout(props: PageLayoutPropsType) {
  const { children, type, className } = props;
  return (
    <Container type={type} className={className}>
      {children}
    </Container>
  );
}

const Container = styled.div`
  max-width: ${(p: PageLayoutPropsType) =>
    THEME_SIZE.PAGE[p.type || 'DEFAULT']};
  width: 100%;
`;
