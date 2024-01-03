import style from "./information.module.css"

const Information = (props) => {
    return <p className={style.text}>{props.text}</p>
}

export default Information;