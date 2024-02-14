import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import Index from "./routes/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/characters",
        lazy: () => import("./routes/Characters"),
      },
      {
        path: "/characters/:id",
        lazy: () => import("./routes/CharacterView"),
      },
      {
        path: "/relics",
        lazy: () => import("./routes/Relics"),
      },
      {
        path: "/relics/:id",
        lazy: () => import("./routes/RelicView"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
