import './App.css'
import { useRoutes } from 'react-router-dom';

//Component :
import {Navbar} from './components/navbar/navbar.js'
import {Error} from './components/error/error.js'

//Pages :
import {Acceuil} from './components/pages/acceuil/acceuil.js'
import {About} from './components/pages/about/about.js'
import {Liste} from './components/pages/liste/liste.js'
import {Element} from './components/pages/liste/public/components/element/element.js'

export const App = () => {

  let routes = useRoutes([
    {
      path: '/',
      element: <Acceuil/>
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/liste',
      element: <Liste/>,
      children : [
          {
              path : "./liste/:element",
              element : <Element/>
          }
      ]
    },
    {
        path : "*",
        element : <Error />
    }
])

  return(
    <div className="App">
      <Navbar /> 
      {routes}
    </div>
  )
}