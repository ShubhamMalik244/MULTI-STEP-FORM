function Card({ icon, mode, price, onClick, active, sub }) {
  return (
    <div className={"Card " + active} onClick={onClick}>
      <img src={`/assets/images/icon-${icon}.svg`} alt="img"></img>
      <article>
        <h2>{mode}</h2>
        {sub === "monthly" ? (
          <p>{price + "/mo"}</p>
        ) : (
          <>
            <p>{price + "0/yr"}</p>
            <h3>2 months free</h3>
          </>
        )}
      </article>
    </div>
  );
}

export default Card;
