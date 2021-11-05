import { SyntheticEvent } from 'react';
import { SelectImageComponent } from './component';
import { SelectImageProps } from './type';

export function SelectImageContainer(props: SelectImageProps) {
  const {
    titleTid = 'Изображения',
    maxImages = 6,
    values,
    errors,
    touched,
    setFieldValue,
    name = 'images',
  } = props;

  function handleAdd(event: SyntheticEvent<HTMLInputElement>, push: Function) {
    const file = event.currentTarget?.files?.[0];
    if (file?.type.split('/')[0] !== 'image' || !file) {
      alert('PRODUCT_IMAGES.SELECT_ONLY_IMAGE');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => push({ fileUrl: reader.result, file: file });
    reader.readAsDataURL(file);
  }

  function handleUpdate(
    event: SyntheticEvent<HTMLInputElement>,
    index: number,
  ) {
    const file = event.currentTarget?.files?.[0];

    if (file?.type.split('/')[0] !== 'image' || !file) {
      alert('PRODUCT_IMAGES.SELECT_ONLY_IMAGE');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        setFieldValue(`${name}.${index}`, {
          fileUrl: reader.result,
          file: file,
        });
      }
    };

    reader.readAsDataURL(file);
  }

  return (
    <SelectImageComponent
      titleTid={titleTid}
      maxImages={maxImages}
      values={values[name]}
      error={touched[name] && errors[name]}
      arrayName={name}
      handleAdd={handleAdd}
      handleUpdate={handleUpdate}
    />
  );
}
