import styled from 'styled-components';
import {
  borderRadius,
  colors,
  fontFamily,
  fontSizes,
  horizontalSpacing,
  verticalSpacing,
  viewPort,
} from '../../constants/theme';

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
    @media (max-width: ${viewPort.mobile}) {
      margin-left: ${horizontalSpacing.sm};
    }
  }

  p {
    font-size: ${fontSizes.md2};
    font-family: ${fontFamily.lato};
    @media (max-width: ${viewPort.mobile}) {
      font-size: ${fontSizes.sm};
      padding: ${verticalSpacing.xs} ${horizontalSpacing.sm};
    }
    @media (max-width: ${viewPort.laptop}) {
      font-size: ${fontSizes.sm};
    }
  }
`;
