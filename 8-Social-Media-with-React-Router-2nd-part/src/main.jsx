import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateForm from './component/CreateForm.jsx'

const router = createBrowserRouter([
  {path:'/', element : <App/>},
  {path : 'create-form' , element : <CreateForm/>}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
