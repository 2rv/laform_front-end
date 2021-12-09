import styled, { css } from 'styled-components';
import { THEME_SIZE } from '../../lib/theme';
import { TextSecondary } from '../../lib/element/text';
import { TextButton } from '../../lib/element/button';
import { useState } from 'react';

export function ProductDescription(props) {
  const [more, setMore] = useState(true);
  const { text, textOld, limit = 200 } = props;
  const firstText = text?.slice(0, limit);
  const secondText = text?.slice(limit);
  return (
    <Container>
      {text ? (
        <>
          <TextSecondary>{firstText}</TextSecondary>
          <Text more={more}>{secondText}</Text>
          {Boolean(text?.length > limit) && (
            <>
              <Text more={!more} tid="..." />
              <Button
                onClick={() => setMore(!more)}
                tid={more ? 'BLOCK_TEXT.READ_MORE' : 'BLOCK_TEXT.CLOSE'}
              />
            </>
          )}
        </>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: textOld }} />
      )}
    </Container>
  );
}

const Button = styled(TextButton)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  width: fit-content;
  display: inline;
  padding: 0;
`;
const Container = styled.div`
  display: inline;
  line-height: 1.5;
  word-break: break-all;
`;

const Text = styled(TextSecondary)`
  display: inline;
  ${(p) =>
    p.more &&
    css`
      display: none;
    `}
`;
