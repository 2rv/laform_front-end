import styled from 'styled-components';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { IconButton, ButtonBasic } from '../../lib/element/button';
import { ReactComponent as EditIcon } from '../../asset/svg/change-icon.svg';
import { ReactComponent as DeleteIcon } from '../../asset/svg/cancel-delete-icon.svg';
import { FilterTabs } from '../../lib/element/filter-tabs';
import { TableList } from '../block-table-list';
import { CREATE_PRODUCT_ROUTE_PATH } from '../create-product';
import { setLinkRedirect } from '../../main/navigation';

export function CompilationComponent(props) {
  const { itemsTable, tabItems, setActiveTab, activeTab } = props;
  return (
    <SectionLayout>
      <TitlePrimary tid="COMPILATION.TITLE" />
      <FilterTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabItems={tabItems}
      />
      <TableList items={itemsTable}>
        {(props) => {
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
      <ButtonBasic tid="Добавить товар" onClick={setLinkRedirect(CREATE_PRODUCT_ROUTE_PATH)} />
    </SectionLayout>
  );
}
const Button = styled(IconButton)`
  padding: 0;
`;
