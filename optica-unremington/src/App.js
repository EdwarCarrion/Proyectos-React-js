
/*import logo from './logo.svg';*/
import './App.css';

import img1 from'./images/images/img1.jpg';
import img2 from'./images/images/img2.jpg';
import img3 from'./images/images/img3.jpg';
import img4 from'./images/images/img4.jpg';
import img5 from'./images/images/img5.jpg';
import img6 from'./images/images/img6.jpg';
import img7 from'./images/images/img7.jpg';

import image1 from'./images/images/image1.jpg';
import image2 from'./images/images/image2.jpg';
import image3 from'./images/images/image3.jpg';
import image4 from'./images/images/image4.jpg';
import image5 from'./images/images/image5.jpg';
import image6 from'./images/images/image6.jpg';
import image7 from'./images/images/image7.jpg';
import image8 from'./images/images/image8.jpg';
import image9 from'./images/images/image9.jpg';
import image10 from'./images/images/image10.jpg';
import image11 from'./images/images/image11.jpg';




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
          <li><a href="*">Inicio</a></li> 
          <li><a href="index.js">Servicios</a></li> 
          <li><a href="#">Productos</a></li> 
          <li><a href="#">Contacto</a></li>  
          <li><a href="#">Ubicacion</a></li>
        </ul>

    </nav>

</div>

<div class="header-content container">
    <div class="header-txt">
        <h1>Compra tus <span>Gafas</span> <br/>Acordes a Ti</h1>
        <p>
            En esta pagina web podran encontrar todo lo referente.
            a todo tipo de gafas, como lo son de proteccion y 
            tambien para eventos especiales como lo son juegos de
            video y hasta de animacion virtual, tambien encontraras
            todo tipo de gafas de sol y formuladas por nuestros doctores.
        </p>
        <div class="buttons">
            <a href="#" class="btn-1">Informacion</a>
            <a href="#" class="btn-1">Gafas</a>
            <a href="#" class="btn-1">Gotas</a>

        </div>

    </div>

</div>



</header>

<section class="popular container">
        <h2>Gafas mas Compradas</h2>

        <div class="popular-content">
            <img src={img1} alt=""/>
            <img src={img2} alt=""/>
            <img src={img3} alt=""/>
            <img src={img4} alt=""/>
            <img src={img5} alt=""/>
            <img src={img6} alt=""/>
            <img src={img7} alt=""/>
            

        </div>

    </section>

    <main class="producto container">
        <h2>Todas Las Gafas</h2>
        <div class="producto-content">

          <div class="producto-1">
          <img src={image1} alt=""/>
        <div class="producto-txt">
            <h3>AVIATOR</h3>
            <div class="price">
                <p>$350.000</p>
                <a href="#" class="btn-2">Comprar</a>
            </div>
        </div>
    </div>

    <div class="producto-1">
    <img src={image2} alt=""/>
        <div class="producto-txt">
            <h3>ROUND FROME</h3>
            <div class="price">
                <p>$250.000</p>
                <a href="#" class="btn-2">Comprar</a>
            </div>
        </div>
    </div>

    <div class="producto-1">
    <img src={image3} alt=""/>
        <div class="producto-txt">
            <h3>CATEYE</h3>
            <div class="price">
                <p>$175.000</p>
                <a href="#" class="btn-2">Comprar</a>
            </div>
        </div>
    </div>

    <div class="producto-1">
    <img src={image4} alt=""/>
        <div class="producto-txt">
            <h3>RETRO SQUARE</h3>
            <div class="price">
                <p>$950.000</p>
                <a href="#" class="btn-2">Comprar</a>
            </div>
        </div>
    </div>

    <div class="producto-1">
    <img src={image5} alt=""/>
        <div class="producto-txt">
            <h3>CELINE</h3>
            <div class="price">
                <p>$350.000</p>
                <a href="#" class="btn-2">Comprar</a>
            </div>
        </div>
    </div>

    <div class="producto-1">
    <img src={image6} alt=""/>
        <div class="producto-txt">
            <h3>GUCCI</h3>
            <div class="price">
                <p>$650.000</p>
                <a href="#" class="btn-2">Comprar</a>
            </div>
        </div>
    </div>

    <div class="producto-1">
    <img src={image7} alt=""/>
        <div class="producto-txt">
            <h3>DIOR</h3>
            <div class="price">
                <p>$850.000</p>
                <a href="#" class="btn-2">Comprar</a>
            </div>
        </div>
    </div>

    <div class="producto-1">
    <img src={image8} alt=""/>
        <div class="producto-txt">
            <h3>RAY-BANK</h3>
            <div class="price">
                <p>$500.000</p>
                <a href="#" class="btn-2">Comprar</a>
            </div>
        </div>
    </div>

    <div class="producto-1">
    <img src={image9} alt=""/>
        <div class="producto-txt">
            <h3>HEARD SHAPED</h3>
            <div class="price">
                <p>$350.000</p>
                <a href="#" class="btn-2">Comprar</a>
            </div>
        </div>
    </div>

    <div class="producto-1">
    <img src={image10} alt=""/>
        <div class="producto-txt">
            <h3>PLAYER GAME</h3>
            <div class="price">
                <p>$2.050.000</p>
                <a href="#" class="btn-2">Comprar</a>
            </div>
        </div>
    </div>

    <div class="producto-1">
    <img src={image11} alt=""/>
        <div class="producto-txt">
            <h3>REALIDAD VIRTU</h3>
            <div class="price">
                <p>$1.050.000</p>
                <a href="#" class="btn-2">Comprar</a>
            </div>
        </div>
    </div>

</div>

    </main>

    <section class="contacto container">

        

        <h3>ENVIANOS TU CORREO PARA MAS INFORMACION</h3>

        <form>
        <input type="Email" placeholder="Escribe tu correo"></input>
        <input type="submit" class="btn-3" value="Enviar"></input>

        </form>

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
