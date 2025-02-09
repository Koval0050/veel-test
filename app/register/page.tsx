import { RegisterForm } from "@/components/forms/RegisterForm";

const RegisterPage = () => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-teal-500">
    <div className="text-center text-white mb-8">
      <h2 className="text-4xl font-extrabold">Sign Up</h2>

      <p className="text-xl mt-2">
        Nice to meet you! Enter your details to register.
      </p>
    </div>

    <RegisterForm />
  </div>
);

export default RegisterPage;
