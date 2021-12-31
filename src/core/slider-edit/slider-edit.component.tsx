import { SectionLayout } from 'src/lib/element/layout';
import { TitlePrimary } from 'src/lib/element/title';
import { SlideEditForm } from './slider-edit.form';
import { SlidePreview } from './slider-edit.preview';
import { SliderEditComponentProps } from './slider-edit.type';

export function SliderEditComponent(props: SliderEditComponentProps) {
  const { state, lang, formik, onChangeImage, onRemove } = props;

  return (
    <SectionLayout type="SMALL">
      <TitlePrimary tid="SLIDER.EDIT_SLIDER.TITLE" />
      <SectionLayout>
        <SlidePreview
          lang={lang}
          formik={formik}
          onChangeImage={onChangeImage}
        />
        <SlideEditForm state={state} formik={formik} onRemove={onRemove} />
      </SectionLayout>
    </SectionLayout>
  );
}
