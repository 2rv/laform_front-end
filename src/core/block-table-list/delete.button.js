import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { ReactComponent as DeleteIcon } from '../../asset/svg/cancel-delete-icon.svg';
import { IconButton } from 'src/lib/element/button';

export function DeleteButton(props) {
  const { id, deleteItem } = props;

  return (
    <Button onClick={() => deleteItem(id)}>
      <DeleteIcon />
    </Button>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${spacing(3)};
  @media screen and (max-width: 875px) {
    justify-content: flex-start;
  }
`;
const Button = styled(IconButton)`
  padding: 0;
`;
