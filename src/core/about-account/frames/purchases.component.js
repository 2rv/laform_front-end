import styled from 'styled-components';
import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { Divider } from 'src/lib/element/divider';
import { THEME_SIZE } from 'src/lib/theme';
import { TextSecondary } from 'src/lib/element/text';
import { Table } from 'src/lib/common/block-table';

export function PurchasesComponent(props) {
  const { purchases = [] } = props;
  return (
    <SectionLayout type="SMALL">
      <Title tid="PROFILE.PURCHASES" />
      <Divider />
      {Boolean(purchases.length) ? (
        <Table items={purchases} />
      ) : (
        <TextSecondary tid="PROFILE.NOT_HAVE_PURCHASES" />
      )}
    </SectionLayout>
  );
}

const Title = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
