import EditorRendererProvider from 'react-editorjs-renderer';
import styled from 'styled-components';
import Embed from './embed.block';

export function EditorRenderer(props) {
  const { data = false } = props;
  if (!data) return null;
  return (
    <Container>
      <EditorRendererProvider
        data={data}
        components={[
          {
            name: 'embed',
            component: Embed,
          },
        ]}
      />
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  word-break: break-all;
`;
