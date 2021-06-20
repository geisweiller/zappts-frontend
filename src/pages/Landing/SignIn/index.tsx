import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as EmailValidator from 'email-validator';
import { Input, Button, Banner, GoogleButton, Separator, Logo } from '../../../components';
import {
  Container,
  Content,
  WelcomeMessage,
  ForgotPassword,
  Footer,
  RightContainer,
  LeftContainer,
  Wrapper,
} from './styles';
import { useUserContext } from '../../../hooks/userContext';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasError, setHasError] = useState(false);
  const { signIn } = useUserContext();
  async function handleSigIn() {
    if (!email) {
      setEmailError('E-mail field can not be empty');
      setHasError(true);
    }
    if (!EmailValidator.validate(email)) {
      setEmailError('Please check your email');
      setHasError(true);
    }
    if (!password) {
      setPasswordError('Password field can not be empty');
      setHasError(true);
    }
    if (EmailValidator.validate(email) && password) {
      setEmailError('');
      setPasswordError('');
      await signIn({ email, password });
    }
  }
  return (
    <Wrapper>
      <LeftContainer>
        <Banner />
      </LeftContainer>
      <RightContainer>
        <Container>
          <Logo logo="Invision" />
          <Content>
            <WelcomeMessage>Welcome to Invision</WelcomeMessage>
            <div className="form">
              <Input
                label="Users name or  Email"
                type="email"
                placeholder="Enter your username or email"
                hasError={hasError}
                onChange={(event) => setEmail(event.target.value)}
                emailError={emailError}
              />
              <Input
                label="Password"
                type="password"
                placeholder="*************"
                hasError={hasError}
                onChange={(event) => setPassword(event.target.value)}
                passwordError={passwordError}
              />
              <ForgotPassword href="/">Forgot password?</ForgotPassword>
              <Button onClick={handleSigIn}>Sign in</Button>
            </div>
            <Separator />
            <GoogleButton text="Sign in with Google" />
            <Footer>
              <p>
                New <strong>Invision?</strong>
              </p>
              <Link to="/signup">Create Account</Link>
            </Footer>
          </Content>
        </Container>
      </RightContainer>
    </Wrapper>
  );
}
