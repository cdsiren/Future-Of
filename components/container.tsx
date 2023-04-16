type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="max-w-screen mx-auto p-8 w-full">{children}</div>
}

export default Container
