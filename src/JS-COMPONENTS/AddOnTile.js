function AddOnTile({heading, para, rate}){
    return(
        <section className="Tile">
        <div className="Tick-mark"></div>
        <div className="Discription">
            <h3>{heading}</h3>
            <p>{para}</p>
        </div>
        <p className="Rate">{rate}</p>
        </section>
    )
}

export default AddOnTile;