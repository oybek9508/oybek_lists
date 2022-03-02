import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  return (
    <nav>
      <div className='logo'>
        <Image src='/flower.jpeg' alt='/flower.jpeg' width={200} height={200} />
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/lists'>
        <a>Oybek List</a>
      </Link>
    </nav>
  )
}

export default Navbar
