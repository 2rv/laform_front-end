import styled from 'styled-components';
import { SectionLayout } from '../../lib/element/layout';
import { LinkSecondary } from '../../lib/element/link';
import { TitlePrimary } from '../../lib/element/title';
import { Divider } from '../../lib/element/divider';
import { THEME_SIZE } from '../../lib/theme';
import { TableList } from '../block-table-list';
import { AboutAccountInfoComponent } from './frames';
import { TextSecondary } from 'src/lib/element/text';

export function AboutAccountComponent(props) {
  const { orderItems, likes, commentItems } = props;
  return (
    <SectionLayout>
      <AboutAccountInfoComponent />
      <SectionLayout type="SMALL">
        <SectionLayout type="TEXT">
          <Title tid="Список покупок" />
          <Divider />
          {Boolean(orderItems.length) ? (
            <>
            <TableList items={orderItems} />
            <LinkSecondary tid="Посмотреть все..." />
            </>
          ) : (
            <TextSecondary tid="Нету покупок" />
          )}
        </SectionLayout>
      </SectionLayout>
      <SectionLayout type="SMALL">
        <SectionLayout type="TEXT">
          <Title tid="Мои лайки" />
          <Divider />
          {Boolean(likes.length) ? (
            <>
              <TableList items={likes} />
              <LinkSecondary tid="Посмотреть все..." />
            </>
          ) : (
            <TextSecondary tid="Нету лайков" />
          )}
        </SectionLayout>
      </SectionLayout>
      <SectionLayout type="SMALL">
        <SectionLayout type="TEXT">
          <Title tid="Мои комментарии" />
          <Divider />
          {Boolean(commentItems.length) ? <TableList items={commentItems} /> : <TextSecondary tid="Нету комментариев" />}
        </SectionLayout>
      </SectionLayout>
    </SectionLayout>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
