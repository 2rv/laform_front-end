import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { IconButton } from '../../lib/element/button';
import { ReactComponent as PlusIcon } from '../../asset/svg/plus-icon.svg';
import { ReactComponent as EditIcon } from '../../asset/svg/change-icon.svg';
import { ReactComponent as DeleteIcon } from '../../asset/svg/cancel-delete-icon.svg';
import { TextSecondary } from '../../lib/element/text';
import { TableList } from '../block-table-list';

export function SliderListComponent(props) {
  const { itemsTable } = props;
  return (
    <SectionLayout>
      <TitlePrimary tid="Слайдер" />
      <TableList items={itemsTable}>
        <Button>
          <EditIcon />
        </Button>
        <Button>
          <DeleteIcon />
        </Button>
      </TableList>
      <AddSlide>
        <Button>
          <PlusIcon />
        </Button>
        <TextSecondary tid="Дополнить сборку" />
      </AddSlide>
    </SectionLayout>
  );
}
const AddSlide = styled.div`
  gap: ${spacing(3)};
  display: flex;
  align-items: center;
`;
const Button = styled(IconButton)`
  padding: 0;
`;
