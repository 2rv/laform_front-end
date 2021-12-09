import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { Divider } from 'src/lib/element/divider';
import { TableParamsProps } from 'src/lib/common/block-table';
import { BlockParams } from 'src/lib/common/block-table/frame/patams';

export function ProductParams(props: { params: TableParamsProps }) {
  const { params } = props;
  if (!params) return null;
  return (
    <>
      <Divider />
      <Container>
        <BlockParams params={params} />
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
