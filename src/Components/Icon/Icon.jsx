import puzzle from '../../assets/Icons/Puzzle.png'
import taskboard from '../../assets/Icons/Taskboard.png'
import styles from './Icon.module.css'

export function Puzzle({type}) {
    return (
        <>
            <img src={puzzle} className={styles.icon} alt="Icon de quebra-cabeça" />
        </>
    )
}

export function Taskboard() {
    return (
        <>
            <img src={taskboard} className={styles.icon} alt="Icon de prancheta" />
        </>
    )
}


// export default Puzzle;