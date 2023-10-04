import styles from './style.module.scss'
import * as Dialog from '@radix-ui/react-dialog'
import {X, Info, Pencil,CurrencyDollar} from 'phosphor-react'
import { UpdateContract } from '../UpdateContract'
import { NewPayContract } from '../NewPayContract'
import { ViewContract } from '../ViewContract'
import { useEffect, useState } from 'react'

export function TableContract(){

    return(
        <table className={styles.tableContainer}>
          <thead>
            <tr>
              <td>Empresa</td>
              <td>Data Inicial</td>
              <td>Data Final</td>
              <td>Tipo Contrato</td>
              <td>Info</td>
              <td>Alterar</td>
              <td>Pagar</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Petroquímica</td>
              <td>10/03/2023</td>
              <td>10/10/2023</td>
              <td>Software</td>
              <td>
                <Dialog.Root>
                  <Dialog.Trigger className={styles.buttonIcon}>
                    <Info size={20} color="#0ba879"></Info>
                  </Dialog.Trigger>
                <ViewContract/>
                </Dialog.Root>
              </td>
              <td>
              <Dialog.Root>
                  <Dialog.Trigger className={styles.buttonIcon}>
                    <Pencil size={20} color="#0ba879"/>
                  </Dialog.Trigger>
                    <UpdateContract/>
              </Dialog.Root>
              </td>
              <td>
              <Dialog.Root>
                  <Dialog.Trigger className={styles.buttonIcon}>
                    <CurrencyDollar size={20} color="#0ba879"/>
                  </Dialog.Trigger>
                    <NewPayContract/>
              </Dialog.Root>
              </td>
            </tr>
            <tr>
              <td>Embraer</td>
              <td>10/03/2023</td>
              <td>10/10/2023</td>
              <td>Manutenção</td>
              <td>
                    <button className={styles.buttonIcon}>
                      <Info size={20} color="#0ba879"></Info>
                    </button>
              </td>
              <td>
                <button className={styles.buttonIcon}><Pencil size={20} color="#0ba879"/></button>
              </td>
              <td>
                <button className={styles.buttonIcon}><CurrencyDollar size={20} color="#0ba879"/></button>
              </td>
            </tr>
            <tr>
              <td>Itaipu</td>
              <td>10/03/2023</td>
              <td>10/10/2023</td>
              <td>Barragem</td>
              <td><a href=""><Info size={20} color="#0ba879"></Info></a></td>
              <td>
                <button className={styles.buttonIcon}><Pencil size={20} color="#0ba879"/></button>
              </td>
              <td>
                <button className={styles.buttonIcon}><CurrencyDollar size={20} color="#0ba879"/></button>
              </td>
            </tr>
          </tbody>
        </table>
    )
}