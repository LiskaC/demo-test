import React, { useState } from 'react'
import { fetchUser } from "../api/api"
import { Button } from "../components/Button"

/**
 * A UI view component for users to log in
 */
export const Login = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  async function setUserData() {
    const data = await fetchUser()
    setUsername(data.username)
    setPassword(data.password)
  }

  return <div>
    <Button onClick={setUserData} text='This is a button component' />
    {username && <p>The username is {username}</p>}
    {username && <p>The password is {password}</p>}
  </div>
}
