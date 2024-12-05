import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <>
      <SignIn fallbackRedirectUrl={'/'}  />
    </>
  );
};

export default SignInPage;
