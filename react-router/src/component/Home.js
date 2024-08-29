import { Link } from "react-router-dom";

function Home(){
  return(
    <div>
      <h3>Home 페이지</h3>
      <Link to='/user?key=사과&age=22'>user 페이지</Link>

      <br></br>

      <Link to='/info/1'>info apple</Link>
      <Link to='/info/2'>info banana</Link>
      <Link to='/info/3'>info pear</Link>
    </div>
  )
}

export default Home;
