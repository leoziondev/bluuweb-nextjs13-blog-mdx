interface Props {
  children: React.ReactNode
  css?: string
}

const Content = ({ children, css }: Props) => {
  return <div className={`my-8 rounded-md p-8 ${css}`}>{children}</div>
}

export default Content
