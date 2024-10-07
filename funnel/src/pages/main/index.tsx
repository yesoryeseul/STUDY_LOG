import { Box, Heading, Spacer } from "@chakra-ui/react";
import CustomButton from "../../components/button/custom-button";
import { onClickNextPage } from "../../utils/move-auth-next";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
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
      <Heading fontWeight="900" color="purple.500">
        회원가입 스타트
      </Heading>
      <Spacer />
      <CustomButton
        text="다음"
        onClickNextMove={() =>
          onClickNextPage({ navigate, path: "/signup?step=idPw" })
        }
        colorScheme="purple"
        size="lg"
      />
    </Box>
  );
};

export default MainPage;
