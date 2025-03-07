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
  },
  {
    path: "/reading-lists/scheme-implementation-details",
    component: lazy(() => import("./routes/reading-lists/scheme-implementation-details.jsx")),
  },
  {
    path: "/reading-lists/category-theory",
    component: lazy(() => import("./routes/reading-lists/category-theory.jsx")),
  },
  {
    path: "/reading-lists/type-theory",
    component: lazy(() => import("./routes/reading-lists/type-theory.jsx")),
  },
  {
    path: "/reading-lists/spj-paper-trail",
    component: lazy(() => import("./routes/reading-lists/spj-paper-trail.jsx")),
  }
]

render(
  () => <HashRouter>{routes}</HashRouter>,
  document.getElementById('root')
)
