import React from 'react'

export const Footer = () => {
  let footerStyle=
  {
    position:'relative',
    top:"150vh",
    width:'100%',
    border:'2px solid red'
  }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className='text-center'></p>
      Copyright &copy; MyTodosList.com</footer>
  )
}
export default Footer;