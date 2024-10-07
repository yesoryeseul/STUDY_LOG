import { Children, isValidElement, ReactElement } from "react";
import { funnelProps, stepProps } from "../../type/funnel-types";

export const Funnel = <T extends string[]>({
  steps,
  step,
  children,
}: funnelProps<T>) => {
  const validChildren = Children.toArray(children)
    .filter(isValidElement)
    .filter((step) =>
      steps.includes((step.props as Partial<stepProps<T>>).name ?? "")
    ) as Array<ReactElement<stepProps<T>>>;

  const targetStep = validChildren.find((child) => child.props.name === step);

  return <>{targetStep || null}</>;
};

export const Step = <T extends string[]>({ children }: stepProps<T>) => {
  return <>{children}</>;
};
