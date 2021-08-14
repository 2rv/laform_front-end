import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { SectionLayout } from 'src/lib/element/layout';
import { SliderListComponent } from './frames';
import { TitlePrimary } from '../../lib/element/title';
import { ButtonBasic } from '../../lib/element/button';
import { ReactComponent as PlusIcon } from '../../asset/svg/plus-icon.svg';
import { TextSecondary } from '../../lib/element/text';

export function SliderEditListComponent(props) {
  const { items } = props;
  return (
    <SectionLayout>
      <TitlePrimary tid="Слайдер" />
      <SliderListComponent items={items} />
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
