import styled from 'styled-components';
import { borderRadius, colors, horizontalSpacing, verticalSpacing } from '../../constants/theme';


export const CustomButton = styled.button`
  align-self: center;
  background-color: ${colors.darkGrey};
  color: ${colors.white};
  padding: ${verticalSpacing.xs} ${horizontalSpacing.sm2};
  border-radius: ${borderRadius.default};
  border: none;
  margin: ${verticalSpacing.sm};

  :hover {
    opacity:	0.8;
  }
`;
