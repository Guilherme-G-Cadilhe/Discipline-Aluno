import { Enem, Mit, Obmep, Discipline } from "../Icon/IconProva";
import { Menu } from "../Icon/Icon";
import styles from './Avaliacao.module.css'

function QueryAvaliacao({text, icon}) {
    let iconRender;

    const onClickMenu = () => {
        console.log("menu clicked")
    }

    const pAlign = {
        textAlign: "left"
    }

    if (icon == "enem") {
        iconRender = (<Enem />)
    } else if (icon == "mit") {
        iconRender = (<Mit />)
    } else if (icon == "obmep") {
        iconRender = (<Obmep />)
    } else {
        iconRender = (<Discipline />)
    }

    return (
        <div className={styles.query_line} >
            <div className={styles.query_inline} >
                {iconRender}
                <p style={pAlign} >{text}</p>
            </div>
            <Menu onClick={onClickMenu} />
        </div>
    )
}

export default QueryAvaliacao