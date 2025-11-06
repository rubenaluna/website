import { formatInTimeZone } from "date-fns-tz";
import { useEffect, useState } from "react";

export const Clock = () => {
  const [time, setTime] = useState<number>(Date.now());

  useEffect(() => {
    setInterval(() => setTime(Date.now()), 1000);
  }, []);

  return (
    <div className="flex items-center space-x-2">
      <div className="w-3 h-3 bg-white"></div>
      <span className="mono font-light text-xs whitespace-nowrap">
        {formatInTimeZone(time, "America/Chicago", "hh:mm:ss aa zzz")}
      </span>
    </div>
  );
};
