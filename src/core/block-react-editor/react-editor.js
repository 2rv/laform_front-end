import EditorJs from 'react-editor-js';
import { tools, i18n } from './options';
import { spacing, THEME_SIZE, THEME_COLOR, THEME_VALUE } from '../../lib/theme';
import styled from 'styled-components';

const ReactEditor = (props) => {
  const { handleChange, name, enableReInitialize, readOnly, data } = props;

  const onChange = (_, data) => {
    handleChange(data);
  };
  return (
    <Container>
      <EditorJs
        enableReInitialize={enableReInitialize}
        readOnly={readOnly}
        i18n={i18n}
        onChange={readOnly ? null : onChange}
        data={data}
        tools={tools}
      />
    </Container>
  );
};

const Container = styled.div`
  box-shadow: 0 24px 24px -18px rgb(69 104 129 / 33%),
    0 9px 45px 0 rgb(114 119 160 / 12%);
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  padding: ${spacing(6)};
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
  /* .tc-wrap { // цвет таблицы
    --color-border: #000 !important;
    --color-background: rgba(0, 0, 0, 0.06) !important;
  } */
  .image-tool__caption {
    display: none;
  }
`;
export default ReactEditor;
