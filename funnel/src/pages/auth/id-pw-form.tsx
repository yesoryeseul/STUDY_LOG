import { Box, Spacer } from "@chakra-ui/react";
import LabelInput from "../../components/input/label-input";
import CustomButton from "../../components/button/custom-button";
import { RegisterData } from "../../type/auth-register-data";
import useForm from "../../hooks/useForm";

type IdPwFormProps = {
  onClickNext: (data: Pick<RegisterData, "id" | "pw">) => void;
};

const IdPwForm: React.FC<IdPwFormProps> = ({ onClickNext }) => {
  const { formData, handleChange } = useForm({ id: "", pw: "" });

  const handleNext = () => {
    onClickNext(formData);
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
          onChange={handleChange}
          id="id"
          label="아이디를 입력해주세요."
        />
        <LabelInput
          onChange={handleChange}
          id="pw"
          type="password"
          label="비밀번호를 입력해주세요."
        />
      </Box>
      <Spacer />
      <CustomButton
        text="다음"
        onClickNextMove={handleNext}
        colorScheme="purple"
        size="lg"
      />
    </Box>
  );
};

export default IdPwForm;
