import React from 'react'
import CV from '../../assets/cristiancv.pdf'

const Foto = () => {
  return (
    <div className='Foto'>
        <a href={CV} download  className='btn'>Descarga mi CV</a>
        <a href='#contact' className='btn btn-primary'>Hablemos!</a>

    </div>
  )
}

export default Foto