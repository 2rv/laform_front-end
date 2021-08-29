import styled, { keyframes } from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { ModalPopupProps } from './modal.type';

export function ModalPopup(props: ModalPopupProps) {
  const { modalVisibilty = false, onClose, children } = props;

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
const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  animation: ${animation} 0.2s;
  display: ${(p: { isOpen: boolean }) => (p.isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.25);
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${THEME_COLOR.WHITE};
  padding: ${spacing(8)};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  max-width: 1140px;
  width: 100%;
`;
