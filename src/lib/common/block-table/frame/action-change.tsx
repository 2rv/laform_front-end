import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { Popup } from 'src/lib/element/popup';
import { ReactComponent as ChangeIcon } from 'src/asset/svg/change.svg';
import { IconButton, ButtonSecondary } from 'src/lib/element/button';
import { FieldSelect } from 'src/lib/element/field';
import { Formik } from 'formik';
import { ActionChangeProps } from '../table.type';

export function ActionChange(props: ActionChangeProps) {
  const {
    id,
    indexId,
    changeItem,
    optionIndex,
    sizes = [],
    colors = [],
    options = [],
    maxCount,
    maxLength,
    isCount,
    isLength,
  } = props;

  if (!id || typeof changeItem !== 'function') return null;
  if (sizes.length < 2 && colors.length < 2 && options.length < 2) {
    return null;
  }
  const onSubmit = (values: any) => {
    const getOptionId = (): string | undefined => {
      if (Boolean(sizes.length)) {
        return sizes[values.size]?.optionId;
      }
      if (Boolean(colors.length)) {
        return colors[values.color]?.optionId;
      }
      if (Boolean(options.length)) {
        return options[values.option]?.optionId;
      }
      return undefined;
    };
    const result = {
      indexId,
      id,
      optionId: getOptionId(),
      count: isCount
        ? maxCount !== 0
          ? 1
          : 0
        : !isCount && !isLength
        ? 1
        : undefined,
      length: isLength ? (maxLength !== 0 ? 1 : 0) : undefined,
    };
    changeItem(result);
  };
  return (
    <Formik
      initialValues={{
        size: Boolean(sizes.length) ? optionIndex : undefined,
        color: Boolean(colors.length) ? optionIndex : undefined,
        option: Boolean(options.length) ? optionIndex : undefined,
      }}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => {
        return (
          <Container onSubmit={handleSubmit}>
            <Popup
              top={50}
              middleLeft
              content={(setVisible: Function) => (
                <Content>
                  {Boolean(sizes.length > 2) && (
                    <FieldSelect
                      name="size"
                      value={values.size}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      options={sizes}
                    />
                  )}
                  {Boolean(colors.length > 2) && (
                    <FieldSelect
                      name="color"
                      value={values.color}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      options={colors}
                    />
                  )}
                  {Boolean(options.length > 2) && (
                    <FieldSelect
                      name="option"
                      value={values.option}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      options={options}
                    />
                  )}
                  <ButtonSecondary
                    onClick={() => {
                      handleSubmit();
                      setVisible(false);
                    }}
                    type="submit"
                    tid="BLOCK_TABLE_LIST.SAVE_CHANGES"
                  />
                </Content>
              )}
            >
              <Button>
                <ChangeIcon />
              </Button>
            </Popup>
          </Container>
        );
      }}
    </Formik>
  );
}
const Button = styled(IconButton)`
  padding: 0;
`;
const Container = styled.form`
  display: flex;
  justify-content: flex-end;
  gap: ${spacing(3)};
  @media screen and (max-width: 875px) {
    justify-content: flex-start;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;
