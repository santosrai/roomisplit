
import Link from 'next/link';


// TODO
const Homepage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link href="/login">
        <button>Login</button>
      </Link><br/>
      <Link href="/dashboard">
        <button>Dashboard</button>
      </Link>
    </div>
  )
}

export default Homepage