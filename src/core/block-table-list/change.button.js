import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { Popup } from 'src/lib/element/popup';
import { ReactComponent as EditIcon } from '../../asset/svg/change-icon.svg';
import { IconButton, ButtonSecondary } from '../../lib/element/button';
import { FieldSelect } from 'src/lib/element/field';
import { useEffect, useState } from 'react';
import { Formik } from 'formik';

export function ChangeButton(props) {
  const {
    id,
    sizeId,
    colorId,
    programId,
    sizesOptions = [],
    colorsOptions = [],
    programsOptions = [],
    changeItem,
  } = props;
  if (
    sizesOptions.length < 2 &&
    colorsOptions.length < 2 &&
    programsOptions.length < 2
  ) {
    return null;
  }
  return (
    <Formik
      initialValues={{
        size: sizeId,
        color: colorId,
        program: programId,
        count: 1,
      }}
      onSubmit={(values) => changeItem(id, values)}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => {
        return (
          <Container onSubmit={handleSubmit}>
            <Popup
              top={50}
              middleLeft
              content={(setVisible) => (
                <Content>
                  {Boolean(sizesOptions.length > 1) && (
                    <FieldSelect
                      name="size"
                      value={values['size']}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      options={sizesOptions}
                    />
                  )}
                  {Boolean(colorsOptions.length > 1) && (
                    <FieldSelect
                      name="color"
                      value={values['color']}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      options={colorsOptions}
                    />
                  )}
                  {Boolean(programsOptions.length > 1) && (
                    <FieldSelect
                      name="program"
                      value={values['program']}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      options={programsOptions}
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
                <EditIcon />
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
