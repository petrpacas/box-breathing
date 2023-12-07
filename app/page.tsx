"use client";
import { useEffect, useState } from "react";
import { useInterval } from "./hooks/useInterval";

export default function Counter() {
  const [level, setLevel] = useState<number>(4);
  const [count, setCount] = useState<number>(1);
  const [phase, setPhase] = useState<number>(0);
  const [timer, setTimer] = useState<number | null>(null);
  const [breathing, setBreathing] = useState<boolean>(false);

  useInterval(() => {
    if (count >= level) {
      setCount(1);

      if (phase >= 3) {
        setPhase(0);
      } else {
        setPhase((p) => p + 1);
      }
    } else {
      setCount((c) => c + 1);
    }
  }, timer);

  useEffect(() => {
    if (breathing) {
      setTimer(1000);
    } else {
      setTimer(null);
      setCount(1);
      setPhase(0);
    }
  }, [breathing]);

  const phaseText = () => {
    switch (phase) {
      case 0:
        return "Inhale";
      case 2:
        return "Exhale";
      case 1:
      case 3:
        return "Hold";
      default:
        return;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="mb-8 text-center text-2xl">
        {breathing ? (
          <>
            {phaseText()} for {count}
          </>
        ) : (
          "Prepare for inhale..."
        )}
      </div>

      <div className="mb-8 flex h-96 w-96 items-center justify-center rounded-full bg-indigo-800 shadow-lg dark:bg-indigo-200">
        <div
          className={`${
            breathing
              ? phase === 0 || phase === 1
                ? "animate-breatheLight dark:animate-breatheDark h-full w-full"
                : "animate-breatheLight dark:animate-breatheDark h-8 w-8"
              : "h-4 w-4"
          } rounded-full bg-indigo-600 transition-[height,width] ease-linear dark:bg-indigo-400`}
          style={{
            transitionDuration: breathing ? `${level}000ms` : undefined,
          }}
        />
      </div>

      <div className="mb-4 flex items-center justify-center gap-2">
        <button
          onClick={() => setLevel((l) => l - 1)}
          disabled={level <= 1}
          className="h-8 w-8 rounded-lg border-2 border-indigo-300 shadow-md hover:bg-indigo-200 active:bg-indigo-300 disabled:opacity-25 disabled:hover:bg-transparent disabled:active:bg-transparent dark:border-indigo-700 dark:hover:bg-indigo-800 dark:active:bg-indigo-700"
        >
          -
        </button>

        <span>Each phase is {level}s long</span>

        <button
          onClick={() => setLevel((l) => l + 1)}
          disabled={level >= 30}
          className="h-8 w-8 rounded-lg border-2 border-indigo-300 shadow-md hover:bg-indigo-200 active:bg-indigo-300 disabled:opacity-25 disabled:hover:bg-transparent disabled:active:bg-transparent dark:border-indigo-700 dark:hover:bg-indigo-800 dark:active:bg-indigo-700"
        >
          +
        </button>
      </div>

      <button
        onClick={() => setBreathing((b) => !b)}
        className="w-32 rounded-lg border-2 border-indigo-300 px-4 py-2 shadow-md hover:bg-indigo-200 active:bg-indigo-300 dark:border-indigo-700 dark:hover:bg-indigo-800 dark:active:bg-indigo-700"
      >
        {breathing ? "Stop" : "Start"}
      </button>
    </main>
  );
}
