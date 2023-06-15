import ButtonBack from '../components/ui/ButtonBack'
import Container from '../components/ui/Container'

const NotFound = () => {
  return (
    <Container>
      <div className="flex min-h-[300px] flex-col items-center justify-center">
        <div className="mb-8 text-center">
          <h1 className="text-7xl font-bold">404</h1>
          <p>Não encontramos o que você está procurando</p>
        </div>
        <ButtonBack>Voltar</ButtonBack>
      </div>
    </Container>
  )
}

export default NotFound
