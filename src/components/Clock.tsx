import { formatInTimeZone } from "date-fns-tz";
import { useEffect, useState } from "react";

export const Clock = () => {
  const [time, setTime] = useState<number>(Date.now());

  useEffect(() => {
    setInterval(() => setTime(Date.now()), 1000);
  }, []);

  return (
    <span className="final w-1/3">
      {formatInTimeZone(time, "America/Chicago", "hh:mm:ss aa zzz")}
    </span>
  );
};
