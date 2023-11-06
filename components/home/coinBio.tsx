import Link from "next/link";
import Image from "next/image";

type coinDataType = {
  coinID: string;
  coinName: string;
  coinPriceUSD: number;
  coinIcon: string;

  coinSymbol: string;
};

function CoinBio(props: coinDataType) {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-2 items-center">
        <div className={"px-16 py-12 bg-slate-50 rounded-md"}>
          <img src={props.coinIcon} alt={props.coinName} />
        </div>
        <div className="flex flex-col gap-1">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default CoinBio;
