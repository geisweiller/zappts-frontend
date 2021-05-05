import React from 'react'
import { google } from '../../assets'
import { Button } from './styles'

interface GoogleButtonProps {
  text: string;
}

export default function GoogleButton({text} : GoogleButtonProps) {
  return (
    <Button>
      <img src={google} alt="google"/>
      <p>{text}</p>
    </Button>
  )
}
