import React from 'react'
import { Header, Loader, ProfileForm } from '../../components'
import { useAppSelector } from '../../store/hooks'
import { getUser } from '../../hoc/AuthHoc/store/selector'
import { User } from '../../hoc/AuthHoc/store/types'

export const ProfilePage = () => {
  const user = useAppSelector<User>(getUser)

  return (
    <>
      {!user ? (
        <Loader />
      ) : (
        <div className="layout-container">
          <Header />
          <ProfileForm />
        </div>
      )}
    </>
  )
}
