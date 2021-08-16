import styled from 'styled-components';
import { SectionLayout } from '../../lib/element/layout';
import { LinkSecondary } from '../../lib/element/link';
import { TitlePrimary } from '../../lib/element/title';
import { Divider } from '../../lib/element/divider';
import { THEME_SIZE } from '../../lib/theme';
import { TableList } from '../block-table-list';
import { AboutAccountInfoComponent } from './frames';

export function AboutAccountComponent(props) {
  const { activityData, orderItems, likeItems, commentItems } = props;
  return (
    <SectionLayout>
      <AboutAccountInfoComponent />
      <SectionLayout type="SMALL">
        <SectionLayout type="TEXT">
          <Title tid="Список покупок" />
          <Divider />
          <TableList items={orderItems} />
          <LinkSecondary tid="Посмотреть все..." />
        </SectionLayout>
      </SectionLayout>
      <SectionLayout type="SMALL">
        <SectionLayout type="TEXT">
          <Title tid="Мои лайки" />
          <Divider />
          <TableList items={likeItems} />
          <LinkSecondary tid="Посмотреть все..." />
        </SectionLayout>
      </SectionLayout>
      <SectionLayout type="SMALL">
        <SectionLayout type="TEXT">
          <Title tid="Мои комментарии" />
          <Divider />
          <TableList items={commentItems} />
          {/* <LinkSecondary tid="Посмотреть все..." /> */}
        </SectionLayout>
      </SectionLayout>
    </SectionLayout>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
{
  /* <AboutAccountActivityComponent
        {...activityData}
      /> */
}
