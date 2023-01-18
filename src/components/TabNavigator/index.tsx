import { Tab } from '@headlessui/react'
import Link from "next/link"
import { ButtonSignIn, ConfirmPassCheckbox, ConfirmPassContainer, Form, FormContainer, FormContent, LoginTab } from "../Login/style"

export default function TabNavigator() {
  return (
    <FormContainer>
      <Form>
          <Tab.Group>
          <Tab.List>
            <LoginTab>
              <Tab>Login</Tab>
              <Tab>Cadastre-se</Tab>
            </LoginTab>
          </Tab.List>
          <Tab.Panels>

            <Tab.Panel>
              <FormContent>
                <label htmlFor="">E-mail</label>
                <input type="email" placeholder="email" />
                <label htmlFor="">Senha</label>
                <input type="password" placeholder="password" />

                <ConfirmPassContainer>
                  <ConfirmPassCheckbox>
                    <input type="checkbox" name="lembrar" id="" />
                    Lembrar-me
                  </ConfirmPassCheckbox>
                  <Link href="">Esqueceu a senha?</Link>
                </ConfirmPassContainer>
                
                <ButtonSignIn>Entrar</ButtonSignIn>
              </FormContent>
            </Tab.Panel>

            <Tab.Panel>
            <FormContent>
              <label htmlFor="">E-mail</label>
                <input type="email" placeholder="email" />
                <label htmlFor="">Senha</label>
                <input type="password" placeholder="password" />

                <ConfirmPassContainer>
                  <ConfirmPassCheckbox>
                    <input type="checkbox" name="lembrar" id="" />
                    Lembrar-me
                  </ConfirmPassCheckbox>
                  <Link href="">Esqueceu a senha?</Link>
                </ConfirmPassContainer>
                <ButtonSignIn>Cadastre-se</ButtonSignIn>
              </FormContent>
            </Tab.Panel>
          </Tab.Panels>
          </Tab.Group>
      </Form>
    </FormContainer>
  )
}
