import { Enem, Mit, Obmep } from "../Icon/IconProva";
import { Menu } from "../Icon/Icon";
import styles from './Avaliacao.module.css'

function QueryAvaliacao(props) {
    const onClickMenu = () => {
        console.log("menu clicked")
    }

    return (
        <div className={styles.query_line} >
            <div className={styles.query_inline} >
                <Enem />
                <p>Enem - 2016</p>
            </div>
            <Menu onClick={onClickMenu} />
        </div>
    )
}

export default QueryAvaliacao