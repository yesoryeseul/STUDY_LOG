import { Box, Spacer } from "@chakra-ui/react";
import LabelInput from "../../../components/input/label-input";
import CustomButton from "../../../components/button/custom-button";
import useForm from "../../../hooks/useForm";
import { RegisterData } from "../../../type/auth-register-data";
type PhoneFormProps = {
  onClickNext: (data: Pick<RegisterData, "phone">) => void;
};
const PhoneForm: React.FC<PhoneFormProps> = ({ onClickNext }) => {
  const { formData, handleChange } = useForm({ phone: "" });

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
          id="phone"
          label="휴대폰 번호를 입력해주세요."
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

export default PhoneForm;
