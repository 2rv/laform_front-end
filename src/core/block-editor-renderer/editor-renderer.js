import EditorRendererProvider from 'react-editorjs-renderer';
import { TextSecondary } from 'src/lib/element/text';
import { THEME_SIZE } from 'src/lib/theme';
import styled from 'styled-components';

const Embed = ({ data }) => {
  return (
    <Container>
      <Iframe
        src={data.embed}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />
      {Boolean(data.caption) && <TextSecondary tid={data.caption} />}
    </Container>
  );
};

export function EditorRenderer(props) {
  const { data = false } = props;
  if (!data) return null;
  return (
    <EditorRendererProvider
      data={data}
      components={[
        {
          name: 'embed',
          component: Embed,
        },
      ]}
    />
  );
}
const Container = styled.div`
  width: 100%;
  height: 320px;
`;
const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
