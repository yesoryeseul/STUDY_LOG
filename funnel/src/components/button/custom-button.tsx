import { Button } from "@chakra-ui/react";
import React from "react";

type ButtonProps = {
  text: string;
  colorScheme: string;
  size: string;
  onClickNextMove: () => void;
};

const CustomButton: React.FC<ButtonProps> = ({
  text,
  colorScheme,
  size,
  onClickNextMove,
}) => {
  return (
    <Button size={size} colorScheme={colorScheme} onClick={onClickNextMove}>
      {text}
    </Button>
  );
};

export default CustomButton;
