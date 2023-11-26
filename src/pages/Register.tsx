import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import PageHeader from "../components/PageHeader";
import { BASE_URL, ENDPOINTS } from "../config";

interface RegisterDataType {
  full_name: string;
  email: string;
  password: string;
  preferred_language: string;
}

const Register = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<RegisterDataType>({
    full_name: "",
    email: "",
    password: "",
    preferred_language: "en",
  });

  const { full_name, email, password, preferred_language } = userData;

  const validateInputFields = () =>
    full_name.trim().length > 0 &&
    email.trim().length > 0 &&
    password.length > 0 &&
    preferred_language.trim().length > 0;

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
          `${BASE_URL}/${ENDPOINTS.register}`,
          userData
        );

        // const { data } = res;

        if (res.status === 200 || res.status === 201) {
          console.log(res);
          sessionStorage.setItem("userEmail", email);

          setUserData({
            full_name: "",
            email: "",
            password: "",
            preferred_language: "en",
          });

          navigate("/verify-email");
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    } else console.log("One or more inputs are invalid");
  };

  return (
    <div className="p-4">
      <PageHeader
        linkText="sign in"
        title="Already have an account?"
        url="/login"
      />

      <div className="mt-16 relative">
      <img className="absolute -top-24 right-0 lg:right-28 xl:right-64" src="/heartrate.svg" alt="" />
        <Card className="absolute w-full left-0 right-0"
          heading="Let's get to know you!"
          subHeading="Please provide your personal details so we can personalize your experience."
        >
          <form onSubmit={formSubmitHandler}>
            <div className="input-group">
              <label htmlFor="full_name">
                Enter your name{" "}
                <span className="text-[#F12052]">
                  {" "}
                  <span className="text-[#F12052]">*</span>
                </span>
              </label>
              <input
                type="text"
                id="full_name"
                placeholder="e.g Jane Doe"
                value={full_name}
                onChange={inputChangeHandler}
              />
            </div>
            {/*  */}
            <div className="input-group">
              <label htmlFor="email">
                Enter your email address{" "}
                <span className="text-[#F12052]">*</span>
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
              <label htmlFor="preferred_language">Preferred Language</label>
              <select
                name="preferred_language"
                id="preferred_language"
                defaultValue="en"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    preferred_language: e.target.value,
                  }))
                }
              >
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Espanol</option>
              </select>
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
            <Button title="Get Started" isLoading={isLoading} />
          </form>

          <div
            className={`mt-8 mx-auto flex items-center justify-center gap-2`}
          >
            <div className="h-6 w-6 bg-gray-400 rounded-full"></div>
            <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Register;
