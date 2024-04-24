function AddOnTile({ heading, para, rate, id, onClick, active, sub }) {
  return (
    <section id={id} className={"Tile " + active} onClick={onClick}>
      <div className="Tick-mark"></div>
      <div className="Discription">
        <h3>{heading}</h3>
        <p>{para}</p>
      </div>
      {sub === "monthly" ? (
        <p className="Rate">{rate + "/mo"}</p>
      ) : (
        <p className="Rate">{rate + "0/yr"}</p>
      )}
    </section>
  );
}

export default AddOnTile;
