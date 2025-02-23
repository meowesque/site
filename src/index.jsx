/* @refresh reload */
import { lazy } from "solid-js";
import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'

const routes = [
  {
    path: "/",
    component: lazy(() => import("./routes/index.jsx")),
  },
]

render(
  () => <Router>{routes}</Router>,
  document.getElementById('root')
)
