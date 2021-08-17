import { SectionLayout } from '../../lib/element/layout';
import { TitlePrimary } from '../../lib/element/title';
import { SliderEditPreviewComponent, SliderEditFormContainer } from './frames';

export function SliderEditComponent(props) {
  const {
    slideFieldsData,
    onSubmitForm,
    sliderData,
    pickImage,
    sliderImage,
  } = props;

  return (
    <SectionLayout type="SMALL">
      <TitlePrimary tid="Редактирование слайдера" />
      <SectionLayout type="MEDIUM">
        <SliderEditPreviewComponent sliderData={sliderData} pickImage={pickImage} sliderImage={sliderImage} />
        <SliderEditFormContainer slideFieldsData={slideFieldsData} onSubmitForm={onSubmitForm} />
      </SectionLayout>
    </SectionLayout>
  );
}
