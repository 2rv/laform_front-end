import styled from 'styled-components';
import { ChartBlock } from 'src/lib/common/block-chart';
import { SectionLayout } from 'src/lib/element/layout';
import { LoaderPrimary } from 'src/lib/element/loader';
import { TitlePrimary } from 'src/lib/element/title';
import { THEME_SIZE } from 'src/lib/theme';
import { TabLinkBlock } from 'src/lib/element/tab-link';
import { TotalStats, TimeSelect } from './frames';
import { STATISTICS_PERIODS, STATISTICS_TABS } from './statistics.constant';
import { FieldSelect } from 'src/lib/element/field';

export function StatisticstComponent(props) {
  const {
    pending,
    error,
    errorMessage,
    pageLoading,
    activePath,

    general,
    price,
    count,
    users,
    onChange,
    value,
  } = props;

  return (
    <SectionLayout>
      {pageLoading && <LoaderPrimary />}
      <TabLinkBlock
        activePath={activePath}
        pathItems={STATISTICS_TABS}
        disabled={pageLoading}
      />
      <Title tid="STATISTICS.TITLES.TOTAL" />
      <FieldSelect
        onChange={onChange}
        value={value}
        tid="Период"
        options={STATISTICS_PERIODS}
      />
      <TotalStats general={general} activePath={activePath} />
      {!activePath && <ChartBlock data={users} />}
      <ChartBlock data={count} />
      <ChartBlock data={price} />
    </SectionLayout>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
`;
