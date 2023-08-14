import next from '../../assets/Icons/Next.png'
import lastPage from '../../assets/Icons/LastPage.png'
import firstPage from '../../assets/Icons/FirstPage.png'
import back from '../../assets/Icons/Back.png'

import styles from './Paginacao.module.css'

function FirstPage({onClick = () => {}}) {
    return (
        <>
            <img src={firstPage} className={styles.interactive_icon} alt="Icon para voltar para página inicial" onClick={onClick}  />
        </>
    )
}

function Back({onClick = () => {}}) {
    return (
        <>
            <img src={back} className={styles.interactive_icon} alt="Icon para voltar uma página" onClick={onClick}  />
        </>
    )
}

function Next({onClick = () => {}}) {
    return (
        <>
            <img src={next} className={styles.interactive_icon} alt="Icon de Next" onClick={onClick}  />
        </>
    )
}

function LastPage({onClick = () => {}}) {
    return (
        <>
            <img src={lastPage} className={styles.interactive_icon} alt="Icon para avançar para ultima página" onClick={onClick}  />
        </>
    )
}

function PaginacaoButton({isSelected, number}) {
    let buttonStyle;

    if (isSelected) {
        buttonStyle = {
            color: "white",
            backgroundColor: "black"
        }
    } else {
        buttonStyle = {
            color: "black",
            backgroundColor: "white"
        }
    }

    return (
        <div className={styles.paginacao_button} style={buttonStyle} >
            {number}
        </div>
    )
}


function Paginacao() {

    let actualPage = 1
    let totalPages = 6

    return (
        <div className={styles.paginacao} >
            <FirstPage />
            {actualPage == 1 ? (
                <>
                    <PaginacaoButton number="1" isSelected={true}  />
                    <PaginacaoButton number="2" />
                    <PaginacaoButton number="3" />
                </>
            ) : actualPage < totalPages ? (
                <>
                    <PaginacaoButton number={String(actualPage - 1)} />
                    <PaginacaoButton number={String(actualPage)} isSelected={true}  />
                    <PaginacaoButton number={String(actualPage + 1)} />
                </>
            ) : (
                <>
                    <>
                    <PaginacaoButton number={String(actualPage - 2)} />
                    <PaginacaoButton number={String(actualPage) - 1}  />
                    <PaginacaoButton number={String(actualPage)} isSelected={true} />
                </>
                </>
            )}
            <LastPage />
        </div>
    )
}

export default Paginacao;