import React from 'react'
import { Header, ProfileForm } from '../../components'
import { useAppSelector } from '../../store/hooks'
import { getUser } from '../../hoc/AuthHoc/store/selector'

export const ProfilePage = () => {
  const user = useAppSelector(getUser)

  return (
    <>
      {!user ? (
        <div>Loading...</div>
      ) : (
        <div className="layout-container">
          <Header />
          <ProfileForm />
        </div>
      )}
    </>
  )
}
