import { LoginForm } from "@/components/forms/LoginForm";

const LoginPage = () => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-teal-500">
    <div className="text-center text-white mb-8">
      <h2 className="text-4xl font-extrabold">Login</h2>

      <p className="text-xl mt-2">
        Welcome back! Please enter your details to login.
      </p>
    </div>

    <LoginForm />
  </div>
);

export default LoginPage;
