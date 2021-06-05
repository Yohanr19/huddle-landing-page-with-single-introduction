import React from 'react'
import Attribution from './Attribution'
import Intro from './HuddleIntro'
import Register from './Register'
import Icons from './Icons'

const App = () => {
    return (
        <div>
      <div  id='main-wrapper'> 
        <Intro/>
        <div id='main-content'>
             <Register/>
              <Icons/>
        </div>
        </div>
 <footer>
 <Attribution/>
 </footer>
        </div>
    )
}
export default App

