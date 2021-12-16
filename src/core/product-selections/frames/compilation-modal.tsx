import styled from 'styled-components';
import React, { useState } from 'react';
import { ReactComponent as RemoveIcon } from 'src/asset/svg/remove.svg';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { spacing } from 'src/lib/theme';
import { ButtonSecondary, IconButton } from 'src/lib/element/button';
import { ModalFull } from 'src/lib/element/modal';
import { BasicCardList } from 'src/lib/element/card-list';
import { CompilationModalProps } from '../product-selections.type';

export function CompilationModal(props: CompilationModalProps) {
  const { listItems, handleAdd } = props;
  const [modal, setModal] = useState(false);

  return (
    <React.Fragment>
      <Button
        tid="ARTICLE_CREATE_FORM.RECOMENDATIONS.ADD_RECOMENDATIONS"
        onClick={() => setModal(true)}
      />
      <ModalFull onOpen={modal}>
        <Case>
          <Wrapper type="SMALL">
            <HeaderCase>
              <TitlePrimary tid="ARTICLE_CREATE_FORM.RECOMENDATIONS.SELECT_RECOMENDATION" />
              <ButtonIcon onClick={() => setModal(false)}>
                <RemoveIcon />
              </ButtonIcon>
            </HeaderCase>
            <BasicCardList
              items={listItems}
              onSelect={handleAdd}
              emptyText="COMPILATION.LIST_IS_EMPTY"
            />
          </Wrapper>
        </Case>
      </ModalFull>
    </React.Fragment>
  );
}
const HeaderCase = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${spacing(3)};
  align-items: center;
`;

const Wrapper = styled(SectionLayout)`
  max-width: 1140px;
`;
const ButtonIcon = styled(IconButton)`
  padding: 0;
`;
const Button = styled(ButtonSecondary)`
  margin-top: 19px;
`;
const Case = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
