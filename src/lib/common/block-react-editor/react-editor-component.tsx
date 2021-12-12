import styled, { css } from 'styled-components';
import dynamic from 'next/dynamic';
import { Props } from 'react-editor-js';
import { API, BlockAPI, OutputData } from '@editorjs/editorjs';
import { THEME_COLOR, THEME_SIZE } from '../../theme';
import { SectionLayout } from '../../element/layout';
import { TitlePrimary } from '../../element/title';
import { ErrorField } from '../../element/error';

const ReactEditorCore = dynamic(() => import('./react-editor-core'), {
  ssr: false,
});

interface ReactEditorProps extends Props {
  titleTid?: string;
  error?: string;
  handleChange: (data?: BlockAPI | OutputData) => void;
  enableIsEdit: boolean;
}
export function ReactEditorComponent(props: ReactEditorProps) {
  const {
    autofocus,
    defaultBlock,
    placeholder,
    handleChange,
    enableReInitialize = false,
    data = undefined,
    titleTid,
    error,
    minHeight = 100,
    readOnly = false,
    enableIsEdit = false,
  } = props;

  const onChange = (_: API, data?: BlockAPI | OutputData) => {
    handleChange(data);
  };

  return (
    <SectionLayout type="SMALL">
      {titleTid && <Title tid={titleTid} />}
      <Container readOnly={readOnly} height={minHeight}>
        {enableIsEdit && !data ? null : (
          <ReactEditorCore
            autofocus={autofocus}
            defaultBlock={defaultBlock}
            placeholder={placeholder}
            data={data}
            minHeight={minHeight}
            readOnly={readOnly}
            enableReInitialize={enableReInitialize}
            onChange={!readOnly ? onChange : undefined}
          />
        )}
      </Container>
      {error && <ErrorField errorTid={error} />}
    </SectionLayout>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Container = styled.div<{ readOnly: true | false; height: number }>`
  ${(p) => css`
    min-height: ${p.height}px;
  `}
  ${(p) =>
    !p.readOnly &&
    css`
      border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
      border: 1px solid ${THEME_COLOR.DARK_GRAY};
    `}
  .codex-editor__redactor {
    ${(p) => {
      if (!p.readOnly) {
        return css`
          padding: 0 10px;
        `;
      }
    }}
  }
  .ce-block__content h1 {
    font-size: ${THEME_SIZE.FONT.EXTRA_LARGE};
  }
  .ce-block__content h2 {
    font-size: ${THEME_SIZE.FONT.LARGE};
  }
  .ce-block__content h3 {
    font-size: ${THEME_SIZE.FONT.MEDIUM};
  }
  .ce-block__content h4 {
    font-size: ${THEME_SIZE.FONT.DEFAULT};
  }
  .embed-tool__caption {
    display: none;
  }
  .ce-block__content h5 {
    font-size: ${THEME_SIZE.FONT.SMALL};
  }
  .ce-block__content h6 {
    font-size: ${THEME_SIZE.FONT.TINY};
  }
  .ce-delimiter:before {
    content: '';
    border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
    background-color: ${THEME_COLOR.GRAY};
    min-height: 2px;
    height: 2px;
    width: 100%;
  }
  .image-tool__image {
    border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
    max-height: 500px;
  }
  .image-tool__image-picture {
    max-height: 500px;
  }
  .ce-toolbar__content {
    max-width: 100%;
  }
  .ce-block__content {
    max-width: 100%;
    margin: 0;
  }
  .image-tool__caption {
    display: none;
  }
`;
