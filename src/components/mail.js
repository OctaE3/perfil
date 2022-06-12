import React from "react";
import emailjs from "emailjs-com";
import './section1.css';
export default function ContactUs(){

    function sendEmail(e){
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_xlhmyzl', e.target, 'ppFjVA6TKzAJE8mEZ')
      .then((result) => {
          console.log(result.text);
          alert("Mensaje enviado GRACIAS!");
      }, (error) => {
          console.log(error.text);
          alert("Error al enviar verifique los datos");
      });
      e.target.reset()
    }

    return(
        <div>
            <div>
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 from-group mx-auto">
                            <input type="text" className="form-control" placeholder="Nombre" name="name"/>
                        </div>
                        <div className="col-8 from-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Mail" name="email"/>
                        </div>
                        <div className="col-8 from-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Asunto" name="subject"/>
                        </div>
                        <div className="col-8 from-group pt-2 mx-auto">
                            <textarea type="text" className="form-control" id="" cols="30" rows="8" placeholder="Mensaje" name="message"></textarea>
                        </div>
                        <div className="col-8 from-group mx-auto">
                            <input type="submit" className="btn btn-outline-danger boton" value="Enviar"/>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )

}