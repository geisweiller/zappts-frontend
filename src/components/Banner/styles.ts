import styled from 'styled-components';
import {
  borderRadius,
  colors,
  fontSizes,
  horizontalSpacing,
  verticalSpacing,
  viewPort,
} from '../../constants/theme';

export const Container = styled.div`
  background-color: ${colors.green};
  height: 100%;

  .slick-dots {
    @media (max-width: ${viewPort.mobile}) {
      margin-bottom: ${verticalSpacing.sm};
    }
  }

  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: ${colors.white};
    width: ${horizontalSpacing.xs};
    border-radius: 20px;

    transition: width 0.35s ease-in-out;
    @media (max-width: ${viewPort.mobile}) {
      width: ${horizontalSpacing.sm};
    }
  }

  .slick-dots li button:before {
    content: '';
    width: 12px;
    height: 12px;
    border-radius: ${borderRadius.default};
    opacity: 0.5;
    background-color: ${colors.white};
  }
`;

export const SliderContent = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  padding: ${verticalSpacing.md};

  img {
    width: ${horizontalSpacing.xxl};
    height: auto;
    margin-bottom: ${verticalSpacing.sm};
  }

  h4 {
    margin-bottom: ${verticalSpacing.xs2};
    font-size: ${fontSizes.xl};
    color: ${colors.white};
    @media (max-width: ${viewPort.mobile}) {
      text-align: center;
    }
  }

  p {
    font-size: ${fontSizes.lg};
    color: ${colors.white};
    padding: 0 ${horizontalSpacing.sm};
    text-align: center;
    @media (max-width: ${viewPort.mobile}) {
      font-size: ${fontSizes.md};
    }
  }
`;
