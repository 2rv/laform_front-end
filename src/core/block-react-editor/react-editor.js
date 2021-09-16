import EditorJs from 'react-editor-js';
import { tools, i18n } from './options';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../lib/theme';
import styled from 'styled-components';

const ReactEditor = (props) => {
  const { handleChange, name } = props;

  const onChange = (_, data) => {
    handleChange(data);
  };
  return (
    <Container>
      <EditorJs  i18n={i18n} onChange={onChange} tools={tools} />
    </Container>
  );
};

const Container = styled.div`
  padding: ${spacing(6)} ${spacing(12)};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: ${THEME_COLOR.GRAY};
  border: 1px solid ${THEME_COLOR.LIGHT_GRAY};
`;
export default ReactEditor;
