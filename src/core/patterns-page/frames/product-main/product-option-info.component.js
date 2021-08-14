import styled from 'styled-components';
import { spacing, THEME_SIZE, THEME_COLOR } from '../../../../lib/theme';
import { TextSecondary, TextPrimary } from '../../../../lib/element/text';
import { SectionLayout } from '../../../../lib/element/layout';

export function ProductOptionInfo(props) {
  const { optionInfo } = props;
  if (!optionInfo)
    return <TextPrimary tid="Нету сведений о параметрах товара" />;
  return (
    <SectionLayout type="TEXT">
      {optionInfo.map(({ name, value }, index) => {
        return (
          <TextSecondary key={index}>
            <TextSecondary tid={name} />: &nbsp;
            <TextPrimary tid={value} />
          </TextSecondary>
        );
      })}
    </SectionLayout>
  );
}
