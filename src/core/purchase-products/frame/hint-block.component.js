import styled from 'styled-components';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { SectionLayout } from 'src/lib/element/layout';
import { ReactComponent as RemoveIcon } from 'src/asset/svg/remove.svg';
import { useState } from 'react';
import { TextSecondary } from 'src/lib/element/text';

export function HintBlockComponent() {
  const [showHint, setShowHint] = useState(true);

  if (!showHint) {
    return null;
  }

  return (
    <Container>
      <Content>
        <TextSecondary tid="PURCHASED_PRODUCTS.HINT_BLOCK.TITLE" />
        <RemoveIconCase onClick={() => setShowHint(false)}>
          <RemoveIcon />
        </RemoveIconCase>
      </Content>
    </Container>
  );
}

const Container = styled(SectionLayout)`
  color: #084298;
  background-color: #cfe2ff;
  border-color: #b6d4fe;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;

const Content = styled.div`
  position: relative;
  padding: ${spacing(3)};
`;

const RemoveIconCase = styled.div`
  position: absolute;
  right: ${spacing(3)};
  top: ${spacing(3)};
  cursor: pointer;
`;
