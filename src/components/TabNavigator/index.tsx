import { Tab } from '@headlessui/react'
import Link from "next/link"

export default function TabNavigator() {
  return (
    <section>
      <form>
          <Tab.Group>
          <Tab.List>
            <div>
              <Tab>Login</Tab>
              <Tab>Cadastre-se</Tab>
            </div>
          </Tab.List>
          <Tab.Panels>

            <Tab.Panel>
              <form>
                <label htmlFor="">E-mail</label>
                <input type="email" placeholder="email" />
                <label htmlFor="">Senha</label>
                <input type="password" placeholder="password" />

                <div>
                  <div>
                    <input type="checkbox" name="lembrar" id="" />
                    Lembrar-me
                  </div>
                  <Link href="">Esqueceu a senha?</Link>
                </div>
                
                <button>Entrar</button>
              </form>
            </Tab.Panel>

            <Tab.Panel>
            <form>
              <label htmlFor="">E-mail</label>
                <input type="email" placeholder="email" />
                <label htmlFor="">Senha</label>
                <input type="password" placeholder="password" />

                <button>
                  <button>
                    <input type="checkbox" name="lembrar" id="" />
                    Lembrar-me
                  </button>
                  <Link href="">Esqueceu a senha?</Link>
                </button>
                <button>Cadastre-se</button>
              </form>
            </Tab.Panel>
          </Tab.Panels>
          </Tab.Group>
      </form>
    </section>
  )
}
