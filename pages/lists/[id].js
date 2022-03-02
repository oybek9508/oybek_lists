export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const paths = data.map((d) => {
    return {
      params: { id: d.id.toString() },
    }
  })
  console.log('paths in getPaths', paths)

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  console.log('context', context)
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()

  return { props: { list: data } }
}

function id({ list }) {
  return (
    <div>
      <h1>{list.name}</h1>
      <p>{list.email}</p>
      <p>{list.website}</p>
      <p>{list.address.city}</p>
    </div>
  )
}

export default id
