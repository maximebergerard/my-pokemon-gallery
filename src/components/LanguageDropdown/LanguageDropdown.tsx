import React, { useContext } from "react"
import LanguageContext, {
  LanguageContextProps,
} from "../../contexts/LanguageContext"

const LanguageDropdown = () => {
  const { language, setLanguage } = useContext(
    LanguageContext,
  ) as LanguageContextProps

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedValue = event.target.value
    setLanguage(selectedValue)
  }

  return (
    <select
      className="text-white h-10 bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-3 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700"
      value={language}
      onChange={handleLanguageChange}
    >
      <option value="fr">French</option>
      <option value="en">English</option>
      <option value="ja">Japanese</option>
      <option value="zh">Chinese</option>
    </select>
  )
}

export default LanguageDropdown
