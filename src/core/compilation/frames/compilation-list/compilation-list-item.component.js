import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { TextSecondary } from '../../../../lib/element/text';
import { ButtonBasic } from '../../../../lib/element/button';
import { ReactComponent as EditIcon } from '../../../../asset/svg/edit-icon.svg';
import { ReactComponent as DeleteIcon } from '../../../../asset/svg/delete-cancel-icon.svg';

export function CompilationListItemComponent({ name, backgroundImage, id }) {
  return (
    <>
      <Item>
        <ItemLayout type="small">
          <ItemImage src={backgroundImage} />
          <ItemName tid={name} />
        </ItemLayout>
        <ItemLayout>
          <IconButton icon={EditIcon} />
          <IconButton icon={DeleteIcon} />
        </ItemLayout>
      </Item>
      <Divider />
    </>
  );
}
const Divider = styled.div`
  border: 1px solid ${THEME_COLOR.BACKGROUND.GRAY};
`;
const IconButton = styled(ButtonBasic)`
  padding: ${spacing(2)};
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
