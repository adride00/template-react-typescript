import { useContext } from 'react'
import './Header.scss'
import { AppContext } from '../../context/AppContext'

export const Header = () => {
  return (
    <header className="Header">
      <div className="Header-container">
        <Logo />
        <Nav />
      </div>
    </header>
  )
}

const Logo = () => {
  return (
    <h1 className="Header">
      <a href="/" className='Header-logo'>
        <img src="/logo.svg" alt="logo" className='Header-img' />
      </a>
    </h1>
  )
}

const Nav = () => {
  const { header } = useContext(AppContext)
  const { menu } = header
  return (
    <nav className="Header-nav">
      <ul className="Header-ul">
        {
          menu.map(({ id, title, href }) => {
            return (
              <li key={id} className="Header-li">
                <a className='' href={href}>{title}</a>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

const Rrss = () => {
  const { header } = useContext(AppContext)
  const { rrss } = header
  return (
    <ul className="Header-rrss">
      {
        rrss.map(({ id, title, href, icon }) => {
          return (
            <li key={id} className='Header-li'>


              <a key={id} className='Header-rs' href={href} title={title}>
                {title}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}

const icon = (icon: string) => {
  return (
    <i className={`Header-rrss-icon ${icon}`}></i>
  )
}