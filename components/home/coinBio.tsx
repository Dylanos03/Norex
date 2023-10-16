import Link from "next/link";
import Image from "next/image";

type coinDataType = {
  coinID: string;
  coinName: string;
  coinPriceUSD: number;
  coinIcon: string;
  topCoin: boolean;
  coinSymbol: string;
};

function CoinBio(props: coinDataType) {
  return (
    <>
      <div className="flex gap-2 items-center">
        <div className={"px-16 py-12 bg-slate-50 rounded-md"}>
          <img src={props.coinIcon} alt={props.coinName} />
        </div>
        <div className="flex flex-col gap-1">
          {props.topCoin && (
            <h3 className="text-blue-500">- Our top coin today</h3>
          )}
          <h2 className={"text-lg font-bold"}>
            {props.coinName} ({props.coinSymbol})
          </h2>
          <p className={"text-md "}>${props.coinPriceUSD}</p>
          <div className="flex gap-1">
            <Link
              href={`/search/${props.coinID}`}
              className="bg-blue-600 text-white px-3 py-1 rounded-sm"
            >
              View
            </Link>
            <Link
              href="/"
              className="border-blue-600 text-blue-600 px-3 py-1 rounded-sm"
            >
              Save
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoinBio;
