import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import { BASE_URL, ENDPOINTS } from "../config";
import PageHeader from "../components/PageHeader";
import { LoginDataType } from "../@types/index.d";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const authContext = useAuth();

  // Check if authContext is defined
  if (!authContext) {
    // Handle the case where authContext is undefined
    return null;
  }

  const { login } = authContext;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<LoginDataType>({
    email: "",
    password: "",
  });

  const { email, password } = userData;

  const validateInputFields = () =>
    email.trim().length > 0 && password.length > 0;

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const formSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateInputFields()) {
      setIsLoading(true);

      try {
        const res = await axios.post(
          `${BASE_URL}/${ENDPOINTS.login}`,
          userData
        );

        // const { data } = res;

        // console.log(data);

        if (res.status === 200 || res.status === 201) {
          const { user_info } = res.data;

          login(user_info);
          console.log(res.data.user_info);

          localStorage.setItem("userInfo", JSON.stringify(user_info));
          setUserData({
            email: "",
            password: "",
          });
          navigate("/dashboard");
        }

        setIsLoading(false);
      } catch (error: any) {
        console.log(error);

        toast.error(error.response.data.message);

        setIsLoading(false);
      }
    } else toast.error("One or more inputs are invalid");
  };

  return (
    <div className="p-4">
      <PageHeader linkText="Sign up" title="Don't have an account?" url="/" />
      <div className="mt-16 relative bg-center">
      <img className="absolute -top-24 right-0 lg:right-28 xl:right-64" src="/heartrate.svg" alt="" />
        <Card
          className="absolute w-full left-0 right-0"
          heading="Welcome Back!"
          subHeading="Sign in to your account"
        >
          <form onSubmit={formSubmitHandler}>
            {/*  */}
            <div className="input-group">
              <label htmlFor="email">
                Email address <span className="text-[#F12052]">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="e.g janedoe@gmail.com"
                value={email}
                onChange={inputChangeHandler}
              />
            </div>
            {/*  */}
            <div className="input-group">
              <label htmlFor="password">
                Password <span className="text-[#F12052]">*</span>
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                value={password}
                onChange={inputChangeHandler}
              />
            </div>
            {/*  */}
            <div className="mt-5 flex items-center justify-between">
              <div className="flex gap-x-1.5 items-center">
                <input type="checkbox" name="remember" id="remember" />
                <p className="text-sm">Remember me</p>
              </div>
              <Link
                to="/forgot-password"
                className="block text-sm text-center text-primary"
              >
                Forgot Password?
              </Link>
            </div>
            <Button title="Continue" isLoading={isLoading} />
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
