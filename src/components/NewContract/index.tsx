import * as Dialog from '@radix-ui/react-dialog'
import styles from './style.module.scss'
import { X } from 'phosphor-react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'

export function NewContract(){

    const [startDate, setStartDate] = useState(null)
    const [finalDate, setFinalDate] = useState(null)

    return (
        <Dialog.Portal>
            <Dialog.Overlay className={styles.OverlayNewContract}/>
            <Dialog.Content className={styles.ContentNewContract}>
                <Dialog.Title>Cadastrar Contratos</Dialog.Title>
                <Dialog.Close className={styles.CloseButton}><X size={24}/></Dialog.Close>

                    <div className={styles.containerNewContract}>
                        <div className={styles.formNewContract}>
                            <form action="#">
                                <div className={styles.inputGroupNewContract}>
                                    <div className={styles.inputBoxNewContract}>
                                        <label htmlFor="ObjContrato">Objetivo do Contrato:</label>
                                        <input type="text" placeholder="Objetivo do Contrato" id="ObjContrato" />
                                    </div>
                                    <div className={styles.inputBoxNewContract}>
                                        <label htmlFor="EntregasContrato">Entregas do Contrato:</label>
                                        <input type="text" placeholder="Entregas do Contrato" id="EntrContrato" />
                                    </div>
                                    <div className={styles.inputBoxNewContract}>
                                        <label htmlFor="valorContrato">Valor:</label>
                                        <input type="text" placeholder="valorContrato" id="valorContrato" />
                                    </div>
                                    <div className={styles.inputBoxNewContract}>
                                        <label htmlFor="dataInicio">Data de Inicio:</label>
                                        <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        placeholderText="Data de Inicio"
                                        className="DataInicial"
                                        dateFormat="dd/MM/yyyy"
                                        />
                                    </div>
                                    <div className={styles.inputBoxNewContract}>
                                        <label htmlFor="dataFinal">Data de Término:</label>
                                        <DatePicker
                                        selected={finalDate}
                                        onChange={(date) => setFinalDate(date)}
                                        placeholderText="Data de Término"
                                        className='DataFinal'
                                        dateFormat="dd/MM/yyyy"
                                        />
                                    </div>
                                    <div className={styles.inputBoxNewContract}>
                                        <label htmlFor="localContrato">Local de Execução:</label>
                                        <input type="text" placeholder="Local de Execução" id="localContrato" />
                                    </div>
                                    <div className={styles.inputBoxNewContract}>
                                        <label htmlFor="FormaPagamento">Forma de Pagamento:</label>
                                        <select name="Tipo" id="tipoPagamento">
                                            <option value="transferencia">Transferência</option>
                                            <option value="Boleto">Boleto</option>
                                            <option value="cartaoCredito">Cartão de Crédito</option>
                                        </select>
                                    </div>
                                    <div className={styles.inputBoxNewContract}>
                                        <label htmlFor="EmpresaContratada">Empresa Contratada:</label>
                                        <input type="text" placeholder="Empresa Contratada" id="empresaContratada" />
                                    </div>
                                    <div className={styles.inputBoxNewContract}>
                                        <label htmlFor="RepresentanteContratada">Representante da Contratada:</label>
                                        <input type="text" placeholder="Representante da Contratada" id="representanteContratada" />
                                    </div>
                                    <div className={styles.inputBoxNewContract}>
                                        <label htmlFor="GestorContrato">Gestor do Contrato:</label>
                                        <input type="text" placeholder="Gestor do Contrato" id="GestorContrato" />
                                    </div>
                                    <div className={styles.inputBoxNewContract}>
                                        <label htmlFor="ValorPago">Valor Pago:</label>
                                        <input type="text" placeholder="Valor Pago" id="valorPago" />
                                    </div>
                                    <div className={styles.inputBoxNewContract}>
                                        <label htmlFor="tipoContrato">Tipo de Contrato:</label>
                                        <input type="text" placeholder="Tipo de Contrato" id="tipoContrato" />
                                    </div>
                                </div>
                                <div className={styles.buttonContainer}>
                                    <button className={styles.buttonNewContract}>Cadastrar Contrato</button>
                                </div>
                            </form>
                        </div>
                    </div>
                
            </Dialog.Content>
        </Dialog.Portal>
    )
}