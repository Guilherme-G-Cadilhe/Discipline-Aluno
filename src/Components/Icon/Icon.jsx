import puzzle from '../../assets/Icons/Puzzle.png'
import taskboard from '../../assets/Icons/Taskboard.png'
import menu from '../../assets/Icons/Menu.png'
import filter from '../../assets/Icons/Filter.png'
import next from '../../assets/Icons/Next.png'
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

export function Menu({onClick = () => {}}) {
    return (
        <>
            <img src={menu} className={styles.icon} alt="Icon de menu" onClick={onClick} />
        </>
    )
}

export function Filter({onClick = () => {}}) {
    const style = {
        margin: "auto",
        cursor: "pointer"
    }

    return (
        <>
            <img src={filter} className={styles.icon} alt="Icon de Filtro, botão que abre o filtro" onClick={onClick} style={style} />
        </>
    )
}



// export default Puzzle;