import { Area, AreaChart, Tooltip, XAxis } from "recharts";
import { CustomTooltip } from "./tooltip";
import { useEffect, useState } from "react";
import { coinHistoryFetch } from "@/utils/coinHistoryFetch";
const timeButtons = ["1", "7", "14", "30", "max"];

function HistoryGraph({ coinID }: { coinID: string }) {
  const [coinHistory, setCoinHistory] = useState([]);
  const [timeFrame, setTimeFrame] = useState("30");
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
    setTimeFrame(e.target.id);
  };

  return (
    <div className="relative">
      <AreaChart width={600} height={400} data={coinHistory}>
        <XAxis dataKey={"date"} />
        <Area type="monotone" dataKey="price" stroke="#8884d8" />
        <Tooltip
          content={<CustomTooltip payload={[]} label={""} active={false} />}
        />
      </AreaChart>
      <div>
        {timeButtons.map((item) => {
          return (
            <button key={item} id={item} onClick={handleClick}>
              {item}
            </button>
          );
        })}
      </div>
      {loading && (
        <div className="absolute top-0 bg-opacity-50 bg-white w-full h-full"></div>
      )}
    </div>
  );
}

export default HistoryGraph;
