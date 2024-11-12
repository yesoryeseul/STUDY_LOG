import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import IdPwForm from "./components/id-pw-form";
import EmailForm from "./components/email-form";
import PhoneForm from "./components/phone-form";
import CompleteAuth from "./components/complete-auth";
import { RegisterData } from "../../type/auth-register-data";
import { useSearchParams } from "react-router-dom";

type SignUpStep = "idPw" | "email" | "phone" | "complete";
const STEPS = ["idPw", "email", "phone", "complete"];

const SignUpPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const step = searchParams.get("step") || "idPw";
  const [registerData, setRegisterData] = useState<RegisterData>({});
  const isValidStep = (step: string): step is SignUpStep => {
    return STEPS.includes(step);
  };
  const [signUpStep, setSignUpStep] = useState<SignUpStep>(
    isValidStep(step) ? step : "idPw"
  );

  useEffect(() => {
    if (isValidStep(step) && step !== signUpStep) {
      setSignUpStep(step);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  useEffect(() => {
    if (step !== signUpStep) {
      setSearchParams({ step: signUpStep });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signUpStep]);

  return (
    <Box display="flex" flexDirection="column" width="100%" minH="100vh">
      {signUpStep === "idPw" && (
        <IdPwForm
          onClickNext={(data: Pick<RegisterData, "id" | "pw">) => {
            setRegisterData((prev) => ({ ...prev, ...data }));
            setSignUpStep("email");
          }}
        />
      )}
      {signUpStep === "email" && (
        <EmailForm
          onClickNext={(data: Pick<RegisterData, "email">) => {
            setRegisterData((prev) => ({ ...prev, ...data }));
            setSignUpStep("phone");
          }}
        />
      )}
      {signUpStep === "phone" && (
        <PhoneForm
          onClickNext={async (data: Pick<RegisterData, "phone">) => {
            setRegisterData((prev) => ({ ...prev, ...data }));

            // await fetch("api", {
            //   method: "POST",
            //   headers: {
            //     "Content-Type": "application/json",
            //   },
            //   body: JSON.stringify(registerData),
            // });
            await console.log("api 호출");

            setSignUpStep("complete");
          }}
        />
      )}
      {signUpStep === "complete" && (
        <CompleteAuth registerData={registerData} />
      )}
    </Box>
  );
};

export default SignUpPage;
