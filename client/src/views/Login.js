import { fetchUser } from "../api/api"
import { Button } from "../components/Button"


/**
 * A UI view component for users to log in
 */
export const Login = () => {
  return <div>
  <Button onClick={() => alert('hi!')} text='This is a button component' />
  <button onClick={fetchUser}>Press this button to get the user</button>
  </div>
}
