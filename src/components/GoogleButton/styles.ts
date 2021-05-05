import styled from 'styled-components';
import { borderRadius, colors, horizontalSpacing, verticalSpacing } from '../../constants/theme';

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.white};
  padding: ${verticalSpacing.xs} ${horizontalSpacing.xs};
  border-radius: ${borderRadius.default};
  border: none;
  box-shadow: 0px 3px 6px ${colors.lightGrey};

  :hover {
    box-shadow: 0px 3px 6px ${colors.darkGrey};
  }
  img { 
    margin-right: ${horizontalSpacing.xs};
  }
`;  