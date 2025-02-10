import { RegisterForm } from "@/app/register/page-components/RegisterForm";

import { Typography } from "@/components/Typography";
import { TypographyVariants } from "@/components/Typography/constants";

const RegisterPage = () => (
  <div className="page-container">
    <div className="text-center mb-8">
      <Typography variant={TypographyVariants.H2}>Sign Up</Typography>

      <Typography variant={TypographyVariants.P} className="mt-2">
        Nice to meet you! Enter your details to register.
      </Typography>
    </div>

    <RegisterForm />
  </div>
);

export default RegisterPage;
