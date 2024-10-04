import { Box, Spacer } from "@chakra-ui/react";
import LabelInput from "../../components/input/label-input";
import CustomButton from "../../components/button/custom-button";
import { updateAuthData } from "../../utils/update-auth-data";
import { onClickNextPage } from "../../utils/move-auth-next";
import { useNavigate } from "react-router-dom";

const PhoneForm = () => {
  const navigate = useNavigate();
  const onClickNextMoveAndPostAuthInfo = () => {
    onClickNextPage({
      navigate,
      path: "/complete",
      // postData: authData,
      // apiUrl: "/api",
    });
  };
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
          id="phone"
          label="휴대폰 번호를 입력해주세요."
        />
      </Box>
      <Spacer />
      <CustomButton
        text="다음"
        onClickNextMove={onClickNextMoveAndPostAuthInfo}
        colorScheme="purple"
        size="lg"
      />
    </Box>
  );
};

export default PhoneForm;
