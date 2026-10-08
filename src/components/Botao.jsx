const Botao = ({ children, className }) => {
  return (
    <div>
        <a className={className}>{children}</a>
    </div>
  )
}

export default Botao
