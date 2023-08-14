import enem from '../../assets/IconsProva/Enem.png';
import mit from '../../assets/IconsProva/MIT.png';
import obmep from '../../assets/IconsProva/Obmep.png'
import discipline from '../../assets/IconsProva/logo.png'
import styles from './Icon.module.css'


export function Enem() {
    return (
        <>
            <img src={enem} alt="Icon do Enem" className={styles.icon_prova} />
        </>
    )
}

export function Mit() {
    return (
        <>
            <img src={mit} alt="Icon do MIT" className={styles.icon_prova} />
        </>
    )
}

export function Obmep() {
    return (
        <>
            <img src={obmep} alt="Icon da OBMEP" className={styles.icon_prova} />
        </>
    )
}

export function Discipline() {
    return (
        <>
            <img src={discipline} alt="Icon do Discipline" className={styles.icon_prova} />
        </>
    )
}