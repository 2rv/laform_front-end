import styled from 'styled-components';
import { SectionLayout } from '../../element/layout';
import { TitlePrimary } from '../../element/title';
import { THEME_SIZE } from '../../theme';
import { ErrorField } from '../../element/error';
import dynamic from 'next/dynamic';

const ReactEditor = dynamic(() => import('./react-editor'), {
  ssr: false,
});

export function ReactEditorBlock(props) {
  const {
    handleChange,
    data,
    minHeight,
    enableIsEdit,
    titileTid,
    enableReInitialize,
    readOnly,
    error,
    errorMessage,
  } = props;
  return (
    <SectionLayout type="TEXT_SMALL">
      {titileTid && <Title tid={titileTid} />}
      <ReactEditor
        handleChange={handleChange}
        data={data}
        minHeight={minHeight}
        enableIsEdit={enableIsEdit}
        enableReInitialize={enableReInitialize}
        readOnly={readOnly}
      />
      {error && <ErrorField errorTid={errorMessage} />}
    </SectionLayout>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
