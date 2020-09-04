import React, { FC } from 'react'
import { useQuery, gql } from '@apollo/client'

const helloQuery = gql`
  query {
    allUsers {
      email
      name
    }
  }
`

export const Hello: FC = () => {
  const { data, loading } = useQuery(helloQuery)
  console.log(data)

  if (loading) {
    return <h1>loading</h1>
  }

  return (
    <div>
      {data?.allUsers.map((user: User, index: number) => (
        <div key={index}>{user.email}</div>
      ))}
    </div>
  )
}

type User = {
  email: string
  name: string
}
