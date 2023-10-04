import React from "react";
import {Summary} from '../components/summary/index'
import styles from './home.module.scss'
import {SearchForm} from '../components/SearchForm'
import { TableContract } from "../components/TableContract";

export default function Home() {
  return (
    <>
      <Summary/>
      <main className={styles.contractsContainer}>
        <SearchForm/>
        <TableContract/>
      </main>
    </>
  )
}
