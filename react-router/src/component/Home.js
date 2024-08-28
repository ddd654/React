import { Link } from "react-router-dom";

function Home(){
  return(
    <div>
      <h3>Home 페이지</h3>
      <Link to='/user'>user 페이지</Link>

      123

      <Link to='/info'>info 페이지</Link>
    </div>
  )
}

export default Home;
