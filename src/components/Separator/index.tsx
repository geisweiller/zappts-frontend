import React from 'react'
import { CustomSeparator, Line, Text } from './styles'

export default function Separator() {
  return (
    <CustomSeparator>
      <Line />
        <Text>
          Or
        </Text>
      <Line />
    </CustomSeparator>
  )
}
