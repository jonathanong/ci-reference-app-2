
export const createSha = async (text) => {
  const response = await fetch(`/api/v1/shas`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text
    })
  })

  if (response.status !== 200) {
    const err = new Error(`Error fetching sha for "${text}"`)
    err.status = response.status
    throw err
  }

  const { sha } = await response.json()
  return sha
}
