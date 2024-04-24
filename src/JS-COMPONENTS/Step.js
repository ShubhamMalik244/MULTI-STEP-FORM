function Step({icon, textUp, textDown, active = ''}) {
return (
    <div className="Step-Indigator-Box">
       <h1 className={"Icon " + active}>{icon}</h1>
       <div className="Text-Box">
        <h4>{textUp}</h4>
        <h2>{textDown}</h2>
       </div>
    </div>
)
}

export default Step;