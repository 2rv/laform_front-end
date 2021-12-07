import React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as UserIcon } from '../../asset/svg/user.svg';
import { spacing, THEME_SIZE } from '../../lib/theme';
import { TextPrimary } from '../../lib/element/text';
import { Popup } from '../../lib/element/popup';
import { LinkPrimary } from '../../lib/element/link';
import { Divider } from '../../lib/element/divider';

export function ModalMenu(props) {
  const { currentLang, modalMenuItems, userName, mobile } = props;

  return (
    <ContainerCase mobile={mobile}>
      <Popup
        top={30}
        content={(setVisible) => (
          <Container onClick={() => setVisible(false)}>
            {modalMenuItems.map(({ path, tid, divider, pathConfig }, index) => (
              <React.Fragment key={index}>
                {divider ? (
                  <Divider />
                ) : (
                  <Link tid={tid} path={path} pathConfig={pathConfig} />
                )}
              </React.Fragment>
            ))}
          </Container>
        )}
      >
        <Content>
          <UserIcon />
          <Text>{userName}</Text>
        </Content>
      </Popup>
    </ContainerCase>
  );
}
const ContainerCase = styled.div`
  ${(p) => {
    return p.mobile
      ? css`
          display: none;
          @media screen and (max-width: 720px) {
            display: block;
          }
        `
      : css`
          display: block;
          @media screen and (max-width: 720px) {
            display: none;
          }
        `;
  }}
`;
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
