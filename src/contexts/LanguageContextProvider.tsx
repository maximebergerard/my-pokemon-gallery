import React, { useCallback, useEffect, useState } from "react"
import LanguageContext from "./LanguageContext"

interface LanguageContextProviderProps {
  children: React.ReactNode
}

const LanguageContextProvider = ({
  children,
}: LanguageContextProviderProps) => {
  const [language, setLanguageState] = useState<string>("fr")

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language")
    if (storedLanguage) {
      setLanguageState(storedLanguage)
    }
  }, [])

  const setLanguage = useCallback((language: string) => {
    setLanguageState(language)
    localStorage.setItem("language", language)
  }, [])

  const value = {
    language,
    setLanguage,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContextProvider
