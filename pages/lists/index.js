import { getDisplayName } from 'next/dist/shared/lib/utils'
import Link from 'next/link'
import styles from '../../styles/Lists.module.css'
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    props: { lists: data },
  }
}

function index({ lists }) {
  return (
    <div>
      <h1>All user lists</h1>
      {lists.map((d) => (
        <Link href={`/lists/${d.id}`} key={d.id}>
          <a className={styles.single}>
            <h3>{d.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default index
