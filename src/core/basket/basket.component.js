import styled from 'styled-components';
import { TitlePrimary } from '../../lib/element/title';
import { SectionLayout } from '../../lib/element/layout';
import { spacing, THEME_SIZE } from '../../lib/theme';
import { ReactComponent as EditIcon } from '../../asset/svg/change-icon.svg';
import { ReactComponent as DeleteIcon } from '../../asset/svg/cancel-delete-icon.svg';
import { TableList } from '../block-table-list';
import { FormalizationOrderingContainer } from './frames';
import { IconButton } from '../../lib/element/button';

export function BasketComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    errorMessage,
    isUserInfoLoadPending,
    pageLoading,
    initialValue,
    validation,
    onSubmitForm,
    fieldName,
    headersGoods,
    headersMaster,
    headersPatterns,
    itemsGoods,
    itemsMaster,
    itemsPatterns,
    count,
    incrementCount,
    dicrementCoun,
  } = props;

  return (
    <SectionLayout>
      <Title tid="BASKET.TITLE" />
      <TableList
        count={count}
        incrementCount={incrementCount}
        dicrementCoun={dicrementCoun}
        headers={headersGoods}
        items={itemsGoods}
      >
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
      <TableList headers={headersMaster} items={itemsMaster}>
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
      <TableList headers={headersPatterns} items={itemsPatterns}>
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
      <FormalizationOrderingContainer
        isPending={isPending}
        isError={isError}
        isSuccess={isSuccess}
        errorMessage={errorMessage}
        isUserInfoLoadPending={isUserInfoLoadPending}
        pageLoading={pageLoading}
        initialValue={initialValue}
        validation={validation}
        onSubmitForm={onSubmitForm}
        fieldName={fieldName}
      />
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: 28px;
  font-weight: ${THEME_SIZE.FONT_WEIGHT.BOLD};
`;
const Button = styled(IconButton)`
  padding: 0;
`;
