import * as Dialog from '@radix-ui/react-dialog';
import styles from './style.module.scss';
import { X } from 'phosphor-react';


export function ViewContract(){
    return(
        <Dialog.Portal>
            <Dialog.Overlay className={styles.OverlayViewContract}/>
            <Dialog.Content className={styles.ContentViewContract}>
                <Dialog.Title>Contratos</Dialog.Title>
                <Dialog.Close className={styles.CloseButton}><X size={24}/></Dialog.Close>

                <div className={styles.spaceContainer}>
                <div className={styles.viewContractContainer}>
                    <div className={styles.contractInfo}>
                        <label className={styles.contractLabel} htmlFor="empresa">Empresa:</label>
                        <p className={styles.contractParagraph}>Itaipu</p>
                        <label className={styles.contractLabel} htmlFor="valor">Valor:</label>
                        <p className={styles.contractParagraph}>R$10.000</p>
                        <label className={styles.contractLabel} htmlFor="dataInicio">Data Inicio:</label>
                        <p className={styles.contractParagraph}>30/08/2023</p>
                        <label className={styles.contractLabel} htmlFor="dataInicio">Data Final:</label>
                        <p className={styles.contractParagraph}>12/12/2023</p>
                        <label className={styles.contractLabel} htmlFor="tipoDeContrato">Tipo de Contrato:</label>
                        <p className={styles.contractParagraph}>Software</p>
                        <label className={styles.contractLabel} htmlFor="ObjetivosDoContrato">Objetivos do contrato:</label>
                        <p className={styles.contractParagraph}>Receber Software Funcionando</p>
                        <label className={styles.contractLabel} htmlFor="entregasDoContrato">Entregas do Contrato:</label>
                        <p className={styles.contractParagraph}>Tela Login e Tela Cadastro de Usuario</p>
                    </div>
                    <div className={styles.contractInfo}>
                        <label className={styles.contractLabel} htmlFor="formaDePagamento">Forma de Pagamento:</label>
                        <p className={styles.contractParagraph}>Transferência</p>
                        <label className={styles.contractLabel} htmlFor="EmpresaContrato">Empresa Contratada:</label>
                        <p className={styles.contractParagraph}>ABC LTDA</p>
                        <label className={styles.contractLabel} htmlFor="RepresentanteDaEmpresa">Representante:</label>
                        <p className={styles.contractParagraph}>Enzo Ciolin</p>
                        <label className={styles.contractLabel} htmlFor="gestorDoContrato">Gestor:</label>
                        <p className={styles.contractParagraph}>Vitor Fonseca</p>
                        <label className={styles.contractLabel} htmlFor="valorPago">Valor Pago:</label>
                        <p className={styles.contractParagraph}>R$4.000</p>
                        <label className={styles.contractLabel} htmlFor="porcentagemDaExecucao">Porcentagem de Execução:</label>
                        <p className={styles.contractParagraph}>40%</p>
                        <label className={styles.contractLabel} htmlFor="statusDoContrato">Status:</label>
                        <label htmlFor='statusContrato' className={styles.statusContractParagraph}>Cancelado</label>
                    </div>
                </div>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttonReport}>Gerar Relatório</button>
                </div>  

            </Dialog.Content>
        </Dialog.Portal>
    )
}