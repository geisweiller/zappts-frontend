import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as EmailValidator from 'email-validator';
import { Input, Button, Banner, GoogleButton, Separator, Logo } from '../../../components'
import { Container, Content, WelcomeMessage, Footer, RightContainer, LeftContainer, Wrapper } from './styles'

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasError, setHasError] = useState(false);

  function handleSignUp() {
    if(!name) {
      setNameError('Name field can not me empty');
    }
    if(!email) {
      setEmailError('E-mail field can not be empty')
      setHasError(true);
    } else if (!EmailValidator.validate(email)) {
      setEmailError('Please check your email')
      setHasError(true);
    }
    if(!password) {
      setPasswordError('Password field can not be empty')
      setHasError(true);
    }

    //Corpo da requisição para o servidor com os dados de Signup
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
            <WelcomeMessage>Getting Started</WelcomeMessage>
            <form>
              <Input 
                label="Full Name" 
                placeholder="Enter your username or email" 
                nameError={nameError}
                hasError={hasError}
                onChange={event => setName(event.target.value)}
              />
              <Input 
                label="Users name or Email"
                type="email"
                placeholder="Enter your username or email" 
                emailError={emailError}
                hasError={hasError}
                onChange={event => setEmail(event.target.value)}
              />
              <Input 
                label="Create Password" 
                type="password"
                placeholder="***********" 
                passwordError={passwordError}
                hasError={hasError}
                onChange={event => setPassword(event.target.value)}
              />
              <Button onClick={handleSignUp}>Sign up</Button>
            </form>
            <Separator/>
            <GoogleButton text="Sign up with Google" />
            <Footer>
              <p>By signing up, you agree to <strong>Invision</strong></p>
              <div>
                <Link to="/terms">Terms and conditions</Link>
                <p>and</p>
                <Link to="/privacypolicy">Privacy Policy</Link> 
              </div>
              <div className="hasAccount">
                <p>Already on Invision?</p>
                <Link to="/">Sign In</Link>
              </div>
            </Footer>
          </Content>
        </Container>
      </RightContainer>
    </Wrapper>
  )
}
