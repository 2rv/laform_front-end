import styled from 'styled-components';
import { ReactComponent as RemoveIcon } from 'src/asset/svg/remove.svg';
import { IconButton } from 'src/lib/element/button';
import { ActionDeleteProps } from '../table.type';

export function ActionDelete(props: ActionDeleteProps) {
  const { id, indexId, deleteItem } = props;

  if (Boolean(!id) || !Boolean(deleteItem) || typeof deleteItem !== 'function')
    return null;

  return (
    <Button onClick={() => deleteItem({ id, indexId })}>
      <RemoveIcon />
    </Button>
  );
}

const Button = styled(IconButton)`
  padding: 0;
`;
