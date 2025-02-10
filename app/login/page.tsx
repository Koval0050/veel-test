import { LoginForm } from "@/app/login/page-components/LoginForm";

import { Typography } from "@/components/Typography";
import { TypographyVariants } from "@/components/Typography/constants";

const LoginPage = () => (
  <div className="page-container">
    <div className="text-center mb-8">
      <Typography text="Login" variant={TypographyVariants.H2} />

      <Typography
        className="mt-2"
        text="Welcome back! Please enter your details to login."
        variant={TypographyVariants.P}
      />
    </div>

    <LoginForm />
  </div>
);

export default LoginPage;
