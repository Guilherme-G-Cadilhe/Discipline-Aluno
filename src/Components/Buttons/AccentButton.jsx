import styles from './Button.module.css'
import { Puzzle, Taskboard } from '../Icon/Icon.jsx'


function AccentButton({text, icon, hasIcon, onClick}) {
    return (
        <>
            {onClick ? (
                <button className={`${styles.button} ${styles.accent_button}`} onClick={onClick}>
                    {hasIcon && (
                        <Taskboard />
                    )}
                    <span>{text}</span>
                </button>
            ) : (
                <button className={`${styles.button} ${styles.accent_button}`}>
                    {hasIcon && (
                        <Taskboard />
                    )}
                    <span>{text}</span>
                </button>
            )}
        </>
    )
}

export default AccentButton