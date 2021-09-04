import styled from 'styled-components';
import { ReactComponent as UserIcon } from '../../asset/svg/user.svg';
import { spacing, THEME_SIZE } from '../../lib/theme';
import { TextPrimary } from '../../lib/element/text';
import { Popup } from '../../lib/element/popup';
import { LinkPrimary } from '../../lib/element/link';
import { Divider } from '../../lib/element/divider';

export function ModalMenu(props) {
  const { currentLang, modalMenuItems, userName } = props;

  return (
    <Popup
      top={30}
      content={(setVisible) => (
        <Container onClick={() => setVisible(false)}>
          {modalMenuItems.map(({ path, tid, divider }) =>
            divider ? <Divider /> : <Link tid={tid} path={path} />,
          )}
        </Container>
      )}
    >
      <Content>
        <UserIcon />
        <Text>{userName}</Text>
      </Content>
    </Popup>
  );
}

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(1)};
  cursor: pointer;
  user-select: none;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
  gap: ${spacing(2)};
`;
const Link = styled(LinkPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.DEFAULT};
  :first-letter {
    text-transform: uppercase;
  }
`;

const Text = styled(TextPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  :first-letter {
    text-transform: uppercase;
  }
`;
