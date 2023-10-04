import * as Dialog from '@radix-ui/react-dialog'
import styles from './style.module.scss'
import { X } from 'phosphor-react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'

export function UpdateContract(){

    const [startDate, setStartDate] = useState(new Date());
    const [finalDate, setFinalDate] = useState(null);

    return(
        <Dialog.Portal>
            <Dialog.Overlay className={styles.OverlayUpdateContract}/>
            <Dialog.Content className={styles.ContentUpdateContract}>
                <Dialog.Title>Alterar Contratos</Dialog.Title>
                <Dialog.Close className={styles.CloseButton}><X size={24}/></Dialog.Close>
                <div className={styles.containerUpdateContract}>
                        <div className={styles.formUpdateContract}>
                            <form action="#">
                                <div className={styles.inputGroupUpdateContract}>
                                    <div className={styles.inputBoxUpdateContract}>
                                        <label htmlFor="ObjContrato">Objetivo do Contrato:</label>
                                        <input type="text" placeholder="Objetivo do Contrato" id="ObjContrato" value="Itaipu"/>
                                    </div>
                                    <div className={styles.inputBoxUpdateContract}>
                                        <label htmlFor="EntregasContrato">Entregas do Contrato:</label>
                                        <input type="text" placeholder="Entregas do Contrato" id="EntrContrato" value="Software"/>
                                    </div>
                                    <div className={styles.inputBoxUpdateContract}>
                                        <label htmlFor="valorContrato">Valor do contrato:</label>
                                        <input type="text" placeholder="valorContrato" id="valorContrato" value="R$12000"/>
                                    </div>
                                    <div className={styles.inputBoxUpdateContract}>
                                        <label htmlFor="dataInicio">Data de Inicio:</label>
                                        <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        placeholderText="Data de Inicio"
                                        className="DataInicial"
                                        dateFormat="dd/MM/yyyy"
                                        disabled
                                        />
                                    </div>
                                    <div className={styles.inputBoxUpdateContract}>
                                        <label htmlFor="dataFinal">Data de Término:</label>
                                        <DatePicker
                                        selected={finalDate}
                                        onChange={(date) => setFinalDate(date)}
                                        placeholderText="Data de Término"
                                        className='DataFinal'
                                        dateFormat="dd/MM/yyyy"
                                        value="12/12/2023"
                                        />
                                    </div>
                                    <div className={styles.inputBoxUpdateContract}>
                                        <label htmlFor="localContrato">Local de Execução:</label>
                                        <input type="text" placeholder="Local de Execução" id="localContrato" value="Foz do Iguaçu"/>
                                    </div>
                                    <div className={styles.inputBoxUpdateContract}>
                                        <label htmlFor="FormaPagamento">Forma de Pagamento:</label>
                                        <select name="Tipo" id="tipoPagamento" value='Boleto'>
                                            <option value="transferencia">Transferência</option>
                                            <option value="Boleto">Boleto</option>
                                            <option value="cartaoCredito">Cartão de Crédito</option>
                                        </select>
                                    </div>
                                    <div className={styles.inputBoxUpdateContract}>
                                        <label htmlFor="EmpresaContratada">Empresa Contratada:</label>
                                        <input type="text" placeholder="Empresa Contratada" id="empresaContratada" value="ABC LTDA"/>
                                    </div>
                                    <div className={styles.inputBoxUpdateContract}>
                                        <label htmlFor="RepresentanteContratada">Representante da Contratada:</label>
                                        <input type="text" placeholder="Representante da Contratada" id="representanteContratada" value="João"/>
                                    </div>
                                    <div className={styles.inputBoxUpdateContract}>
                                        <label htmlFor="GestorContrato">Gestor do Contrato:</label>
                                        <input type="text" placeholder="Gestor do Contrato" id="GestorContrato" value='Enzo'/>
                                    </div>
                                    <div className={styles.inputBoxUpdateContract}>
                                        <label htmlFor="valorPago">Valor Pago:</label>
                                        <input type="text" placeholder="Valor Pago" id="valorPago" value='R$7000'/>
                                    </div>
                                    <div className={styles.inputBoxUpdateContract}>
                                        <label htmlFor="tipoContrato">Tipo de Contrato:</label>
                                        <input type="text" placeholder="Tipo de Contrato" id="tipoContrato" value='Software'/>
                                    </div>
                                    <div className={styles.inputBoxUpdateContract}>
                                        <label htmlFor="GestorContrato">Status:</label>
                                        <input type="text" placeholder="Status" id="status" value='Cancelado'/>
                                    </div>
                                </div>
                                <div className={styles.buttonContainer}>
                                    <button className={styles.buttonUpdateContract}>Alterar Contrato</button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
            </Dialog.Content>
        </Dialog.Portal>
    )
}