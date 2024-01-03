import style from "./result.module.css"

const Result = (props) => {
    return <div className={style.container}>{props.children}</div>
}

export default Result;