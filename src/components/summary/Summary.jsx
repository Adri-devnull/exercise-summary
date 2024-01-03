import styles from "./summary.module.css"

const Summary = (props) => {
    return <div className={styles.container}>{props.children}</div>
}

export default Summary;