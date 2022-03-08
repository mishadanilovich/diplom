export interface Items {
  value: any
  display: string
}

interface FormikProps {
  errors: any
  touched: any
}

export interface Props {
  onChange: (value: Items) => void
  items: Items[] | null
  label: string
  defaultPlaceholder?: string
  value?: string
  formikProps: FormikProps
  name: string
}
