import styles from "./stats.module.css"

const Stats = (props) => {
    return <div className={styles.container}>{props.children}</div>
}

export default Stats;