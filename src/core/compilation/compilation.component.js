import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { IconButton, ButtonBasic } from '../../lib/element/button';
import { ReactComponent as EditIcon } from '../../asset/svg/change-icon.svg';
import { ReactComponent as DeleteIcon } from '../../asset/svg/cancel-delete-icon.svg';
import { FilterTabs } from '../../lib/element/filter-tabs';
import { Spinner } from '../../lib/element/spinner';
import { TableList } from '../block-table-list';
import { CREATE_PRODUCT_ROUTE_PATH } from '../create-product';
import { setLinkRedirect } from '../../main/navigation';
import { removeCompilation } from './compilation.action';

export function CompilationComponent(props) {
  const {
    data,
    tabItems,
    currentLang,
    setActiveTab,
    activeTab,
    isPending,
  } = props;

  const dispatch = useDispatch();

  const removeCompilationHandler = (id) => {
    const compilationName = activeTab === 0 ? 'post' : activeTab === 1 ? 'master-class' : 'post';

    dispatch(removeCompilation(
      currentLang,
      compilationName,
      id,
    ));
  };

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
        <TableList items={data}>
          {(id) => {
            return (
              <>
                <Button>
                  <EditIcon />
                </Button>
                <Button onClick={() => removeCompilationHandler(id)}>
                  <DeleteIcon />
                </Button>
              </>
            );
          }}
        </TableList>
      )}
      <ButtonBasic tid="Добавить товар" onClick={setLinkRedirect(CREATE_PRODUCT_ROUTE_PATH)} />
    </SectionLayout>
  );
}
const Button = styled(IconButton)`
  padding: 0;
`;
