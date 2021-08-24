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
import { bestCompilationsRemoveItem, bestMasterClassesUpdateItem } from '../../edit-compilation.action';

export function EditCompilationListItemComponent(props) {
  const {
    id,
    titleRu,
    imageUrls,
    compilationNamе,
    currentLang,
  } = props;

  const dispatch = useDispatch();
  const [ productName, setProductName ] = React.useState(titleRu);

  const changeProductNameHandler = (newProductname) => {
    setProductName(newProductname);
    // dispatch(bestMasterClassesUpdateItem(id, newProductname, compilationNamе, currentLang.toLowerCase()));
  };

  const removeCompilationItem = (compilationNamе, id) => {
    dispatch(bestCompilationsRemoveItem(compilationNamе, id, currentLang.toLowerCase()));
  };

  return (
    <>
      <Item>
        <ItemLayout type="small">
          <ItemImage src={imageUrls[0]?.fileUrl} />
          <ItemName tid={productName} />
        </ItemLayout>
        <ItemLayout>
          <Popup content={(
            <EditCompilationComponent
              productName={productName}
              changeProductNameHandler={changeProductNameHandler}
            />
          )}>
            <IconButton>
              <EditIcon />
            </IconButton>
          </Popup>
          <IconButton onClick={() => removeCompilationItem(compilationNamе, id)}>
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
