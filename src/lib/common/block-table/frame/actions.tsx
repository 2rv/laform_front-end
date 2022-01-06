import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { ActionChange } from './action-change';
import { ActionDelete } from './action-delete';
import { ActionDownload } from './action-download';
import { TableActionsProps } from '../table.type';

export function TableActions(props: TableActionsProps) {
  const {
    id,
    indexId,
    changeItem,
    deleteItem,
    filePDF,
    //-------
    optionIndex,
    sizes,
    colors,
    options,
    maxCount,
    maxLength,
    isCount,
    isLength,
  } = props;

  if (!id) return null;

  return (
    <Td>
      <Container>
        <ActionChange
          id={id}
          indexId={indexId}
          changeItem={changeItem}
          optionIndex={optionIndex}
          sizes={sizes}
          colors={colors}
          options={options}
          maxCount={maxCount}
          maxLength={maxLength}
          isCount={isCount}
          isLength={isLength}
        />

        <ActionDelete id={id} indexId={indexId} deleteItem={deleteItem} />
        <ActionDownload filePDF={filePDF} />
      </Container>
    </Td>
  );
}

const Td = styled.td`
  vertical-align: middle;
  padding-left: ${spacing(2)};
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
