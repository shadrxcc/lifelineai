// import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import PageHeader from "../components/PageHeader";

export const ResetPassword = () => {
//   const navigate = useNavigate();

//   const sendLink = (e) => {
//     e.preventDefault();
//     navigate(`/reset-link`);
//   };


  return (
    <div className="p-4">
      <PageHeader
        linkText="Sign in"
        title="Already have an account?"
        url="/login"
      />

      <div className="mt-5">
        <Card
          heading="Reset Password"
          className="flex flex-col items-center"
        >
          <form className="w-full">
            {/*  */}
            <div className='input-group'>
              <label htmlFor='password'>New Password*</label>
              <input
                type='password'
                id='password'
                placeholder='********'
                // value={password}
                // onChange={inputChangeHandler}
              />
            </div>

            <div className='input-group'>
              <label htmlFor='password'>Confirm Password*</label>
              <input
                type='password'
                id='password'
                placeholder='********'
                // value={password}
                // onChange={inputChangeHandler}
              />
            </div>
            {/*  */}

            {/*  */}

            <Button title="Continue" />
          </form>
        </Card>
      </div>
    </div>
  );
};
