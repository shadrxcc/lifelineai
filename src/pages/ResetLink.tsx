import Card from "../components/Card";
import PageHeader from "../components/PageHeader";

export const ResetLink = () => {
  const email = sessionStorage.getItem('userEmail')
  return (
    <div className="p-4">
      <PageHeader
        linkText='Sign in'
        title='Already have an account?'
        url='/login'
      />

      <div className="mt-16 relative">
      <img className="absolute -top-24 right-0 lg:right-28 xl:right-64" src="/heartrate.svg" alt="" />
        <Card className="flex absolute w-full left-0 right-0 flex-col gap-y-[48px] items-center">
          <img src="/email.svg" alt="" />
          <div className="flex flex-col gap-y-3">
            <h3 className="text-2xl font-semibold leading-8 text-center">
            A password reset link has been sent to {email}.
            </h3>
            <div className="flex flex-col items-center text-center gap-y-1">
              <p className="text-[#8C8C8C] text-base leading-6">
                Didn’t get any mail? Check your spam folder{" "}
              </p>
              <span>Or</span>
              <div className="flex gradient-text text-xs font-semibold  gap-x-5">
                <p>Resend Link</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
