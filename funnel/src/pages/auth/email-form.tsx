import { Box, Spacer } from "@chakra-ui/react";
import LabelInput from "../../components/input/label-input";
import CustomButton from "../../components/button/custom-button";
import { updateAuthData } from "../../utils/update-auth-data";
import { useNavigate } from "react-router-dom";
import { onClickNextPage } from "../../utils/move-auth-next";

const EmailForm = () => {
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
          id="email"
          type="email"
          label="이메일을 입력해주세요."
        />
      </Box>
      <Spacer />
      <CustomButton
        text="다음"
        colorScheme="purple"
        size="lg"
        onClickNextMove={() => onClickNextPage({ navigate, path: "/phone" })}
      />
    </Box>
  );
};

export default EmailForm;
