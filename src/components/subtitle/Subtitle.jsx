import style from "./subtitle.module.css"

const Subtitle = (props) => {
    return <h3 className={style.fontsize}>{props.text}</h3>
}

export default Subtitle;