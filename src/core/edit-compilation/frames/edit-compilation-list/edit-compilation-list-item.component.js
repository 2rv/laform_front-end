import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { TextSecondary } from 'src/lib/element/text';
import { ButtonBasic } from 'src/lib/element/button';
import { Popup } from 'src/lib/element/popup';
import { ReactComponent as EditIcon } from 'src/asset/svg/edit.svg';
import { ReactComponent as DeleteIcon } from 'src/asset/svg/delete-cancel-icon.svg';
import { EditCompilationComponent } from './edit-compilation..component';
import { updatePinned, bestMasterClassesUpdateItem } from '../../edit-compilation.action';

export function EditCompilationListItemComponent(props) {
  const {
    id,
    title,
    image,
    compilationNamе,
    currentLang,
  } = props;

  const dispatch = useDispatch();

  const changeProductNameHandler = (newProductname) => {
    dispatch(updatePinned(
      id,
      compilationNamе,
      currentLang,
      { titleRu: newProductname },
    ));
  };

  const removeCompilationItem = () => {
    dispatch(updatePinned(
      id,
      compilationNamе,
      currentLang,
      { pinned: false },
    ));
  };

  return (
    <>
      <ProductContainer>
        <ProductLayout type="small">
          <ProductImage src={image} />
          <ProductName tid={title} />
        </ProductLayout>
        <ProductLayout>
          <Popup content={(
            <EditCompilationComponent
              title={title}
              changeProductNameHandler={changeProductNameHandler}
            />
          )}>
            <IconButton>
              <EditIcon />
            </IconButton>
          </Popup>
          <IconButton onClick={removeCompilationItem}>
            <DeleteIcon />
          </IconButton>
        </ProductLayout>
      </ProductContainer>
      <Divider />
    </>
  );
}

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

const ProductLayout = styled.div`
  display: flex;
  gap: ${spacing(3)};
  align-items: center;
`;

const ProductName = styled(TextSecondary)`
  color: ${THEME_COLOR.SECONDARY_DARK};
  line-height: ${THEME_SIZE.FONT.LARGE};
`;

const ProductImage = styled.img`
  height: 75px;
  width: 75px;
`;

const IconButton = styled(ButtonBasic)`
  width: 45px;
  height: 45px;
  padding: ${spacing(2.4)};
`;

const Divider = styled.div`
  border: 1px solid ${THEME_COLOR.GRAY};
`;
