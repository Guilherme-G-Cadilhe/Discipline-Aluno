import QueryAvaliacao from "./QueryAvaliacao";
import HeaderAvaliacao from "./HeaderAvaliacao";
import styles from './Avaliacao.module.css'

function Avaliacao() {
    return (
        <div className={styles.centralizer} >
            <div className={styles.avaliacao} >
                <HeaderAvaliacao />
                <div className={styles.querys_avaliacao} >
                    <QueryAvaliacao />
                    <QueryAvaliacao />
                    <QueryAvaliacao />
                    <QueryAvaliacao />
                    <QueryAvaliacao />
                </div>
            </div>
        </div>
    )
}

export default Avaliacao;