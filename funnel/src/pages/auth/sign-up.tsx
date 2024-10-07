import { Box } from "@chakra-ui/react";
import { useState } from "react";
import IdPwForm from "./components/id-pw-form";
import EmailForm from "./components/email-form";
import PhoneForm from "./components/phone-form";
import CompleteAuth from "./components/complete-auth";
import { RegisterData } from "../../type/auth-register-data-types";
import useFunnel from "../../hooks/useFunnel";
import { AUTH_STEPS } from "../../const/auth-steps";

const SignUpPage = () => {
  const [FunnelComp, setStep] = useFunnel(AUTH_STEPS, "idPw");
  const [registerData, setRegisterData] = useState<RegisterData>({});

  return (
    <Box display="flex" flexDirection="column" width="100%" minH="100vh">
      <FunnelComp>
        <FunnelComp.Step name="idPw">
          <IdPwForm
            onClickNext={(data: Pick<RegisterData, "id" | "pw">) => {
              setRegisterData((prev) => ({ ...prev, ...data }));
              setStep("email");
            }}
          />
        </FunnelComp.Step>
        <FunnelComp.Step name="email">
          <EmailForm
            onClickNext={(data: Pick<RegisterData, "email">) => {
              setRegisterData((prev) => ({ ...prev, ...data }));
              setStep("phone");
            }}
          />
        </FunnelComp.Step>
        <FunnelComp.Step name="phone">
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

              setStep("complete");
            }}
          />
        </FunnelComp.Step>
        <FunnelComp.Step name="complete">
          <CompleteAuth registerData={registerData} />
        </FunnelComp.Step>
      </FunnelComp>
    </Box>
  );
};

export default SignUpPage;
