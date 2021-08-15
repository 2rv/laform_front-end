import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from 'src/lib/theme';
import { TextSecondary } from 'src/lib/element/text';
import { ButtonBasic } from 'src/lib/element/button';
import { Popup } from 'src/lib/element/popup';
import { ReactComponent as EditIcon } from 'src/asset/svg/edit.svg';
import { ReactComponent as DeleteIcon } from 'src/asset/svg/delete-cancel-icon.svg';
import { EditProductComponent } from '../edit-product';

export function EditCompilationListItemComponent(props) {
  const {
    titleEn,
    titleRu,
    imageUrl,
    id,
    compilationNamе,
    updateItem,
    removeItem,
    currentLang,
  } = props;

  const dispatch = useDispatch();
  const [ productName, setProductName ] = React.useState(currentLang === 'EN' ? titleEn : titleRu);

  const changeProductNameHandler = (newProductname) => {
    setProductName(newProductname);
    dispatch(updateItem(compilationNamе, id, newProductname));
  }

  return (
    <>
      <Item>
        <ItemLayout type="small">
          <ItemImage src={imageUrl.fileUrl} />
          <ItemName tid={currentLang === 'EN' ? titleEn : titleRu} />
        </ItemLayout>
        <ItemLayout>
          <Popup content={(
            <EditProductComponent
              productName={productName}
              changeProductNameHandler={changeProductNameHandler}
            />
          )}>
            <IconButton>
              <EditIcon />
            </IconButton>
          </Popup>
          <IconButton onClick={() => dispatch(removeItem(compilationNamе, id))}>
            <DeleteIcon />
          </IconButton>
        </ItemLayout>
      </Item>
      <Divider />
    </>
  );
}
const Divider = styled.div`
  border: 1px solid ${THEME_COLOR.GRAY};
`;
const IconButton = styled(ButtonBasic)`
width: 45px;
height: 45px;
padding: ${spacing(2.4)};
`;
const ItemLayout = styled.div`
  display: flex;
  gap: ${spacing(3)};
  align-items: center;
`;
const ItemImage = styled.img`
  height: 75px;
  width: 75px;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ItemName = styled(TextSecondary)`
  color: ${THEME_COLOR.SECONDARY_DARK};
  line-height: ${THEME_SIZE.FONT.LARGE};
`;
