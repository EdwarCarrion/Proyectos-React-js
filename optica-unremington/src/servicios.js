import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import image1 from'./images/images/image1.jpg';
import image2 from'./images/images/image2.jpg';
import image3 from'./images/images/image3.jpg';
import image4 from'./images/images/image4.jpg';
import image5 from'./images/images/image5.jpg';
import image6 from'./images/images/image6.jpg';
import image7 from'./images/images/image7.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function App() {
  return (

    <div className="App">
      <header class="header">

<div class="menu container">

    <a href="#" class="Logo">Optica Uniremington</a>
    <input type="checkbox" id="menu" />
    <label for="menu">
        <img src="images/images/menu.png" class="menu-icono" alt="menu"/>

    </label>

    <nav class="royers">
        <ul>
        <li><a href="App.js">Inicio</a></li> 
          <li><a href="#">Servicios</a></li> 
          <li><a href="#">Productos</a></li> 
          <li><a href="#">Contacto</a></li>  
          <li><a href="#">Ubicacion</a></li>
        </ul>

    </nav>

</div>


        <div class="header-content container">
            <div class="header-txt">
                <h1>Buscas Info <span>Aqui</span> <br/>La Encontraras</h1>
                <p>
                    En este lugar te asesoramos para que puedas encontrar la mejor
                    experiencia a la hora de encontrar, tus gafas, como tambien del
                    cuidado de sus ojos, con los diferentes tratamientos asignados,
                    por nuestros mejores medicos.
                </p>
                <div class="buttons">
                
                    <a href="#" class="btn-4">Doctores</a>
                    <a href="#" class="btn-4">Contactanos</a>

                </div>

            </div>

        </div>

    </header>

    <main class="services container">
        <h2>Servicios</h2>
        <p class="txt-1"> contamos con la mejor asesoria experta
            en tecnologia, tanto en gafas de proteccion diaria
            como de todas las gafas de video juegos que te imagines
            como tambien, de cada uno de los tratamientos de los 
            ojos y sus respectivas cirujias si son necesarias

        </p>

        <div class="group-service">

            <div class="service">
            <img src={image1} alt=""/>
                <h3>Servicio 1</h3>
                <p>todo sobre gotas</p>

                <a href="#" class="btn-1">Mas Informacion</a>

            </div>

            

            <div class="service">
            <img src={image2} alt=""/>
                <h3>Servicio 1</h3>
                <p>todo sobre gafas</p>

                <a href="#" class="btn-1">Mas Informacion</a>

            </div>

            <div class="service">
            <img src={image3} alt=""/>
                <h3>Servicio 1</h3>
                <p>todo sobre gotas de video juegos</p>

                <a href="#" class="btn-1">Mas Informacion</a>

            </div>

        </div>



    </main>

    <section class="portafolio container">
        <div class="portafolio-txt">
        <h2>Portafolio</h2>
        <p>
            aca encontraras la variedad de productos que tenemos
            disponibles para tu gusto, tanto formuladas por 
            nuestros medicos, como de nuestrso expertos en tecnologia
        </p>
    </div>

        <div class="imgs">
        <img src={image4} alt=""/> 
        <img src={image5} alt=""/>
        <img src={image6} alt=""/>
        <img src={image7} alt=""/>

        </div>

        <a href="#" class="btn-1">Mas Informacion</a>

    </section>


    <section class="bg-sec">
        <div class="bg-txt container">
        <h2>Informacion</h2>
        <p>
            aca encontraras la variedad de productos que tenemos
            disponibles para tu gusto, tanto formuladas por 
            nuestros medicos, como de nuestrso expertos en tecnologia
        </p>
    </div>

    </section>


    <section class="prices container">
        <div class="price">
            <h3>$150.000</h3> 
            <ul>
                <li>PRADA</li>
                <li>GUCCI</li>
                <li>PERSOL</li>
                <li>TOM FORD</li>
                <li>VOGUE</li>
            </ul>
            <a href="#" class="btn-1">Mas Informacion</a>

        </div>

        <div class="price">
            <h3>$220.000</h3> 
            <ul>
                <li>RAY-BAN</li>
                <li>ARNETTE</li>
                <li>OAKLEY</li>
                <li>DIOR</li>
                <li>LACOSTE</li>
            </ul>
            <a href="#" class="btn-1">Mas Informacion</a>

        </div>

        <div class="price">
            <h3>$190.000</h3> 
            <ul>
                <li>BOSS</li>
                <li>ADIDAS</li>
                <li>PUMA</li>
                <li>BOSSE</li>
                <li>PARIS</li>
            </ul>
            <a href="#" class="btn-1">Mas Informacion</a>

        </div>

    </section>

    <section class="contacto container">
        <div class="contacto-content">
        <h3>ENVIANOS TU CORREO PARA MAS INFORMACION</h3>

<form>
<input type="Email" placeholder="Escribe tu correo"></input>
<input type="submit" class="btn-3" value="Enviar"></input>

</form>

        </div>

        </section>
        
    
        <footer class="footer container">

            <div class="link">
                <a href="#" class="Logo">Optica Uniremington</a>
    
            </div>
    
            <div class="link">
                <ul>
                    <li><a href="#">FACEBOOK</a></li>
                    <li><a href="#">TIKTOK</a></li>
                    <li><a href="#">YOUTUBE</a></li>
                    <li><a href="#">INSTAGRAM</a></li>
                    <i class="fa-brands fa-facebook"></i>
                </ul>
    
            </div>


    </footer>
    </div>

);
}

export default App;
