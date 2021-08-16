import { TitlePrimary } from 'src/lib/element/title';
import { FilterTabs } from '../../lib/element/filter-tabs';
import { SectionLayout } from '../../lib/element/layout';
import { TableList } from '../block-table-list';
import { IconButton } from '../../lib/element/button';
import { ReactComponent as UploadIcon } from '../../asset/svg/upload.svg';

export function MyPurchasesComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
    activeTab,
    setActiveTab,
    tabItems,
    headersTable,
    itemsTable,
  } = props;
  return (
    <SectionLayout>
      <TitlePrimary tid="PURCHASE.SEЕWING_GOODS.MY_PURCHASES" />
      <FilterTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabItems={tabItems}
      />
      <TableList headers={headersTable} items={itemsTable}>
        {(props) => {
          if (activeTab === 2) {
            return (
              <IconButton>
                <UploadIcon />
              </IconButton>
            );
          }
        }}
      </TableList>
    </SectionLayout>
  );
}
