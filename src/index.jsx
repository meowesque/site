/* @refresh reload */
import { lazy } from "solid-js";
import { render } from 'solid-js/web'
import { HashRouter } from '@solidjs/router'

const routes = [
  {
    path: "/",
    component: lazy(() => import("./routes/index.jsx")),
  },
  {
    path: "/posts/quic-and-actors-with-tokio",
    component: lazy(() => import("./routes/posts/quic-and-actors-with-tokio.jsx")),
  }
]

render(
  () => <HashRouter>{routes}</HashRouter>,
  document.getElementById('root')
)
