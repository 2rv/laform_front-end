import styled from 'styled-components';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { IconButton } from '../../lib/element/button';
import { Spinner } from '../../lib/element/spinner';
import { ReactComponent as EditIcon } from '../../asset/svg/change-icon.svg';
import { ReactComponent as DeleteIcon } from '../../asset/svg/cancel-delete-icon.svg';
import { FilterTabs } from '../../lib/element/filter-tabs';
import { TableList } from '../block-table-list';
import { } from './compilation.action';

export function CompilationComponent(props) {
  const {
    itemsTable,
    tabItems,
    setActiveTab,
    activeTab,
    isPending,
  } = props;

  return (
    <SectionLayout>
      <TitlePrimary tid="COMPILATION.TITLE" />
      <FilterTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabItems={tabItems}
      />
      {isPending ? (
        <Spinner />
      ) : (
        <TableList items={itemsTable}>
          {(id) => {
            return (
              <>
                <Button>
                  <EditIcon />
                </Button>
                <Button>
                  <DeleteIcon />
                </Button>
              </>
            );
          }}
        </TableList>
      )}
    </SectionLayout>
  );
}
const Button = styled(IconButton)`
  padding: 0;
`;
