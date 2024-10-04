import { Text } from "@chakra-ui/react";
import useAuthStore from "../../store/auth.store";
import { useEffect } from "react";

const CompleteAuth = () => {
  const { authData } = useAuthStore();
  useEffect(
    function consoleAuthData() {
      console.log("authData", authData);
    },
    [authData]
  );

  return (
    <Text fontSize="4xl" fontWeight="900" color="purple.500">
      가입 완료!
    </Text>
  );
};

export default CompleteAuth;
