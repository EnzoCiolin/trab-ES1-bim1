"use client"

import { Bell } from 'phosphor-react'
import { NewContract } from '../NewContract'
import styles from './style.module.scss'
import * as Dialog from '@radix-ui/react-dialog'
import React, { useEffect, useState } from 'react'



export function Header(){

    const[isClient, setIsClient] = useState(false);

    useEffect(() =>{
        setIsClient(true)
    },[])

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <h1>ES1 Contratos</h1>
                <nav>

                <Dialog.Root>
                    <Dialog.DialogTrigger className={styles.spaceButtonBell}>
                            <Bell size={20} color='#00B37E'/>
                        </Dialog.DialogTrigger>
                        
                </Dialog.Root>

                    <Dialog.Root>
                    <Dialog.DialogTrigger>
                            {isClient && <button className={styles.buttonNewContract}>Novo Contrato</button>}
                        </Dialog.DialogTrigger>
                        <NewContract/>
                    </Dialog.Root>
                </nav>
            </div>
        </header>
    )
}