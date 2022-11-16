import React from 'react'
import './sobre.css'
import ME from '../../assets/cafe1.jpg'
import {FaAward} from 'react-icons/fa'
import {GiCoffeeBeans} from 'react-icons/gi'
import {MdCoffeeMaker} from 'react-icons/md'

const Sobre = () => {
  return (
    <section>
        <h5> Debes saber</h5>
        <h2> Sobre Mi</h2>

        <div className="container sobre__container">
            <div className="sobre_mi">
                <div className="sobre_mi-image">
                    <img src={ME} alt="yo"/>
                </div>
            </div>
        <div className="sobre__content">
            <div className="sobre__cards">
                <article className='sobre__card'>
                    <FaAward className='sobre__icon'/>
                    <h5>Cafe</h5>
                    <small>granos de cafe</small>
                </article>
                <article className='sobre__card'>
                    <GiCoffeeBeans className='sobre__icon'/>
                    <h5>Blends</h5>
                    <small>Diferentes tipos de semillas</small>
                </article>
                <article className='sobre__card'>
                    <MdCoffeeMaker className='sobre__icon'/>
                    <h5>Maquinas</h5>
                    <small>semillas para cada maquina</small>
                </article>
            </div>
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
            <a href='#contact' className='btn btn-primary'>Hablemos</a>
        </div>
        </div>
    </section>
  )
}

export default Sobre