import styled, { keyframes } from 'styled-components';
import { spacing, THEME_COLOR } from 'src/lib/theme';
import { ModalFullProps } from './modal.type';
import { useEffect } from 'react';

export function ModalFull(props: ModalFullProps) {
  const { onOpen = false, id, children, className } = props;
  useEffect(() => {
    if (onOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [onOpen]);
  if (!onOpen) return null;

  return (
    <Container id={id} open={onOpen} className={className}>
      <Content className={className}>{children}</Content>
    </Container>
  );
}

const animation = keyframes`
  0% {
	opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const Container = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: ${THEME_COLOR.WHITE};

  /* display: ${(p) => (p.open ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center; */

  overflow: auto;
  animation: ${animation} 0.2s;
  padding: ${spacing(6)};
  @media screen and (max-width: 1070px) {
    padding: ${spacing(5)};
  }
  @media screen and (max-width: 720px) {
    padding: ${spacing(1)};
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
