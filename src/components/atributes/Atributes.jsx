import style from "./atributes.module.css"

const Atributes = (props) => {
    return <div className={`${style.container} ${style[props.bgcolor]}`}>
        <img src={props.img} />
        <h3 className={style[props.color]}>{props.title}</h3>
        <div className={style.stats}>
            <span className={style.bold}>{props.points}</span>
            <span className={style.attenuated}>/</span>
            <span className={style.attenuated}>100</span>
        </div>
    </div>
}

export default Atributes;