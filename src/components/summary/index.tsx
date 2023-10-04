import {ArrowCircleDown, Calculator} from 'phosphor-react'
import styles from './style.module.scss'

export function Summary(){
    return(
        <section className={styles.summaryContainer}>
            <div className={styles.summaryCard}>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color='#f75a68'/>
                </header>
                <strong>R$1000</strong>
            </div>
            <div className={styles.summaryCard}>
                <header>
                    <span>Total</span>
                    <Calculator size={32} color='#0ba879'/>
                </header>
                <strong>12 Contratos</strong>
            </div>
        </section>
    )
}