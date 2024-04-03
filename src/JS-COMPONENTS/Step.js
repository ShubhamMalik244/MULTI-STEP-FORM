function Step({icon, textUp, textDown}) {
return (
    <div className="Step-Indigator-Box">
       <h1 className="Icon">{icon}</h1>
       <div className="Text-Box">
        <h4>{textUp}</h4>
        <h2>{textDown}</h2>
       </div>
    </div>
)
}

export default Step;