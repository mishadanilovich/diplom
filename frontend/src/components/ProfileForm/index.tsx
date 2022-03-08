import React, { useEffect, useMemo, useState } from 'react'
import { Formik, FormikProps } from 'formik'
import * as Lockr from 'lockr'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { StyledInput } from '../StyledInput'
import {
  StyledProfileContainer,
  SubmitButton,
  StyledForm,
  StyledToastContainer,
} from './styles'
import * as naming from '../../constants'
import { validationSchema, validate } from './validation'
import { Teachers, Values } from './types'
import { InputSelect } from '../InputSelect'
import { Done } from '../../icons'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getLoading, getUser } from '../../hoc/AuthHoc/store/selector'
import { Avatar } from '../Avatar'
import { updateUser } from './store/actions'
import { Teacher, User, Users } from '../../hoc/AuthHoc/store/types'

export const ProfileForm = () => {
  const [teachers, setTeachers] = useState<Teachers[]>([])
  const isLoading = useAppSelector(getLoading)
  const user = useAppSelector<User>(getUser)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const tempTeachers: Teacher[] =
      Lockr.get<Users | null>('users')?.teachers || []
    if (tempTeachers)
      setTeachers(
        tempTeachers.map((el) => ({ value: el.login, display: el.login }))
      )
  }, [])

  useEffect(() => {
    if (!(user.firstName && user.secondName))
      toast.info(naming.FIRST_SIGN_IN, { position: 'top-right' })
  }, [])

  const initialValues = useMemo<Values>(
    () => ({
      avatarURL: user.avatarURL || '',
      firstName: user.firstName || '',
      secondName: user.secondName || '',
      password: '',
      teacher: user.teacher || '',
      role: user.role || '',
    }),
    []
  )

  const handleSubmit = (values: Values) => {
    if (!values.password) {
      // eslint-disable-next-line no-unused-vars
      const { password, ...data } = values
      values = data
    }
    dispatch(updateUser({ ...user, ...values }))
  }

  return (
    <StyledProfileContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validate={(values) => validate(values)}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, setFieldValue }: FormikProps<Values>) => (
          <StyledForm>
            <Avatar
              imgUrl={values.avatarURL}
              firstName={values.firstName}
              lastName={values.secondName}
            />
            <StyledInput
              id="avatarURL"
              name="avatarURL"
              textLabel={naming.AVATAR_URL}
              type="text"
              isError={!!errors.avatarURL && !!touched.avatarURL}
              errorText={errors.avatarURL}
            />
            <StyledInput
              id="firstName"
              name="firstName"
              textLabel={naming.FIRST_NAME}
              type="text"
              isError={!!errors.firstName && !!touched.firstName}
              errorText={errors.firstName}
            />
            <StyledInput
              id="secondName"
              name="secondName"
              textLabel={naming.SECOND_NAME}
              type="text"
              isError={!!errors.secondName && !!touched.secondName}
              errorText={errors.secondName}
            />
            <StyledInput
              id="password"
              name="password"
              textLabel={naming.PASSWORD_LABEL}
              type="password"
              isError={!!errors.password && !!touched.password}
              errorText={errors.password}
            />
            {user?.role === naming.STUDENT && (
              <>
                <input
                  style={{ display: 'none' }}
                  type="text"
                  name="teacher"
                  id="teacher"
                />
                <InputSelect
                  onChange={({ value }) => setFieldValue('teacher', value)}
                  label={naming.TEACHER_LABEL}
                  items={teachers}
                  defaultPlaceholder={naming.NO_TEACHERS}
                  value={values.teacher}
                  formikProps={{ errors, touched }}
                  name="teacher"
                />
              </>
            )}
            <SubmitButton
              type="submit"
              isLoading={isLoading}
              disabled={!(Object.keys(errors).length === 0)}
            >
              {naming.BUTTON_READY}
              <Done />
            </SubmitButton>
          </StyledForm>
        )}
      </Formik>
      <StyledToastContainer position="top-left" autoClose={2400} />
    </StyledProfileContainer>
  )
}
