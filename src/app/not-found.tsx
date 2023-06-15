import Link from 'next/link'

import Container from '../components/ui/Container'

const NotFound = () => {
  return (
    <Container>
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-7xl font-bold">404</h1>
        <p>Não encontramos o que você está procurando</p>
        <Link
          href="/posts"
          className="bg-indigo-500 hover:bg-indigo-700 text-white rounded-md inline-block py-2 px-4 mt-8"
        >
          Voltar
        </Link>
      </div>
    </Container>
  )
}

export default NotFound
