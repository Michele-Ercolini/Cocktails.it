import './App.css'
import { RouterProvider } from 'react-router-dom'
import { DarkContextProvider } from './Contexts'

function App() {

  return (
    <>
      <DarkContextProvider>
        <RouterProvider router={router} />
      </DarkContextProvider>
    </>
  )
}

export default App
