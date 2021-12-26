import styled, { keyframes } from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { ModalPopupProps } from './modal.type';
import { useEffect } from 'react';

export function ModalPopup(props: ModalPopupProps) {
  const { modalVisibilty = false, onClose, children } = props;

  useEffect(() => {
    if (modalVisibilty) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalVisibilty]);

  return (
    <Container isOpen={modalVisibilty} onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>{children}</Content>
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
const Container = styled.div<{ isOpen: boolean }>`
  display: ${(p) => (p.isOpen ? 'flex' : 'none')};
  position: fixed;
  z-index: 9999;
  padding: 100px 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(0, 0, 0, 0.25);
  animation: ${animation} 0.2s;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: ${THEME_COLOR.WHITE};
  padding: ${spacing(8)};
  gap: ${spacing(2)};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  max-width: 1140px;
  width: 100%;
`;
