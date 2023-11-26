import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import PageHeader from "../components/PageHeader";

export const ForgotPassword = () => {
  const navigate = useNavigate();

  const sendLink = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/reset-link`);
  };

  return (
    <div className="p-4">
      <PageHeader
        linkText="Sign in"
        title="Already have an account?"
        url="/login"
      />

      <div className="mt-16 relative">
      <img className="absolute -top-24 right-64" src="/heartrate.svg" alt="" />
        <Card
          heading="Reset Password"
          subHeading="Enter the email address associated with this account, we will send you a link to reset your password."
          className="flex absolute w-full left-0 right-0 flex-col items-center"
        >
          <form onSubmit={sendLink} className="w-full">
            {/*  */}
            <div className="input-group">
              <label htmlFor="email">Email address*</label>
              <input
                type="email"
                id="email"
                placeholder="e.g janedoe@gmail.com"
              />
            </div>
            {/*  */}

            {/*  */}

            <Button title="Continue" />
            <div className="mt-4 flex items-center justify-center">
              <Link
                to="/login"
                className="block font-semibold text-sm text-center mt-4 text-primary"
              >
                Return to Sign in
              </Link>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};
