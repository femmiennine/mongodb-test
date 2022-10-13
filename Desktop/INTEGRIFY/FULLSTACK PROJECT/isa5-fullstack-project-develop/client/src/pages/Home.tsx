import Collection from "components/Collection"
import Navbar from "components/Navbar"
import Welcome from "components/Welcome"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Collection />
    </div>
  )
}

export default Home