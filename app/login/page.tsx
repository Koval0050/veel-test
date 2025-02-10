import { LoginForm } from "@/app/login/page-components/LoginForm";

import { Typography } from "@/components/Typography";
import { TypographyVariants } from "@/components/Typography/constants";

const LoginPage = () => (
  <div className="page-container">
    <div className="text-center mb-8">
      <Typography variant={TypographyVariants.H2}>Login</Typography>

      <Typography variant={TypographyVariants.P} className="mt-2">
        Welcome back! Please enter your details to login.
      </Typography>
    </div>

    <LoginForm />
  </div>
);

export default LoginPage;
