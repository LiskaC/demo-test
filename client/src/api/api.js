/**
 * Function to return the username and password from the backend
 * @returns {
 * username
 * password
 * }
 */
export async function fetchUser() {
  try {
    const res = await fetch('http://localhost:3000', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return await res.json()
  } catch (e) {
    console.error(e)
  }
}
