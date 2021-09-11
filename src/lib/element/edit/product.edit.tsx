import React, { useState } from 'react';
import styled from 'styled-components';
import { spacing } from 'src/lib/theme';
import { useDispatch } from 'react-redux';
import { ReactComponent as QuestionMark } from 'src/asset/svg/question-mark.svg';
import { TextSecondary } from 'src/lib/element/text';
import { FieldSelect } from 'src/lib/element/field';
import { ButtonSecondary } from 'src/lib/element/button';
import { EditProductPropsType } from './type.edit';
import {
  SEWING_PRODUCT_KEY,
  PATTERN_PRODUCT_KEY,
  MASTER_CLASS_KEY,
  CHANGE_PARAMS_PRODUCTS,
} from '../../common/cart';

export function EditProductComponent(props: EditProductPropsType) {
  const { data, type, setVisible, saveAction } = props;
  const dispatch = useDispatch();
  const [masterClassProgramm, setMasterClassProgramm] = useState(
    data?.[MASTER_CLASS_KEY.PROGRAMM],
  );
  const [sewingSize, setSewingSize] = useState(data?.[SEWING_PRODUCT_KEY.SIZE]);
  const [sewingColor, setSewingColor] = useState(
    data?.[SEWING_PRODUCT_KEY.COLOR],
  );
  const [patternSize, setPatternSize] = useState(
    data?.[PATTERN_PRODUCT_KEY.SIZE],
  );
  const [patternFormat, setPatternFormat] = useState(
    data?.[PATTERN_PRODUCT_KEY.FORMAT],
  );

  return (
    <>
      {type === 'SEWING' ? (
        <Container>
          <FieldContainer>
            <span>
              <TextSecondary tid="BASKET.TABLE.PARAMETERS.SIZE" />
              {/* <QuestionMarkIcon /> */}
            </span>
            <FieldSelect
              value={sewingSize}
              textValue={true}
              onChange={(e: any) => setSewingSize(e.target.value)}
              options={data[SEWING_PRODUCT_KEY.SIZE_ENUM].map(
                (p: any, id: any) => {
                  return {
                    id: id,
                    tid: p,
                  };
                },
              )}
              name="size"
            />
          </FieldContainer>
          <FieldContainer>
            <TextSecondary tid="BASKET.TABLE.PARAMETERS.COLORS.TITLE" />
            <FieldSelect
              value={sewingColor}
              textValue={true}
              onChange={(e: any) => setSewingColor(e.target.value)}
              options={data[SEWING_PRODUCT_KEY.COLOR_ENUM].map(
                (p: any, id: any) => {
                  return {
                    id: id,
                    tid: p,
                  };
                },
              )}
              name="color"
            />
          </FieldContainer>
          <ApplyChangesButton
            onClick={() => {
              dispatch(
                saveAction({
                  [CHANGE_PARAMS_PRODUCTS.COLOR]: sewingColor,
                  [CHANGE_PARAMS_PRODUCTS.SIZE]: sewingSize,
                }),
              );
              setVisible(false);
            }}
            tid="BASKET.TABLE.PARAMETERS.APPLY_CHANGES"
          />
        </Container>
      ) : type === 'PATTERN' ? (
        <Container>
          <FieldContainer>
            <span>
              <TextSecondary tid="BASKET.TABLE.PARAMETERS.SIZE" />
              {/* <QuestionMarkIcon /> */}
            </span>
            <FieldSelect
              value={patternSize}
              textValue={true}
              onChange={(e: any) => setPatternSize(e.target.value)}
              options={data[PATTERN_PRODUCT_KEY.SIZE_ENUM].map(
                (p: any, id: any) => {
                  return {
                    id: id,
                    tid: p,
                  };
                },
              )}
              name="size"
            />
          </FieldContainer>
          <FieldContainer>
            <TextSecondary tid="BASKET.TABLE.PARAMETERS.FORMAT" />
            <FieldSelect
              value={patternFormat}
              textValue={true}
              onChange={(e: any) => setPatternFormat(e.target.value)}
              options={data[PATTERN_PRODUCT_KEY.FORMAT_ENUM].map(
                (p: any, id: any) => {
                  return {
                    id: id,
                    tid: p,
                  };
                },
              )}
              name="format"
            />
          </FieldContainer>
          <ApplyChangesButton
            onClick={() => {
              dispatch(saveAction());
              setVisible(false);
            }}
            tid="BASKET.TABLE.PARAMETERS.APPLY_CHANGES"
          />
        </Container>
      ) : type === 'MASTER' ? (
        <Container>
          <FieldContainer>
            <span>
              <TextSecondary tid="BASKET.TABLE.PARAMETERS.PROGRAM" />
            </span>
            <FieldSelect
              value={masterClassProgramm}
              textValue={true}
              onChange={(e: any) => setMasterClassProgramm(e.target.value)}
              options={data[MASTER_CLASS_KEY.PROGRAMM_ENUM].map(
                (p: any, id: any) => {
                  return {
                    id: id,
                    tid: p,
                  };
                },
              )}
              name="programm"
            />
          </FieldContainer>
          <ApplyChangesButton
            onClick={() => {
              dispatch(saveAction());
              setVisible(false);
            }}
            tid="BASKET.TABLE.PARAMETERS.APPLY_CHANGES"
          />
        </Container>
      ) : null}
    </>
  );
}

const Container = styled.div`
  z-index: 9999;
`;

const FieldContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  margin-bottom: ${spacing(3)};
`;

const ApplyChangesButton = styled(ButtonSecondary)`
  width: 100%;
`;

const QuestionMarkIcon = styled(QuestionMark)`
  margin-left: ${spacing(1)};
  vertical-align: middle;
`;
