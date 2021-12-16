import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { ReactComponent as ArrowDownIcon } from 'src/asset/svg/arrow-down-lang.svg';
import { langUpdateLanguage } from 'src/lib/common/lang/lang.action';
import { spacing, THEME_SIZE, THEME_COLOR, THEME_VALUE } from 'src/lib/theme';
import { TextPrimary } from 'src/lib/element/text';
import { Popup } from 'src/lib/element/popup';
import { ButtonBasic } from 'src/lib/element/button';
import { LANG_SUPPORTED } from 'src/main/lang/lang.constant';

export function LangSelect(props) {
  const { currentLang } = props;
  const dispatch = useDispatch();

  const updateLanguageHandler = (lang) => {
    dispatch(langUpdateLanguage(lang));
  };

  return (
    <Popup
      top={20}
      mobileRight
      content={(setVisible) => (
        <Container onClick={() => setVisible(false)}>
          {LANG_SUPPORTED.map((lang, index) => (
            <Button
              key={index}
              tid={`HEADER_LOGO.LANG.${lang}.FULL`}
              onClick={() => updateLanguageHandler(lang)}
            />
          ))}
        </Container>
      )}
    >
      <Content>
        <Text tid={currentLang} />
        <ArrowDownIcon />
      </Content>
    </Popup>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
  gap: ${spacing(2)};
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(1)};
  cursor: pointer;
  user-select: none;
`;
const Button = styled(ButtonBasic)`
  justify-content: flex-start;
  background-color: transparent;
  border-radius: 0px;
  height: fit-content;
`;
const Text = styled(TextPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  :first-letter {
    text-transform: uppercase;
  }
`;
