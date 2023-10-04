import * as Dialog from '@radix-ui/react-dialog'
import styles from './style.module.scss'
import {X,UploadSimple} from 'phosphor-react'

export function NewPayContract(){
    return(
        <Dialog.Portal>
            <Dialog.Overlay className={styles.OverlayNewPayContract}/>
            <Dialog.Content className={styles.ContentNewPayContract}>
                <Dialog.Title>Comprovar Pagamento</Dialog.Title>
                <Dialog.Close className={styles.CloseButton}><X size={24}/></Dialog.Close>

                <div className={styles.UploadContainer}>
                    <input className={styles.inputUpload} type="file" id='text'/>
                    <label className={styles.labelUpload} htmlFor="file">
                            <UploadSimple size={22} color='#fff' className={styles.UploadSimple}/>
                            Adicionar Arquivos
                    </label>
                </div>
                <div className={styles.ButtonContainer}>
                    <button className={styles.buttonSend}>Enviar</button>
                </div>

            </Dialog.Content>
        </Dialog.Portal>
    )
}