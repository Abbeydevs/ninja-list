import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'

export default function Home () {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          saepe nisi eligendi soluta vero recusandae consequatur voluptates.
          Ipsam ducimus fugiat, ex eum sapiente dolorem aliquam ullam dicta
          blanditiis possimus voluptate!
        </p>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          saepe nisi eligendi soluta vero recusandae consequatur voluptates.
          Ipsam ducimus fugiat, ex eum sapiente dolorem aliquam ullam dicta
          blanditiis possimus voluptate!
        </p>
        <Link href='/ninjas' className={styles.btn}>
          See Ninja Listing
        </Link>
      </div>
    </>
  )
}
