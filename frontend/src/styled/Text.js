
import styled from "styled-components";

const WelcomeText = styled.span`
    margin: 0;
    font-size: ${props => props.theme.fontSizes.FS26};
    font-weight: ${props => props.theme.fontWeights.FW500};
    letter-spacing: 0.2px;
    color: ${props => props.theme.colors.PRIMARY}
`;

const ErrorText = styled.span`
    margin-top: 0;
    font-size: ${props => props.theme.fontSizes.FS12};
    font-weight: ${props => props.theme.fontWeights.FW700};
    letter-spacing: 0.2px;
    color: ${props => props.theme.colors.TERTIARY}
`;

const TextBig = styled.span`
    margin: 0;
    font-size: ${props => props.theme.fontSizes.FS18};
    font-weight: ${props => props.theme.fontWeights.FW500};
    letter-spacing: 0.2px;
`;

const TextBigLight = styled.span`
    margin: 0;
    font-size: ${props => props.theme.fontSizes.FS18};
    font-weight: ${props => props.theme.fontWeights.FW400};
    letter-spacing: 0.2px;
`;


const TextBigBold = styled.p`
    margin: 0;
    font-size: ${props => props.theme.fontSizes.FS18};
    font-weight: ${props => props.theme.fontWeights.FW700};
    letter-spacing: 0.2px;
`;


const TextNormalBold = styled.span`
    font-size: ${props => props.theme.fontSizes.FS16};
    font-weight: ${props => props.theme.fontWeights.FW700};
`;

const TextNormal = styled.span`
    margin: 0;
    font-size: ${props => props.theme.fontSizes.FS16};
    font-weight: ${props => props.theme.fontWeights.FW500};
`;

const TextNormalLight = styled.span`
    margin: 0;
    font-size: ${props => props.theme.fontSizes.FS16};
    font-weight: ${props => props.theme.fontWeights.FW400};
`;



const TextSmallBold = styled.span`
    font-size: ${props => props.theme.fontSizes.FS12};
    font-weight: ${props => props.theme.fontWeights.FW700};
`;

const TextSmall = styled.span`
    margin: 0;
    font-size: ${props => props.theme.fontSizes.FS12};
    font-weight: ${props => props.theme.fontWeights.FW500};
`;

const TextSmallLight = styled.span`
    margin: 0;
    font-size: ${props => props.theme.fontSizes.FS12};
    font-weight: ${props => props.theme.fontWeights.FW400};
`;

export default {
  TextBig,
  TextBigBold,
  TextBigLight,
  TextNormal,
  TextNormalBold,
  TextNormalLight,
  TextSmall,
  TextSmallLight,
  TextSmallBold,
  WelcomeText,
  ErrorText
}