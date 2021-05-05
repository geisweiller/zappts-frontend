import React from 'react'
import { CustomLogo } from './styles'

interface LogoProps {
  logo: string;
}

export default function Logo({logo} : LogoProps) {
  return (
    <CustomLogo>{logo}</CustomLogo>
  )
}
