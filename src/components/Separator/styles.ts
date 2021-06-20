import styled from 'styled-components';
import { colors, fontSizes, horizontalSpacing, verticalSpacing } from '../../constants/theme';

export const CustomSeparator = styled.div`
  display: flex;
  margin: ${verticalSpacing.sm} 2px;
  width: 75%;
  align-items: center;
  justify-content: space-between;
`;

export const Line = styled.div`
  height: 1px;
  width: 40%;
  background-color: ${colors.lightGrey};
`;

export const Text = styled.p`
  margin: 0 ${horizontalSpacing.xs};
  font-size: ${fontSizes.sm};
`;
