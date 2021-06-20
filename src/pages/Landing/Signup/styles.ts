import styled from 'styled-components';
import {
  colors,
  fontSizes,
  horizontalSpacing,
  verticalSpacing,
  viewPort,
} from '../../../constants/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (max-width: ${viewPort.mobile}) {
    flex-direction: column;
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  @media (max-width: ${viewPort.mobile}) {
    width: 100%;
  }
`;

export const LeftContainer = styled.div`
  width: 50%;
  @media (max-width: ${viewPort.mobile}) {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${verticalSpacing.sm} ${horizontalSpacing.sm};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  @media (max-width: ${viewPort.mobile}) {
    width: 75%;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const WelcomeMessage = styled.p`
  font-size: ${fontSizes.xl};
  margin-bottom: ${verticalSpacing.md};
  text-align: center;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${verticalSpacing.sm};
  @media (max-width: ${viewPort.mobile}) {
    width: ${horizontalSpacing.full};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media (max-width: ${viewPort.laptop}) {
      a {
        font-size: ${fontSizes.xs};
      }
    }
  }

  div.hasAccount {
    margin-top: ${verticalSpacing.sm};
  }

  p {
    margin: 0 4px;
    font-size: ${fontSizes.sm};
    @media (max-width: ${viewPort.laptop}) {
      font-size: ${fontSizes.xs};
    }
  }

  a {
    color: ${colors.green};
    font-size: ${fontSizes.md};
  }
`;
