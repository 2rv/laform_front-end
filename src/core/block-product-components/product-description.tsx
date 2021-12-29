import { useState } from 'react';
import styled, { css } from 'styled-components';
import { THEME_SIZE } from 'src/lib/theme';
import { TextSecondary } from 'src/lib/element/text';
import { ButtonBasic } from 'src/lib/element/button';

type ProductDescriptionProps = {
  description?: string;
  descriptionOld?: string;
  limit?: number;
};

export function ProductDescription(props: ProductDescriptionProps) {
  const { description, descriptionOld, limit = 200 } = props;

  const [more, setMore] = useState(true);

  const firstText = (description || '').slice(0, limit);
  const secondText = (description || '').slice(limit);

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
        <div dangerouslySetInnerHTML={{ __html: descriptionOld || '' }} />
      )}
    </Container>
  );
}

const Button = styled(ButtonBasic)`
  font-weight: ${THEME_SIZE.FONT_WEIGHT.MEDIUM};
  width: fit-content;
  display: inline;
  padding: 0;
  background-color: transparent;
  border-radius: 0px;
  height: fit-content;
`;
const Container = styled.div`
  display: inline;
  line-height: 1.5;
  word-break: break-all;
`;
const Text = styled(TextSecondary)<{ more: boolean }>`
  display: inline;
  ${(p) =>
    p.more &&
    css`
      display: none;
    `}
`;
