import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header(){
  return (
    <Container>
      <Profile to="/profile">
        <img src="http://github.com/Viiniciusgm.png"
        alt="Foto do usuário"/>

        <div>
          <span>Bem-vindo</span>
          <strong>Vinicius Martins</strong>
        </div>
      </Profile>

    <Logout>
      <RiShutDownLine />
    </Logout>

    </Container>
  )
}