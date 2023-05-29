import React from 'react'
import { SlEnvolopeLetter } from 'react-icons/sl'

export default function NewsLetter() {
  return (
    <section>
      <div>
        <SlEnvolopeLetter size={40}/>
        <div>
          <span>Inscreva-se em nossa newsletter</span>
          <p>para receber nossas ultimas noticias e descontos exclusivos.</p>
        </div>
      </div>
      <div>
        <input type="text" placeholder="Digite aqui o seu e-mail.." />
        <button>Inscrever</button>
      </div>
    </section>
  )
}
