import style from "./title.module.css"

const Title = (props) => {
    return <h2 className={style.color}>{props.text}</h2>
}

export default Title;