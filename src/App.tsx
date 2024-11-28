import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import RootLayout from './layout/RootLayout.tsx'
import HomeLayout from './layout/HomeLayout.tsx'
import TopicPage from "./pages/TopicPage.tsx";
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
         <Route path='Java/' element={<HomeLayout />} >
            <Route path=":topic" element={<TopicPage />} />
         </Route>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}