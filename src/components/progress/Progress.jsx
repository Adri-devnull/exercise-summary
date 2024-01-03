import style from "./progress.module.css"

const Progress = (props) => {
    return <div className={style.container}>
        <h2 className={style.font}>{props.number}</h2>
        <div className={style.flex}>
            <span className={style.attenuated}>of</span>
            <span className={style.attenuated}>100</span>
        </div>
    </div>
}

export default Progress;