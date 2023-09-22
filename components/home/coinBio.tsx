interface CoinBioProps {
  icon?: string;
  top?: boolean;
  name?: string;
  price?: number;
}

function CoinBio(coinData: object) {
  return (
    <>
      <div className="flex">
        <div>
          <img src={coinData.icon} alt={coinData.name} />
        </div>
        <div>
          {props.top && <h3>- Our top coin today</h3>}
          <h2>{coinData.name}</h2>
          <p>${coinData.priceUSD</p>
          <div>
            <a href="/">Buy</a>
            <a href="/">Sell</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoinBio;
