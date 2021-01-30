import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Logo com imagem de um atomo com fundo rosa e ao lado escrito React avançado na cor branca"
    />
    <S.Title>React avançado</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illutration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com códigos"
    />
  </S.Wrapper>
)

export default Main
