import logo from './logo.svg';
import './App.css';
import {db} from './firebase.js'
import {useEffect, useState} from 'react';

function App() {

  const [user, setUser] = useState(null);

  useEffect(()=>{
    console.log(db)
  },[])

  
  return (
    <div className="App">
      <div className="header">
    <div className="center">
        <div className="header_logo">
          <a href=""><img src="https://ignicaodigital.com.br/wp-content/uploads/2016/10/instagram-1594387_640.png"/></a>
        </div>

        {
        (user)?
        <div>Olá Victor</div>
        :
        <div className="header_loginForm">
          <form>
            <input type="text" placeholder="Login"  />
            <input type="password" placeholder="Senha"  />
            <input type="submit" name="action" value="Logar!" />
          </form>
        </div>

        }



      </div>
    </div>

    </div>
  );
}

export default App;
