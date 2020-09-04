import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { LoginButton } from './LoginButton'
import { LogoutButton } from './LogoutButton'
import axios from 'axios'

export const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

  const hello = async () => {
    const token = await getAccessTokenSilently({
      audience: 'https://dev-7t102zrf.us.auth0.com/api/v2/',
      scope: 'read:current_user',
    })
    const { data } = await axios({
      url: 'http://localhost:4000/graphql',
      method: 'post',
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: {
        query: `
          query {
            hello
          }
        `,
      },
    })
    console.log(token)
    console.log(data)
  }

  isAuthenticated && hello()

  if(user) {
    console.log(user)
  }

  return isAuthenticated ? (
    <div>
      <LogoutButton />
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  ) : (
    <LoginButton />
  )
}