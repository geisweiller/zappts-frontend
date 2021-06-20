import styled from 'styled-components';
import {
  borderRadius,
  colors,
  fontSizes,
  horizontalSpacing,
  verticalSpacing,
} from '../../constants/theme';

export const CustomButton = styled.button`
  display: flex;
  align-self: center;
  background-color: ${colors.darkGrey};
  color: ${colors.white};
  padding: ${verticalSpacing.xs3} ${horizontalSpacing.sm2};
  border-radius: ${borderRadius.default};
  border: none;
  margin: ${verticalSpacing.sm};
  font-size: ${fontSizes.md};

  :hover {
    opacity: 0.8;
  }
`;
