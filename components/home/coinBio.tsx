interface CoinBioProps {
  icon: string;
  top?: boolean;
  name: string;
  price: number;
}

function CoinBio(props: CoinBioProps) {
  return (
    <>
      <div className="flex">
        <div>
          <img src={props.icon} alt={props.name} />
        </div>
        <div>
          {props.top && <h3>- Our top coin today</h3>}
          <h2>{props.name}</h2>
          <p>${props.price}</p>
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
