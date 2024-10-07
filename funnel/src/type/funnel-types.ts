import { ReactElement, ReactNode } from "react";

export type stepProps<T extends string[]> = {
  name: T[number];
  children: ReactNode;
};

export type funnelProps<T extends string[]> = {
  steps: T;
  step: T[number];
  children: Array<ReactElement<stepProps<T>>> | ReactElement<stepProps<T>>;
};
