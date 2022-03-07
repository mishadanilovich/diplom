import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import * as Lockr from 'lockr'
import { StyledInput } from '../StyledField'
import { StyledProfileContainer } from './styles'
import { StyledForm } from '../AuthForm/styles'
import * as naming from '../../constants'
import { Button } from '../Button'
import { validationSchema } from './validationSchema'
// import Select from '../Select'
import { Teacher } from '../../hoc/AuthHoc/store/types'
import { Teachers } from './types'

export const ProfileForm = () => {
  const [teachers, setTeachers] = useState<Teachers[] | null>(null)
  console.log(teachers)

  useEffect(() => {
    const tempTeachers: Teacher[] | null = Lockr.get('users').teachers
    if (tempTeachers)
      setTeachers(
        tempTeachers.map((el) => ({ value: el.login, display: el.login }))
      )
  }, [])

  const handleSubmit = () => {
    console.log('Submit')
  }

  return (
    <StyledProfileContainer>
      <Formik
        initialValues={{
          username: '',
          password: '',
          teacher: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, setFieldValue }) => (
          <StyledForm>
            <StyledInput
              id="password"
              name="password"
              textLabel={naming.PASSWORD_LABEL}
              type="password"
              isError={!!errors.password && !!touched.password}
              errorText={errors.password}
            />
            <input
              style={{ display: 'none' }}
              type="text"
              name="roles"
              id="roles"
            />
            {/* <Select*/}
            {/*  onChange={({ value }) => setFieldValue('teacher', value)}*/}
            {/*  label={naming.ROLE_LABEL}*/}
            {/*  items={teachers}*/}
            {/* />*/}
            <Button
              type="submit"
              disabled={!(Object.keys(errors).length === 0)}
            >
              {naming.BUTTON_READY}
            </Button>
          </StyledForm>
        )}
      </Formik>
    </StyledProfileContainer>
  )
}
