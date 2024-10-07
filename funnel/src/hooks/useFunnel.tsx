import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Funnel, Step } from "../components/funnel/funnel";
import { funnelProps } from "../type/funnel-types";

const useFunnel = <T extends string[]>(steps: T, defaultStep: T[number]) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const setStep = (step: T[number]) => setSearchParams({ step });

  const FunnelComp = useMemo(() => {
    const funnelWithStep = (props: Omit<funnelProps<T>, "step" | "steps">) => {
      const step = searchParams.get("step") ?? defaultStep;
      return <Funnel<T> steps={steps} step={step} {...props} />;
    };

    funnelWithStep.Step = Step;

    return funnelWithStep;
  }, [searchParams]);

  return [FunnelComp, setStep] as const;
};

export default useFunnel;
