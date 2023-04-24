import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

          <div className={styles.pageContainer}>
              <div className={styles.titleContainer}>
                  <h1 className={styles.pageTitle}>
                      Welcome to the Order Service website!!!
                  </h1>
              </div>
          </div>
    </>
  )
}
