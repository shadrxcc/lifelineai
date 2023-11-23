import Card from "../components/Card";
import PageHeader from "../components/PageHeader";

export const ResetLink = () => {
  return (
    <div className="p-4">
      <PageHeader
        linkText='Sign in'
        title='Already have an account?'
        url='/login'
      />

      <div className="mt-5">
        <Card className="flex flex-col gap-y-[48px] items-center">
          <img src="/email.svg" alt="" />
          <div className="flex flex-col gap-y-3">
            <h3 className="text-2xl font-semibold leading-8 text-center">
            A password reset link has been sent to Janedoe@gmail.com.
            </h3>
            <div className="flex flex-col items-center text-center gap-y-1">
              <p className="text-[#8C8C8C] text-base leading-6">
                Didn’t get any mail? Check your spam folder{" "}
              </p>
              <span>Or</span>
              <div className="flex gradient-text text-xs font-semibold  gap-x-5">
                <p>Resend Link</p>
                <p>/</p>
                <p>Change Email address</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
