import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { ReactComponent as ArrowDownIcon } from '../../asset/svg/arrow-down-lang.svg';
import { langUpdateLanguage } from '../../lib/common/lang/lang.action';
import { spacing, THEME_SIZE, THEME_COLOR, THEME_VALUE } from '../../lib/theme';
import { TextPrimary } from '../../lib/element/text';
import { Popup } from '../../lib/element/popup';
import { TextButton } from '../../lib/element/button';
import { LANG_SUPPORTED } from '../../main/lang/lang.constant';

export function LangSelect(props) {
  const { currentLang } = props;
  const dispatch = useDispatch();

  const updateLanguageHandler = (lang) => {
    dispatch(langUpdateLanguage(lang));
    // if (currentLang.toUpperCase() !== lang) {
    //   window.location.reload();
    // }
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
const Button = styled(TextButton)`
  justify-content: flex-start;
`;
const Text = styled(TextPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  :first-letter {
    text-transform: uppercase;
  }
`;
