import { createContext } from "react";

type CounterContextType = {
    count: number;
    inc: () => void;
    dec: () => void;
};

const CounterContext = createContext<CounterContextType>({
    count: 0,
    inc: () => {},
    dec: () => {},
});

export default CounterContext;
