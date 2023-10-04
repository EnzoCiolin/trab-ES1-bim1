import {MagnifyingGlass} from 'phosphor-react'
import styles from './style.module.scss'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export function SearchForm(){

    const [startDate, setStartDate] = useState(null)
    const [finalDate, setFinalDate] = useState(null)

    return(
        <form action="" className={styles.SearchFormContainer}>
            <input type="text" placeholder="Busque Contratos" className={styles.inputSearch}/>
                <select name="Tipo" id="tipoContrato" className={styles.comboBoxType} placeholder='Tipo de Contrato'>
                    <option value="manutencao">Manutenção</option>
                    <option value="software" >Software</option>
                    <option value="obra" >Obra</option>
                </select>
                <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Data Inicial"
                className={styles.dataComponents}
                dateFormat="dd/MM/yyyy"
                />
                <DatePicker
                selected={finalDate}
                onChange={(date) => setFinalDate(date)}
                placeholderText="Data Final"
                className={styles.dataComponents}
                dateFormat="dd/MM/yyyy"
                />
            <button type="submit" className={styles.buttonSearch}>
                <MagnifyingGlass size={32} />
                Buscar
            </button>
            
        </form>
    )
}