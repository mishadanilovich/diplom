import React from 'react'

export interface Props {
  data: string
  onChange: React.Dispatch<React.SetStateAction<string>>
}
