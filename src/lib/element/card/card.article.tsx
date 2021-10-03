import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { TextSecondary } from '../text';
import { CardImage } from './card.image';
import { ARTICLE_PAGE_ROUTE_PATH } from '../../../core/article-page';
import { ConvertTime } from 'src/lib/common/time-convert';
import { CardArticleTypeProps } from './card.type';
import {
  DeleteButton,
  SelectButton,
  LikeButton,
  CardName,
} from './card.components';

export function CardArticle(props: CardArticleTypeProps) {
  const {
    id,
    image,
    name,
    modifier,
    createdDate,
    like,
    type,
    onSelect,
    onDelete,
  } = props;

  return (
    <Container>
      <CardImage
        path={ARTICLE_PAGE_ROUTE_PATH}
        pathConfig={{ dynamic: true, params: { id: id } }}
        image={image}
        modifier={modifier}
      />
      <Content>
        <ColumnCase>
          <CardName tid={name} />
          <Date tid={ConvertTime(createdDate)} />
        </ColumnCase>
        <LikeButton id={id} type={type} like={like} />
      </Content>
      <ActionCase>
        <SelectButton id={id} type={type} onSelect={onSelect} />
        <DeleteButton id={id} type={type} onDelete={onDelete} />
      </ActionCase>
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
`;
const Content = styled.div`
  display: flex;
  gap: ${spacing(3)};
  flex: 1;
  justify-content: space-between;
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