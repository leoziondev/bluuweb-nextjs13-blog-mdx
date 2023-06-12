interface Props {
  children: React.ReactNode
  css?: string
}

const Content = ({ children, css }: Props) => {
  return <div className={`bg-white rounded-md p-8 my-8 ${css}`}>{children}</div>
}

export default Content
