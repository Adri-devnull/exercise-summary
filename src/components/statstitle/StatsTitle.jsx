import style from "./statstitle.module.css"

const StatsTitle = (props) => {
    return <h2 className={style.font}>{props.text}</h2>
}

export default StatsTitle;