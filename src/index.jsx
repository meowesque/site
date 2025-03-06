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
  },
  {
    path: "/posts/clang-efficient-source-tracking",
    component: lazy(() => import("./routes/posts/clang-efficient-source-tracking.jsx")),
  }
]

render(
  () => <HashRouter>{routes}</HashRouter>,
  document.getElementById('root')
)
