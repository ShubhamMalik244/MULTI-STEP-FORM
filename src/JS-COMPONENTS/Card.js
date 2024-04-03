function Card({icon, mode, price}) {
    return(
        <div className="Card">
            <img src={`/assets/images/icon-${icon}.svg`} alt="img"></img>
            <article>
                <h2>{mode}</h2>
                <p>{price}</p>
                <h3 className="Hidden">2 months free</h3>
            </article>
            
        </div>
    )
}

export default Card