import { ChartBlock } from 'src/lib/common/block-chart';
import { SectionLayout } from 'src/lib/element/layout';
import { LoaderPrimary } from 'src/lib/element/loader';
import { StatisticsTabs, TotalStats } from './frames';

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
  } = props;

  return (
    <SectionLayout>
      {pageLoading && <LoaderPrimary />}
      <StatisticsTabs pageLoading={pageLoading} activeTab={activeTab} />
      <TotalStats general={general} activeTab={activeTab} />
      {!activeTab && <ChartBlock data={users} />}
      <ChartBlock data={count} />
      <ChartBlock data={price} />
    </SectionLayout>
  );
}
