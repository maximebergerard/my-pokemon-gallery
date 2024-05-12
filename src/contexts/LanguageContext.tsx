import { createContext } from "react"

export interface LanguageContextProps {
  language: string
  setLanguage: (language: string) => void
}

const LanguageContext = createContext<LanguageContextProps | null>(null)

export default LanguageContext
