import { RegisterForm } from "@/app/register/page-components/RegisterForm";

import { Typography } from "@/components/Typography";
import { TypographyVariants } from "@/components/Typography/constants";

const RegisterPage = () => (
  <div className="page-container">
    <div className="text-center mb-8">
      <Typography text="Sign Up" variant={TypographyVariants.H2} />

      <Typography
        className="mt-2"
        text=" Nice to meet you! Enter your details to register."
        variant={TypographyVariants.P}
      />
    </div>

    <RegisterForm />
  </div>
);

export default RegisterPage;
