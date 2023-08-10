import styles from './Button.module.css'
import { Taskboard } from '../Icon/Icon'

function PrimaryButton({text, icon, hasIcon, onClick}) {
    const noIconStyle = {
        justifyContent: "flex-start",
        textAlign: "start",
        backgroundColor: "red"
    }

    return (
        <>
            {onClick ? (
                <button className={`${styles.button} ${styles.primary_button}`} onClick={onClick}>
                    {hasIcon && (
                        <Taskboard />
                    )}
                    <span>{text}</span>
                </button>
            ) : (
                <button className={`${styles.button} ${styles.primary_button}`}>
                    {hasIcon && (
                        <Taskboard />
                    )}
                    <span>{text}</span>
                </button>
            )}
        </>
    )
}
export default PrimaryButton