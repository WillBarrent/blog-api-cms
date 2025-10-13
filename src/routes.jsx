import App from "./App";

const routes = [
    {
        path: "/",
        element: <App />
    },
    {
        path: "/login",
        element: <App />
    },
    {
        path: "/create-blog",
        element: <App />
    },
    {
        path: "/update-blog/:postId",
        element: <App />
    },
    {
        path: "/posts/:postId",
        element: <App />
    },
];

export default routes;