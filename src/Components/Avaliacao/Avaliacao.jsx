import QueryAvaliacao from "./QueryAvaliacao";
import HeaderAvaliacao from "./HeaderAvaliacao";
import Paginacao from "./Paginacao";
import styles from './Avaliacao.module.css'

function Avaliacao() {
    return (
        <div className={styles.centralizer} >
            <div className={styles.avaliacao} >
                <HeaderAvaliacao />
                <div className={styles.querys_avaliacao} >
                    <QueryAvaliacao text="Enem - 2016" icon="enem" />
                    <QueryAvaliacao text="MIT - 2016" icon="mit" />
                    <QueryAvaliacao text="Obmep - 2016" icon="obmep" />
                    <QueryAvaliacao text="Concurso Público para ingresso na carreira de Delegado de Polícia Civil do Estado do Rio Grande do Norte" icon="enem" />
                    <QueryAvaliacao text="Enem - 2016" />
                </div>
                <Paginacao />
            </div>
        </div>
    )
}

export default Avaliacao;