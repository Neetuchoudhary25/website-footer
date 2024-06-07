import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    
      <div className='mainfooter'>

        <div className='firstfooter'>
          <h2>Laxmi Devi Institute of 
            <br />Engineering And Technology</h2>
            <p> Alwar-Tijara-Delhi Highway </p> 
             
              <p>Chikani,Alwar,Rajasthan</p>
             
              <p>India - 301028</p>
            
            <h3>+91-7073477274 </h3>
              <h3> +91-9829103101</h3>
              
             <p>
              director@lietalwar.org
            </p>
      </div>
      

        <div className='secondfooter'>
         <h3> Quick Links</h3>
         <p> <a href="">About Us</a></p>
          <p> <a href="">Admission</a></p>
          <p> <a href="">Apply @ LIET</a></p>
          <p> <a href="">Board of Management</a></p>
          <p> <a href="">Grievance Redressal</a></p>
  
        </div>
        <div className='thirdfooter'>
          <h3>Courses</h3>
          <p> <a href="">B.Tech</a></p>
          <p> <a href="">M.Tech</a></p>
          <p> <a href="">MBA</a></p>
          <p> <a href="">Polytechnic</a></p>
        </div>
        <div className='fourthfooter'>
          <h3>External Links</h3>
          <p> <a href="">AICTE</a></p>
          <p> <a href="">BTU</a></p>
          <p> <a href="">BTER</a></p>
          <p> <a href="">DELNET</a></p>
        </div>
      </div>

      <div className='copyright'>
        <div>
          <p>Copyright All Right Reserved 2023,LIET</p>
        </div>
        
      </div>
    </>
  )
}

export default App
