import { RegisterForm } from "@/app/register/components/RegisterForm";
import { Typography } from "@/components/Typography";
import { TYPOGRAPHY_VARIANTS } from "@/components/Typography/constants";

const RegisterPage = () => (
  <div className="page-container">
    <div className="text-center mb-8">
      <Typography text="Sign Up" variant={TYPOGRAPHY_VARIANTS.H2} />

      <Typography
        className="mt-2"
        text=" Nice to meet you! Enter your details to register."
        variant={TYPOGRAPHY_VARIANTS.P}
      />
    </div>

    <RegisterForm />
  </div>
);

export default RegisterPage;
