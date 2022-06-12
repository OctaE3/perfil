import React from 'react'
import './section1.css';
import yo from './extras/yo.png';
import cv from './extras/CV.pdf';
import { BsFillFilePersonFill, BsBank, BsGlobe2, BsLinkedin, BsFillFileEarmarkPdfFill} from "react-icons/bs";
import { AiOutlineMobile, AiOutlineMail} from "react-icons/ai";
import ContactUs from './mail';

import {Button} from 'react-bootstrap';
function section1() {
  return (
    <div className='back' id="ini">
        <div>
        <div className='div1'>
            <img className='images' alt='Imagen' src={yo}/>
        </div>
        <div className='div2' >
            Octavio Etchevarrén
        </div>
        </div>
        <div className='title' id="pre"> <BsFillFilePersonFill/> Perfil</div>
        <div className='content' >
            <div className='subtitle'>Nombre</div> 
            <div className='desc'>Octavio Etchevarrén Rivero</div>
            <div className='subtitle'>Email</div>
            <div className='desc'>octae3@gmail.com</div>
            <div className='subtitle'>Celular</div>
            <div className='desc'>094516947</div>
            <div className='subtitle'>Dirección</div>
            <div className='desc'>Calle Los Horneros S/N, Juan Lacaze</div>
            <div className='subtitle'>Fecha de nacimiento</div>
            <div className='desc'>03/01/2003</div>
            <div className='subtitle'>Idiomas</div>
            <div className='desc'>Español - Nativo</div>
            <div className='desc'>Ingles - Nivel Intermedio (B1 - Cambridge)</div>
        </div>
        <div className='title' id="ed" > <BsBank/> Educación</div>
        <div className='content'>
            <div className='subtitle'>Escuela Primaria ---- (mar 2009 - dic 2014)</div>
            <div className='desc'>Puerto Sauce, Juan Lacaze</div>
            <div className='subtitle'>Ciclo Básico ---- (mar 2015 - dic 2017)</div>
            <div className='desc'>Escuela Técnica Juan Lacaze, Juan Lacaze</div>
            <div className='subtitle'>Bachillerato Informática ---- (mar 2018 - nov 2020)</div>
            <div className='desc'>Escuela Técnica Colonia, Colonia del Sacramento</div>
            <div className='subtitle'>Analista Programador ---- (mar 2021 - cursando)</div>
            <div className='desc'>CTC Rosario, Rosario</div>
        </div>
        <div className='title'  id="con"> <BsGlobe2/> Contacto</div>
        <div className='row'>
            <div className='col-8'>
                 <ContactUs/>
             </div>
        <div className='col-4'>
            <div className='center'>
            <Button className='boton' variant="outline-danger" href="https://www.linkedin.com/in/octavio-etchevarren-b6b873219/"> <BsLinkedin/> </Button>
            <div className='cont'> <AiOutlineMail/> octae3@gmail.com</div>
            <div className='cont'> <AiOutlineMobile/> 094516947</div>
            <div className='cont'>Mi CV : <Button className='boton' variant="outline-danger" href={cv} target="_blank" rel="noopener noreferrer" download="CV_Octavio_Etchevarren.pdf"> <BsFillFileEarmarkPdfFill/> </Button></div>
            </div>
        </div>
        </div>
        <div className='title'></div>
        <div className='cont'>
        <br></br>  
        </div>
  
    </div>
  )
}

export default section1