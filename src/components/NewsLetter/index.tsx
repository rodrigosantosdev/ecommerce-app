import React from 'react'
import { SlEnvolopeLetter } from 'react-icons/sl'
import { NewsContainer, NewsBox, NewsForm, NewsTxt } from "./style"

export default function NewsLetter() {
  return (
    <NewsContainer>
      <NewsBox>
        <SlEnvolopeLetter size={40}/>
        <NewsTxt>
          <span>Inscreva-se em nossa newsletter</span>
          <p>para receber nossas ultimas noticias e descontos exclusivos.</p>
        </NewsTxt>
      </NewsBox>
      <NewsForm>
        <input type="text" placeholder="Digite aqui o seu e-mail.." />
        <button>Inscrever</button>
      </NewsForm>
    </NewsContainer>
  )
}
