import EditorJs, { Props } from 'react-editor-js';
import { tools, i18n } from './options';

const ReactEditorCore = (props: Props) => {
  return <EditorJs tools={tools} i18n={i18n} {...props} />;
};
export default ReactEditorCore;
