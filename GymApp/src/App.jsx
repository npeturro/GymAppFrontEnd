import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './pages/Index';
import './App.css'
import MainLayout from './pages/layout/MainLayout';

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
  ]);

  return (
    <div>
      {<RouterProvider router={router} />}
    </div>
  )
}

export default App
