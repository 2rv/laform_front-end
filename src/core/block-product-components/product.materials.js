import styled from 'styled-components';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { spacing, THEME_SIZE } from 'src/lib/theme';
import { CenteredSpinner } from 'src/lib/element/spinner';
import { BlockReactEditor } from 'src/lib/common/block-react-editor';

export function ProductMaterials(props) {
  const { data = false, oldData, pending, titleTid } = props;

  if (pending) {
    <CenteredSpinner />;
  }

  if (data) {
    return (
      <BlockReactEditor
        titleTid={titleTid}
        data={data}
        enableReInitialize
        readOnly
      />
    );
  } else {
    return (
      <SectionLayout type="SMALL">
        {titleTid && <Title tid={titleTid} />}
        <Container dangerouslySetInnerHTML={{ __html: oldData }} />
      </SectionLayout>
    );
  }
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  line-height: 1.5;
  table {
    border: 1px solid black;
    width: 100%;
  }
  td {
    border: 1px solid black;
    padding: 5px;
  }
`;
