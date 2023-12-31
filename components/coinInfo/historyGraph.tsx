import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CustomTooltip } from "./tooltip";
import { useEffect, useState } from "react";
import { coinHistoryFetch } from "@/utils/coinHistoryFetch";
import LoadingSpinner from "../global/loadingSpinner";
const timeButtons = ["1", "7", "14", "30", "max"];

function HistoryGraph({ coinID }: { coinID: string }) {
  const [coinHistory, setCoinHistory] = useState([]);
  const [timeFrame, setTimeFrame] = useState("1");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchingHistory(name: string, time: string) {
      const history = await coinHistoryFetch(name, time);
      setCoinHistory(history);
      setLoading(false);
    }
    fetchingHistory(coinID, timeFrame);
  }, [coinID, timeFrame]);

  const handleClick = (e: any): void => {
    setTimeFrame(e.target.value);
  };

  return (
    <div className="relative w-full max-w-5xl dark:bg-slate-800 bg-slate-100 p-8 rounded-xl">
      <div className="h-72">
        <ResponsiveContainer>
          <AreaChart data={coinHistory}>
            <Area
              type="monotone"
              dataKey="price"
              stroke="#2564eb"
              fill="#2564eb"
            />
            <XAxis dataKey={"date"} />
            <Tooltip
              content={
                <CustomTooltip payload={[]} label={"date"} active={false} />
              }
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="absolute top-4 right-4 flex  gap-4">
        <select
          onChange={handleClick}
          className="bg-blue-100 dark:bg-slate-800 text-black dark:text-white"
        >
          {timeButtons.map((item) => {
            return (
              <option className=" py-1 px-4 rounded-sm" key={item} id={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      {loading && (
        <div className="absolute flex justify-center items-center top-0 bg-opacity-50 bg-white w-full h-full">
          <LoadingSpinner width={16} />
        </div>
      )}
    </div>
  );
}

export default HistoryGraph;
