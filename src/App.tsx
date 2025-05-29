import './App.css'
import {Link, Outlet} from "react-router-dom";

function App() {
  return (
      <main>
          <nav>
              <ul>
                  <li><Link to={''}>HOME</Link></li>
                  <li><Link to={'/users'}>USERS</Link></li>
                  <li><Link to={'/posts'}>POSTS</Link></li>
                  <li><Link to={'/comments'}>COMMENTS</Link></li>
                  <li><Link to={'/complex'}>COMPLEX</Link></li>
              </ul>
          </nav>
          <Outlet/>
      </main>
  )
}

export default App
