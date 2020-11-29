import React from 'react'
import './styles.css'
import "bootstrap/dist/css/bootstrap.min.css"
// import 'bootswatch/dist/lux/bootstrap.min.css'
export const Home = () => (
    <div>
    <header>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <p className="text-muted">Puede ir mas informacion pro</p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">Mas funciones</a></li>
                <li><a href="#" className="text-white">Mas funciones</a></li>
                <li><a href="#" className="text-white">Mas funciones</a></li>
        
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark box-shadow">
        <div className="container d-flex justify-content-between">
          <a href="#" className="navbar-brand d-flex align-items-center">
            
            <strong>Predicción de crimen violento empleando regresiones y optimización</strong>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </div>
    </header>
    <main role="main">
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Prediccion de Alcaldias</h1>
          <p className="lead text-muted">En la actualidad, el crimen siempre ha sido un tema sensible para la sociedad y afecta de manera directa la vida diaria y el desarrollo de la misma, por ello, crear una herramienta que ayude a resolver el problema es de suma importancia.</p>
          <p>
            <a href="#" className="btn btn-primary my-2">Analisis Correlacional</a>
            <a href="#" className="btn btn-secondary my-2">Analisis Predictivo</a>
          </p>
        </div> 
      </section>
      <div className="album py-5 bg-light">


          <div>
              <p>mapa</p>
              <img  src="https://www.google.com/maps/d/thumbnail?mid=1a6mrdX9IO7R_qoe7t_twhAwGoHM" />
          </div>

      </div> 
    </main>
    <footer className="text-muted">
      <div className="container">
        <p className="float-right">
          <a href="#">Subir al inicio</a>
        </p>
        <p>Aqui van muchos agardecimientos</p>

      </div>
    </footer>
  </div>

)

