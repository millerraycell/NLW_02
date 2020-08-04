import React from 'react';
import whatsappIcon from "../../assets/images/whatsapp.svg"
import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/39956685?s=460&u=ea066e6fe98e74c63b7b1735e8d9cbf3999cb8eb&v=4" 
                alt="Miller"/>

                <div>
                    <strong>Miller Raycell</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Teste
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$80.00</strong>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em contato
                    </button>
                </p>
            </footer>
        </article>
    );
}

export default TeacherItem;