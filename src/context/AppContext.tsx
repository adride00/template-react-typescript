import { createContext } from "react"
import { v4 as uuidv4 } from "uuid"
import { Menu } from "../interfaces/interfaces"

const INITIAL_STATE = {
  header: {
    menu: [
      { id: uuidv4(), title: "Home", href: "#" },
      { id: uuidv4(), title: "Movies", href: "#" },
      { id: uuidv4(), title: "Games", href: "#" },
      { id: uuidv4(), title: "Experiences", href: "#" },
      { id: uuidv4(), title: "Community", href: "#" },
      { id: uuidv4(), title: "Publishing", href: "#" },
      { id: uuidv4(), title: "partnerships", href: "#" },
      { id: uuidv4(), title: "Our team", href: "#" },
    ],
    rrss: [
      { id: uuidv4(), title: "Facebook", href: "#", icon: "facebook" },
      { id: uuidv4(), title: "Twitter", href: "#", icon: "twitter" },
      { id: uuidv4(), title: "Instagram", href: "#", icon: "instagram" },
      { id: uuidv4(), title: "Youtube", href: "#", icon: "youtube" },
    ],
    hero: {
      h2: "Avatar the way of water",
      claim: "The most awaited movie of the year",
      buttons: [
        { id: uuidv4(), title: "Buy tickets", href: "#" },
        { id: uuidv4(), title: "Watch trailer", href: "#" },
      ],
    }
  }
}

interface props {
  children: JSX.Element | JSX.Element[]
}

export const AppContext = createContext(INITIAL_STATE)

export const AppProvider = ({ children }: props) => {
  return (
    <AppContext.Provider value={INITIAL_STATE}>
      {children}
    </AppContext.Provider>
  )
}

