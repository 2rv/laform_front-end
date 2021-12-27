import styled from 'styled-components';
import { ChartBlock } from 'src/lib/common/block-chart';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { THEME_SIZE } from 'src/lib/theme';
import { TabLinkBlock } from 'src/lib/element/tab-link';
import { STATISTICS_TABS } from './statistics.constant';
import { BlockDatepicker } from 'src/lib/common/block-datepicker';
import { TotalStats } from './statistics.total';
import { StatisticsComponentProps } from './statistics.type';
import { CenteredSpinner } from 'src/lib/element/spinner';

export function StatisticsComponent(props: StatisticsComponentProps) {
  const {
    state: { pending, priceData, countData, usersData, generalData },
    activePath,
    setRange,
  } = props;

  return (
    <SectionLayout>
      <TabLinkBlock
        activePath={activePath === 'undefined' ? undefined : activePath}
        pathItems={STATISTICS_TABS}
        disabled={pending}
      />
      <Title tid="STATISTICS.TITLES.TOTAL" />
      {pending && <CenteredSpinner />}
      <BlockDatepicker onChange={setRange} />
      <TotalStats
        general={generalData}
        activePath={activePath !== 'undefined'}
      />
      {activePath === 'undefined' && <ChartBlock data={usersData} />}
      <ChartBlock data={countData} />
      <ChartBlock data={priceData} />
    </SectionLayout>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
`;
