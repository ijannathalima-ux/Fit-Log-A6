"use client";

import { createContext, useContext, useState } from "react";
import { FitLogType } from "@/type/types";

interface FitLogContextType {
    plan: FitLogType[];
    saved: FitLogType[];
    addToPlan: (workout: FitLogType) => void;
    saveForLater: (workout: FitLogType) => void;
    removePlan: (id: string | number) => void;
    removeSaved: (id: string | number) => void;
    markAsDone: (id: string | number) => void;
}

const FitLogContext = createContext<FitLogContextType | undefined>(undefined);

const FitLogProvider = ({ children }: { children: React.ReactNode; }) => {

    const [plan, setPlan] = useState<FitLogType[]>([]);
    const [saved, setSaved] = useState<FitLogType[]>([]);

    const addToPlan = (workout: FitLogType) => {
        setPlan((previousPlan) => {

            const alreadyExists = previousPlan.some(
                (item) => String(item.id) === String(workout.id)
            );

            if (alreadyExists) {
                return previousPlan;
            }

            return [...previousPlan, workout];
        });
    };

    const saveForLater = (workout: FitLogType) => {
        setSaved((previousSaved) => {

            const alreadyExists = previousSaved.some(
                (item) => String(item.id) === String(workout.id)
            );

            if (alreadyExists) {
                return previousSaved;
            }

            return [...previousSaved, workout];
        });
    };

    const removePlan = (id: string | number) => {
        setPlan((previousPlan) =>
            previousPlan.filter((workout) => String(workout.id) !== String(id))
        )
    }
    const removeSaved = (id: string | number) => {
        setSaved((previousSaved) =>
            previousSaved.filter((workout) => String(workout.id) !== String(id))
        )
    }
    const markAsDone = (id: string | number) => {
        setPlan((previousPlan) =>
            previousPlan.filter((workout) => String(workout.id) !== String(id))
        )
    }

    return (
        <FitLogContext.Provider
            value={{
                plan,
                saved,
                addToPlan,
                saveForLater,
                removePlan,
                removeSaved,
                markAsDone
            }}
        >
            {children}
        </FitLogContext.Provider>
    );
};

export const useFitLog = () => {
    const context = useContext(FitLogContext);

    if (!context) {
        throw new Error("useFitLog must be used inside FitLogProvider");
    }

    return context;
};

export default FitLogProvider;