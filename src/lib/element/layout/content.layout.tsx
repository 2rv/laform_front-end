import styled from 'styled-components';
import { ContentLayoutPropsType } from './layout.type';

export function ContentLayout(props: ContentLayoutPropsType) {
  const { children, horizontal, vertical, className } = props;
  return (
    <Container
      horizontal={horizontal}
      vertical={vertical}
      className={className}
    >
      {children}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: ${(p: ContentLayoutPropsType) => p.horizontal || 'normal'};
  align-items: ${(p: ContentLayoutPropsType) => p.vertical || 'normal'};
`;
