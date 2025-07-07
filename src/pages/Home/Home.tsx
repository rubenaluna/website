import { useCallback, type FC } from "react";

export const Home: FC = () => {
  const getGreeting = useCallback(() => {
    const hour = new Date().getHours();

    if (6 <= hour && hour < 12) {
      return "Good morning";
    }
    if (12 <= hour && hour < 18) {
      return "Good afternoon";
    }

    return "Good evening";
  }, []);

  return (
    <div className="h-full p-10">
      <div className="h-full flex flex-col justify-center items-center animate-fade-in">
        <h1>{getGreeting()}, I'm Ruben Luna!</h1>
      </div>
    </div>
  );
};
