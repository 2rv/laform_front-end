import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { ChangeButton } from './change.button';
import { DeleteButton } from './delete.button';

export function ButtonTd(props) {
  const {
    id,
    changeItem,
    deleteItem,
    sizesOptions,
    colorsOptions,
    programsOptions,
  } = props;

  if (!id || !changeItem || !deleteItem) return null;

  return (
    <Td>
      <Container>
        <ChangeButton
          id={id}
          changeItem={changeItem}
          sizesOptions={sizesOptions}
          colorsOptions={colorsOptions}
          programsOptions={programsOptions}
        />
        <DeleteButton id={id} deleteItem={deleteItem} />
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
