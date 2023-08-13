import styles from './Avaliacao.module.css'
import { Filter } from '../Icon/Icon'


function HeaderAvaliacao() {
    return (
        <header className={styles.header} >
            <Filter />
            <h2>Avaliações</h2>
        </header>
    )
}

export default HeaderAvaliacao