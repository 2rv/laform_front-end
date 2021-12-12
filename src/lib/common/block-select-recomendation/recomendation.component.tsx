import styled from 'styled-components';
import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { THEME_SIZE } from 'src/lib/theme';
import { useState } from 'react';
import { ButtonSecondary, IconButton } from 'src/lib/element/button';
import { ModalFull } from 'src/lib/element/modal';
import { BasicCardList } from 'src/lib/element/card-list';
import { ReactComponent as CancelIcon } from '../../../asset/svg/delete-cancel-icon.svg';
import { recommendationComponentProps } from './recomendation.type';
import { RecomendationList } from './list-recomendation';

export function RecomendationComponent(props: recommendationComponentProps) {
  const { isPending, listItems, handleChange, selectedItems } = props;
  const [modal, setModal] = useState(false);

  return (
    <SectionLayout type="SMALL">
      <Title tid="ARTICLE_CREATE_FORM.RECOMENDATIONS.TITLE" />

      <FieldLayout type="double" adaptive>
        <ButtonSecondary
          tid="ARTICLE_CREATE_FORM.RECOMENDATIONS.ADD_RECOMENDATIONS"
          onClick={() => setModal(true)}
        />
      </FieldLayout>

      <RecomendationList items={selectedItems} handleChange={handleChange} />

      <ModalFull onOpen={modal}>
        <Case>
          <Wrapper type="SMALL">
            <HeaderCase>
              <TitlePrimary tid="ARTICLE_CREATE_FORM.RECOMENDATIONS.SELECT_RECOMENDATION" />
              <ButtonIcon onClick={() => setModal(false)}>
                <CancelIcon />
              </ButtonIcon>
            </HeaderCase>
            <BasicCardList
              items={listItems}
              pending={isPending}
              onSelect={handleChange}
              emptyText="Список пустой"
            />
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
