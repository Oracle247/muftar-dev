import Loader from "./components/Loader";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./app/ProtectedRoute";
import "react-loading-skeleton/dist/skeleton.css";
import PageSkeleton from "src/app/Dashboard/pages/Dashboard/components/PageSkeleton";

const SignIn = lazy(() => import("./app/auth/SignIn"));
const SignUp = lazy(() => import("./app/auth/SignUp"));
const ForgetPassword = lazy(() => import("./app/auth/ForgetPassword"));
const ConfrimMail = lazy(() => import("./app/auth/ConfrimMail"));
const NewPassword = lazy(() => import("./app/auth/NewPassword"));
const ResetSuccessful = lazy(() => import("./app/auth/ResetSuccessful"));
const EmailVerification = lazy(() => import("./app/auth/EmailVerification"));
const EmailCode = lazy(() => import("./app/auth/EmailCode"));
const EmailVerifySuccess = lazy(() => import("./app/auth/EmailVerifySuccess"));
const Dashboard = lazy(() => import("./app/Dashboard/main"));
const GoogleCallback = lazy(() => import("./app/auth/GoogleCallback"));

// const Dashboard = lazy(() => import("./app/Dashboard/main/index"));

{
  /* <Route path="/auth/google/callback" component={GoogleCallback} /> */
}

function App() {
  function pages() {
    return [
      {
        path: "/dashboard/*",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      { path: "/", element: <SignIn /> },
      // { path: "/login", element: <SignIn /> },
      { path: "/register", element: <SignUp /> },
      { path: "/forget-password", element: <ForgetPassword /> },
      { path: "/confirm-mail", element: <ConfrimMail /> },
      { path: "/new-password", element: <NewPassword /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/reset-successful", element: <ResetSuccessful /> },
      { path: "/email-verification", element: <EmailVerification /> },
      { path: "/email-code", element: <EmailCode /> },
      { path: "/verify-sucessful", element: <EmailVerifySuccess /> },
      { path: "/auth/google/callback", element: <GoogleCallback /> },

      { path: "*", element: <SignIn /> },
    ].map(({ path, element }, id) => {
      return <Route key={id} path={path} element={element} />;
    });
  }

  return (
    <main className="body-size mx-auto w-full bg-white">
      <Suspense fallback={<Loader />}>
        <Routes>{pages()}</Routes>
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeOnClick
        pauseOnHover
        // theme="colored"
      />
    </main>
  );
}

export default App;
