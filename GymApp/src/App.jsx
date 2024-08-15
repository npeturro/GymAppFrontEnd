import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './pages/Index';
import './App.css'
import MainLayout from './pages/layout/MainLayout';
import NewRutine from './pages/NewRutine';
import Rutines from './pages/Rutines';
import { Toaster } from 'sonner'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout>
          <Index />
        </MainLayout>
      )
    },
    {
      path: "/newrutine",
      element: (
        <MainLayout>
          <NewRutine />
        </MainLayout>
      )
    },
    {
      path: "/rutines",
      element: (
        <MainLayout>
          <Rutines />
        </MainLayout>
      )
    },
  ]);

  return (
    <div>
      <Toaster position="top-center" />
      {<RouterProvider router={router} />}
    </div>
  )
}

export default App
