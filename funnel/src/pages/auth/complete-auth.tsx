import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { RegisterData } from "../../type/auth-register-data";

type CompleteAuthProps = {
  registerData: RegisterData;
};

const CompleteAuth: React.FC<CompleteAuthProps> = ({ registerData }) => {
  useEffect(
    function consoleAuthData() {
      console.log("registerData", registerData);
    },
    [registerData]
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      minH="100vh"
      paddingTop="20"
      paddingBottom="6"
    >
      <Text fontSize="4xl" fontWeight="900" color="purple.500">
        가입 완료!
      </Text>
    </Box>
  );
};

export default CompleteAuth;
