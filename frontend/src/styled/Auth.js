import styled from 'styled-components';

const AuthContainer = styled.div`
  width: 100%;
  margin: auto;
  padding: 16px;
  border: 1px solid ${props => props.theme.colors.BORDER};
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 98%;
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${props => props.theme.colors.PRIMARY};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const RedirectLink = styled.p`
  margin-top: 8px;
  text-align: center;

  a {
    color: #1e90ff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default {
  AuthContainer,
  FormButton,
  FormInput,
  FormLabel,
  RedirectLink
}