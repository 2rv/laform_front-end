import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { SectionLayout } from 'src/lib/element/layout';
import { SliderListItemsComponent } from './frames';
import { TitlePrimary } from '../../lib/element/title';
import { ButtonBasic } from '../../lib/element/button';
import { ReactComponent as PlusIcon } from '../../asset/svg/plus-icon.svg';
import { TextSecondary } from '../../lib/element/text';

export function SliderListComponent(props) {
  const { items } = props;
  return (
    <SectionLayout>
      <TitlePrimary tid="Слайдер" />
      <SliderListItemsComponent items={items} />
      <AddSlide>
        <IconButton icon={PlusIcon} />
        <TextSecondary tid="Дополнить сборку" />
      </AddSlide>
    </SectionLayout>
  );
}
const AddSlide = styled.div`
  gap: ${spacing(3)};
  display: flex;
  align-items: center;
`;

const IconButton = styled(ButtonBasic)`
  padding: ${spacing(2)};
  width: 40px;
  height: 40px;
`;
