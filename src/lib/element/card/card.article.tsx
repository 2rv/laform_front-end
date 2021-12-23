import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { TextSecondary } from '../text';
import { CardImage } from './card.image';
import { ARTICLE_PAGE_ROUTE_PATH } from '../../../core/article-page';
import { ConvertTime } from 'src/lib/common/time';
import { CardArticleType } from './card.type';
import {
  DeleteButton,
  SelectButton,
  LikeButton,
  CardName,
  RemoveButton,
} from './card.components';
import { POST_CREATE_ROUTE_PATH } from 'src/core/post-create';

export function CardArticle(props: CardArticleType) {
  const {
    id,
    image,
    name,
    modifier,
    modifierColor,
    createdDate,
    like,
    deleted,
    admin,
    type,
    onSelect,
    onDelete,
    onRemove,
    isCreateList,
  } = props;

  return (
    <Container>
      <CardImage
        path={isCreateList ? POST_CREATE_ROUTE_PATH : ARTICLE_PAGE_ROUTE_PATH}
        pathConfig={{ params: { id: id } }}
        image={image}
        modifier={modifier}
        modifierColor={modifierColor}
        deleted={deleted}
        isCreateList={isCreateList}
      />
      <Content>
        <ColumnCase>
          <CardName tid={name} />
          <Date tid={ConvertTime(createdDate)} />
        </ColumnCase>
        {(typeof like === 'boolean' || admin) && (
          <ActionCase>
            <LikeButton id={id} type={type} like={like} />
            <DeleteButton
              id={id}
              type={type}
              admin={admin}
              onDelete={onDelete}
              deleted={deleted}
            />
            <RemoveButton id={id} onRemove={onRemove} />
          </ActionCase>
        )}
      </Content>
      <SelectButton id={id} type={type} onSelect={onSelect} />
    </Container>
  );
}

const Date = styled(TextSecondary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  color: ${THEME_COLOR.TEXT.LIGHT};
  line-height: 1.5;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  position: relative;
  overflow: hidden;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  gap: ${spacing(3)};
  justify-content: space-between;
  align-items: center;
`;
const ActionCase = styled.div`
  display: flex;
  gap: ${spacing(2)};
  align-items: center;
`;
const ColumnCase = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(1)};
`;
