import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { SignInForm } from "./components/SignInForm";
import { SignUpForm } from "./components/SingUpForm";
import { Main } from "./components/Main";
import { ProtectedRoute } from "./ui/ProtectedRoute";

const queryClient = new QueryClient();
export default function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<SignInForm />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route
            path="/main"
            element={
              <ProtectedRoute>
                <Main />
              </ProtectedRoute>
            }
          />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}
