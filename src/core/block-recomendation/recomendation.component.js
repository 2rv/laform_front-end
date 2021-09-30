import styled from 'styled-components';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { useEffect, useState } from 'react';
import {
  ButtonBasic,
  ButtonSecondary,
  IconButton,
} from 'src/lib/element/button';
import { ModalFull } from 'src/lib/element/modal';
import { BasicCardList } from 'src/lib/element/card-list';
import { ReactComponent as CancelIcon } from '../../asset/svg/delete-cancel-icon.svg';
import { FilterTabs } from 'src/lib/element/filter-tabs';
import { FormFilter } from 'src/lib/element/form-filter';
import { filterByType } from 'src/lib/common/filter-list-card';
import { RecomendationList } from './list-recomendation';

export function RecomendationComponent(props) {
  const [modal, setModal] = useState(false);
  const {
    listItems,
    selectedListItems,
    onSelect,
    activeTab,
    setActiveTab,
    tabItems,
    filterOptions,
    filterInitialValue,
    setFilter,
    filterSelectName,
    findFieldName,
    filter,
  } = props;

  return (
    <SectionLayout type="SMALL">
      <Title tid="ARTICLE_CREATE_FORM.RECOMENDATIONS.TITLE" />

      <FieldLayout type="double" adaptive>
        <ButtonSecondary
          tid="ARTICLE_CREATE_FORM.RECOMENDATIONS.ADD_RECOMENDATIONS"
          onClick={() => setModal(true)}
        />
      </FieldLayout>

      <RecomendationList items={selectedListItems} onSelect={onSelect} />

      <ModalFull onOpen={modal}>
        <Case>
          <Wrapper type="SMALL">
            <HeaderCase>
              <TitlePrimary tid="ARTICLE_CREATE_FORM.RECOMENDATIONS.SELECT_RECOMENDATION" />
              <ButtonIcon onClick={() => setModal(false)}>
                <CancelIcon />
              </ButtonIcon>
            </HeaderCase>
            <FilterTabs
              activeTab={activeTab}
              tabItems={tabItems}
              setActiveTab={setActiveTab}
            />
            <FormFilter
              findPlaceholderTid="ARTICLE_CREATE_FORM.RECOMENDATIONS.SEARCH_PRODUCT"
              filterOptions={filterOptions}
              filterSelectName={filterSelectName}
              findFieldName={findFieldName}
              initialValue={filterInitialValue}
              setFilter={setFilter}
            />
            <BasicCardList items={listItems} onSetSelect={onSelect} />
          </Wrapper>
        </Case>
      </ModalFull>
    </SectionLayout>
  );
}

const Wrapper = styled(SectionLayout)`
  max-width: 1140px;
`;
const ButtonIcon = styled(IconButton)`
  padding: 0;
`;
const HeaderCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Case = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Button = styled(ButtonBasic)`
  padding: 0;
  height: min-content;
  width: max-content;
  background-color: transparent;
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.SECONDARY};
`;
