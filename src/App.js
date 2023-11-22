import logo from './logo.svg';
import './App.css';
import MainRoutes from './router/MainRoutes';
import PublicRoutes from './router/PublicRoutes';
import SideBar from './Pages/SideBar/SideBar';

function App() {
  let token=localStorage.getItem("token")
  let email=localStorage.getItem('email')
  
  let main=(token||email)?<SideBar/>:<PublicRoutes/>
  return (
    <div className="App">
    {/* <PublicRoutes/>
    {token&&<SideBar/>} */}
    {main}
    

    </div>
  );
}

export default App;
