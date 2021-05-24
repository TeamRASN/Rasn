import React, { Component } from 'react'
import "../sass/contacto.css";


export default class Contacto extends Component {
	render() {
		return<div>
            
            <div class="form">
                <form method="post">
                    <div class="all">
                        <h1 class="titulo"><b>Realiza las consultas necesarias!!!</b></h1>
                        <div >
                            <p class="consultanos">Contanos tu problema:</p>
                            <ul>
                                <textarea  name="consultanos" rows="15" cols="20" placeholder="Hola! Dejanos todas tus dudas en esta seccion!"></textarea>
                            </ul>
                        </div>

                        <div>
                            <p class="email">Email:</p>
                            <ul>
                                <input type="email" name="email" class="email_cont" placeholder="esteban.gimenez123@gmail.com"/>
                            </ul>
                        </div>
                        <ul>
                            <input type="submit" class="send" />
                        </ul>
                    </div>
                </form>
             </div>
        </div>;
	}
}
