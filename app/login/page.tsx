import { LoginForm } from "@/app/login/components/LoginForm";
import { Typography } from "@/components/Typography";
import { TYPOGRAPHY_VARIANTS } from "@/components/Typography/constants";

const LoginPage = () => (
  <div className="page-container">
    <div className="text-center mb-8">
      <Typography text="Login" variant={TYPOGRAPHY_VARIANTS.H2} />

      <Typography
        className="mt-2"
        text="Welcome back! Please enter your details to login."
        variant={TYPOGRAPHY_VARIANTS.P}
      />
    </div>

    <LoginForm />
  </div>
);

export default LoginPage;
