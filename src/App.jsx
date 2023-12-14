import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import RecipesPage from "./pages/RecipesPage";
import ViewRecipePage from "./pages/ViewRecipePage";
import PublishRecipePage from "./pages/PublishRecipePage";
import RecoverPasswordPage from "./pages/RecoverPasswordPage";
import NotFoundPage from "./pages/NotFoundPage";

import ProtectedRoute from "./components/ProtectedRoute";

import AppContext from "./utils/AppContext";
import { AuthProvider } from "./config/AuthContext";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/login",
        element: <LogInPage />,
    },
    {
        path: "/signup",
        element: <SignUpPage />,
    },
    {
        path: "/recipes",
        element: <RecipesPage />,
    },
    {
        path: "/recipes/:category",
        element: <RecipesPage />,
    },
    {
        path: "/recipe/:recipeId",
        element: <ViewRecipePage />,
    },
    {
        path: "/publish",
        element: (
            <ProtectedRoute>
                <PublishRecipePage />
            </ProtectedRoute>
        ),
    },
    {
        path: "/forgot-password",
        element: <RecoverPasswordPage />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <AppContext>
                    <RouterProvider router={router} />
                </AppContext>
            </AuthProvider>
        </div>
    );
}

export default App;
