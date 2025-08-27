// App.jsx
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:id" element={<Project />} />
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
