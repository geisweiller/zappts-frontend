import styled from 'styled-components';
import {
  borderRadius,
  colors,
  fontSizes,
  horizontalSpacing,
  verticalSpacing,
  viewPort,
} from '../../constants/theme';

export const CustomButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
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

  @media (max-width: ${viewPort.mobile}) {
    padding: ${verticalSpacing.xs3} ${horizontalSpacing.lg};
    font-size: ${fontSizes.sm};
  }
  @media (max-width: ${viewPort.laptop}) {
    padding: ${verticalSpacing.xs3} ${horizontalSpacing.sm};
    font-size: ${fontSizes.sm};
  }
`;
