import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { ChangeButton } from './change.button';
import { DeleteButton } from './delete.button';
import { DownloadButton } from './download.button';

export function ButtonTd(props) {
  const {
    id,
    changeItem,
    deleteItem,
    downloadItem,
    //-------
    sizeId,
    sizesOptions,
    colorId,
    colorsOptions,
    programId,
    programsOptions,
  } = props;

  if (!id) return null;
  return (
    <Td>
      <Container>
        {Boolean(changeItem) && (
          <ChangeButton
            id={id}
            changeItem={changeItem}
            sizeId={sizeId}
            sizesOptions={sizesOptions}
            colorId={colorId}
            colorsOptions={colorsOptions}
            programId={programId}
            programsOptions={programsOptions}
          />
        )}
        {Boolean(deleteItem) && (
          <DeleteButton id={id} deleteItem={deleteItem} />
        )}
        {Boolean(downloadItem) && (
          <DownloadButton id={id} downloadItem={downloadItem} />
        )}
      </Container>
    </Td>
  );
}

const Td = styled.td`
  vertical-align: middle;
  padding-left: ${spacing(8)};
  @media screen and (max-width: 875px) {
    padding-left: 0;
    margin-left: 90px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${spacing(3)};
  @media screen and (max-width: 875px) {
    justify-content: flex-start;
  }
`;
