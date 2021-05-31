import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { ReactComponent as ArrowDownIcon } from '../../../../asset/svg/arrow-solid-down.svg';

import { langUpdateLanguage } from '../../../../lib/common/lang/lang.action';
import { spacing, THEME_SIZE } from '../../../../lib/theme';
import { TextPrimary } from '../../../../lib/element/text';
import { ModalMenu } from '../../../../lib/element/modal';

export function LangSelectorComponent(props) {
  const { currentLang, supportedLang } = props;
  const dispatch = useDispatch();
  const [isLangModalActive, setLangModalActive] = useState(false);

  const LANG_MODAL_ITEMS = supportedLang.map((lang) => ({
    tid: `HEADER_LOGO.LANG.${lang}.FULL`,
    action: () => dispatch(langUpdateLanguage(lang)),
  }));

  const handleLangClick = () => {
    setLangModalActive(!isLangModalActive);
  };
  const onLangModalClose = () => {
    setLangModalActive(false);
  };

  return (
    <Container>
      <LangContainer onClick={handleLangClick}>
        <Text tid={`HEADER_LOGO.LANG.${currentLang}.SHORT`} />
        <ArrowDownIcon />
      </LangContainer>
      {isLangModalActive && (
        <LangModal
          items={LANG_MODAL_ITEMS}
          active={isLangModalActive}
          onClose={onLangModalClose}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-content: center;
`;

const LangContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${spacing(1)};
  cursor: pointer;
`;

const Text = styled(TextPrimary)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
`;

const LangModal = styled(ModalMenu)`
  margin-top: ${spacing(10)};
  z-index: 1;
  transform: translateX(-50%);
`;
