import { Box, Spacer } from "@chakra-ui/react";
import LabelInput from "../../components/input/label-input";
import CustomButton from "../../components/button/custom-button";
import { updateAuthData } from "../../utils/update-auth-data";
import { onClickNextPage } from "../../utils/move-auth-next";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      minH="100vh"
      paddingTop="20"
      paddingBottom="6"
    >
      <Box display="flex" flexDirection="column" gap="5rem">
        <LabelInput
          onChange={updateAuthData}
          id="id"
          label="아이디를 입력해주세요."
        />
        <LabelInput
          onChange={updateAuthData}
          id="pw"
          type="password"
          label="비밀번호를 입력해주세요."
        />
      </Box>
      <Spacer />
      <CustomButton
        text="다음"
        onClickNextMove={() => onClickNextPage({ navigate, path: "/email" })}
        colorScheme="purple"
        size="lg"
      />
    </Box>
  );
};

export default LoginForm;
