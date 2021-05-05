import styled from 'styled-components';
import { colors, fontSizes, horizontalSpacing, verticalSpacing } from '../../constants/theme';

export const Container = styled.div`
  strong {
    color: ${colors.red};
    font-size: ${fontSizes.xs};
  }
`;

export const InputLabel = styled.p`
  font-size: ${fontSizes.sm};
  color: ${(props) => (props.theme === true ? colors.red : colors.black)};
  margin-top: ${verticalSpacing.xs};
`;

export const CustomInput = styled.input`
  border-top: none;
  border-right: none;
  border-left: none;
  outline: none;
  border-color: ${(props) => (props.theme === true ? colors.red : colors.lightGrey)};
  width: 100%;
  padding: ${verticalSpacing.xs} ${horizontalSpacing.xs2};

  ::placeholder {
  color: ${(props) => (props.theme === true ? colors.red : colors.black)};
  }
`;
