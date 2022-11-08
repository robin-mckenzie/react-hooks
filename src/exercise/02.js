// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function useLocalStorageState(key, defaultValue = '') {
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key) || defaultValue,
  )
  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState]
}
function Greeting({initialName = 'asdf'}) {
  const [name, setName] = useLocalStorageState('name', initialName)
  console.dir(name)

  const initialJsonData = {
    one: '1 is the number',
    two: '2 is the number',
  }

  // eslint-disable-next-line no-unused-vars
  const [jsonData, setJsonData] = useLocalStorageState(
    'jsonData',
    initialJsonData,
  )
  console.dir(jsonData)

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
