import { Box, Spacer } from "@chakra-ui/react";
import LabelInput from "../../../components/input/label-input";
import CustomButton from "../../../components/button/custom-button";
import { RegisterData } from "../../../type/auth-register-data";
import useForm from "../../../hooks/useForm";

type EmailFormProps = {
  onClickNext: (data: Pick<RegisterData, "email">) => void;
};

const EmailForm: React.FC<EmailFormProps> = ({ onClickNext }) => {
  const { formData, handleChange } = useForm({ email: "" });

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
        onClickNextMove={handleNext}
      />
    </Box>
  );
};

export default EmailForm;
