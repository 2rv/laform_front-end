import styled from 'styled-components';
import { ChartBlock } from 'src/lib/common/block-chart';
import { SectionLayout } from 'src/lib/element/layout';
import { LoaderPrimary } from 'src/lib/element/loader';
import { TitlePrimary } from 'src/lib/element/title';
import { THEME_SIZE } from 'src/lib/theme';
import { StatisticsTabs, TotalStats, TimeSelect } from './frames';

export function StatisticstComponent(props) {
  const {
    pending,
    error,
    errorMessage,
    pageLoading,
    activeTab,

    general,
    price,
    count,
    users,
    onChange,
    value,
    options,
  } = props;

  return (
    <SectionLayout>
      {pageLoading && <LoaderPrimary />}
      <StatisticsTabs pageLoading={pageLoading} activeTab={activeTab} />
      <Title tid="STATISTICS.TITLES.TOTAL" />
      <TimeSelect onChange={onChange} value={value} options={options} />
      <TotalStats general={general} activeTab={activeTab} />
      {!activeTab && <ChartBlock data={users} />}
      <ChartBlock data={count} />
      <ChartBlock data={price} />
    </SectionLayout>
  );
}
const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.LARGE};
`;
