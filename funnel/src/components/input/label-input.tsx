import { FormControl, FormLabel, Input, InputProps } from "@chakra-ui/react";

type LabelInputProps = {
  label: string;
  id: string;
} & InputProps;

const LabelInput: React.FC<LabelInputProps> = ({
  label,
  id,
  type = "text",
  ...rest
}) => {
  return (
    <FormControl>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input id={id} type={type} {...rest} />
    </FormControl>
  );
};

export default LabelInput;
