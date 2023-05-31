import React from "react";
import { SlEnvolopeLetter } from "react-icons/sl";

export default function NewsLetter() {
  return (
    <section className="flex items-center justify-between py-2 my-6">
      <div className="flex items-center gap-4">
        <SlEnvolopeLetter size={40} />
        <div>
          <span>Inscreva-se em nossa newsletter</span>
          <p>para receber nossas ultimas noticias e descontos exclusivos.</p>
        </div>
      </div>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Digite aqui o seu e-mail.."
          className="border-[1px] border-gray-100 p-2"
        />
        <button type="button" className="bg-red text-white p-2 rounded-lg">
          Inscrever
        </button>
      </div>
    </section>
  );
}
