import styled, { css } from 'styled-components';
import { useState } from 'react';
import { THEME_SIZE } from 'src/lib/theme';
import { TextSecondary } from 'src/lib/element/text';
import { TextButton } from 'src/lib/element/button';

export function ProductDescription(props) {
  const [more, setMore] = useState(true);
  const { description, descriptionOld, limit = 200 } = props;
  const firstText = description?.slice(0, limit);
  const secondText = description?.slice(limit);
  return (
    <Container>
      {description ? (
        <>
          <TextSecondary>{firstText}</TextSecondary>
          <Text more={more}>{secondText}</Text>
          {Boolean(description?.length > limit) && (
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
        <div dangerouslySetInnerHTML={{ __html: descriptionOld }} />
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
