import styles from './Button.module.css'
import Icon from '../Icons/Icon.jsx'


function Button({text, icon, hasIcon, onClick}) {
    return (
        <>
            {onClick ? (
                <button className={styles.button} onClick={onClick}>
                    {hasIcon && (
                        <Icon />
                    )}
                    <span>{text}</span>
                </button>
            ) : (
                <button className={styles.button}>
                    {hasIcon && (
                        <Icon />
                    )}
                    <span>{text}</span>
                </button>
            )}
        </>
    )
}

export default Button