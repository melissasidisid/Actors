
import React, { useEffect, useState } from 'react'
import Card from './component/card'
import './App.css'


function App() {
    const fetching='https://api.themoviedb.org/3/person/popular?api_key=65e21a6acffd40b8b9411689bfb53e82&append_to_response'
    const API_Search='https://api.themoviedb.org/3/search/person?api_key=65e21a6acffd40b8b9411689bfb53e82&query='
    const [movies,setmovies]=useState([])
    const [term,setTerm]=useState('')
    useEffect(()=>{
        fetch(fetching)
        .then(res=>res.json())
        .then(data=>setmovies(data.results))
       
         
      },[])
      
  
    console.log(movies)
    const handlesearch=(e)=>{
        e.preventDefault()
        fetch(API_Search + term)
        .then(res=>res.json())
        .then(data=>setmovies(data.results))
    }
   
    
  return (
    <div className="p-3 mb-2 bg-dark" >
        <div className="searchbar">
           <div className="container-fluid">
              
           <nav className="navbar navbar-expand-lg  navbar-dark ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
    </button>
   
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
        <li className="nav-item ">
         <a className="nav-link active " aria-current="page" href="#">Home</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
         <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
         <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
        <form className="d-flex" role="search"onSubmit={handlesearch}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  onChange={(e)=>setTerm(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
      </form>
    </div>
  </div>
</nav>
    
  </div>
        </div>
        <div className="movies" >
  {movies.map((movie)=>
  <Card {...movie}/>
  )}
</div>

    </div>
  )
}

export default App