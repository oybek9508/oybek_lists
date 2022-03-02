import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Oybek List | Home</title>
        <meta name='keywords' content='lists' />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem asdfa fasdfas fdasdf sadf safdasdfsa dfasdfsa dfdsafas dfsadf
          safdsdafas fdasdf asdfasdf sfgd ghdfhj tyh rgw fd
        </p>
        <p className={styles.text}>
          Lorem asdfa fasdfas fdasdf sadf safdasdfsa dfasdfsa dfdsafas dfsadf
          safdsdafas fdasdf asdfasdf sfgd ghdfhj tyh rgw fd
        </p>
        <Link href='/lists'>
          <a className={styles.btn}>See Oybeks listings</a>
        </Link>
      </div>
    </>
  )
}
