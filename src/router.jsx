import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import Layout from "./Components/Layout/Layout";
import Homepage from "./Views/Homepage";
import ErrorView from "./Views/ErrorView";

const router = createBrowserRouter([
    {
        path: routes.home,
        element: <Layout />,
        children: [
            {
                path: routes.home,
                element: <Homepage />
            },
            {
                path: routes.error,
                element: <ErrorView />
            }
        ]
    }
])

export default router;