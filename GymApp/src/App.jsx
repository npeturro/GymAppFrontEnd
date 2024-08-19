import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './pages/Index';
import './App.css'
import MainLayout from './pages/layout/MainLayout';
import NewRutine from './pages/NewRutine';
import Rutines from './pages/Rutines';
import RutinesView from './sections/Rutines/RutinesView';
import { Toaster } from 'sonner';

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
    {
      path: "/rutines/view",
      element: (
        <MainLayout>
          <RutinesView />
        </MainLayout>
      )
    },
  ]);

  return (
    <div className="bg-gray-100 w-full min-h-screen">
      <Toaster richColors/>
      {<RouterProvider router={router} />}
    </div>
  )
}

export default App
