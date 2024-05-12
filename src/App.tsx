import { useEffect, useState } from "react"
import algoliasearch from "algoliasearch"
import {
  InstantSearch,
  RefinementList,
  SearchBox,
  Hits,
  Pagination,
} from "react-instantsearch"
import Hit from "./components/Card/Hit"

import formatIndexData from "./utils/formatIndexData"
import RangerSlider from "./components/RangeSlider/RangeSlider"
import LanguageDropdown from "./components/LanguageDropdown/LanguageDropdown"

const searchClient = algoliasearch(
  "3O2NY7LK83",
  "0f425df386c0ff977e6f08b26c581e7e",
)

const index = searchClient.initIndex("pokemon_dataset")

const App = () => {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    // This function retrieve data from pokéAPI and algolia index using browseObjects
    // It mix and format data
    // And it update the index objects using partialUpdateObjects
    formatIndexData(index, false)
  })

  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="pokemon_dataset">
        <div>
          <div className="flex justify-center mt-10 mx-8 md:items-end flex-col md:flex-row">
            <div className="flex flex-col w-full md:w-1/2 md:ml-16 mr-8">
              <h1 className="text-4xl font-bold mb-4">My Poké Gallery</h1>
              <SearchBox
                placeholder="Pikachu"
                autoFocus
                className="flex-1 w-full mb-4 md:mb-0"
              />
            </div>
            <LanguageDropdown />
          </div>
          <div className="flex flex-column my-10">
            {isOpen ? (
              <div className="drop-shadow-md md:relative absolute z-20">
                <div className="px-8 py-4 bg-white rounded-r-md relative h-fit">
                  <div
                    className="cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-6 h-10 absolute right-0 z-10">
                      <div className="absolute bg-blue-600 w-3 h-3 rotate-45" />
                      <div className="absolute bg-white w-3 h-3 rotate-45 translate-x-1" />
                    </div>
                    <div className="w-6 h-10 absolute right-2 z-0">
                      <div className="absolute bg-blue-600 w-3 h-3 rotate-45" />
                      <div className="absolute bg-white w-3 h-3 rotate-45 translate-x-1" />
                    </div>
                  </div>
                  <RangerSlider attribute="base.HP" min={1} max={255} />
                  <div>
                    <p className="mb-2 text-lg font-medium text-blue-700">
                      Type
                    </p>
                    <RefinementList
                      attribute="type"
                      searchable={true}
                      searchablePlaceholder="Electric"
                      showMore={true}
                      classNames={{
                        root: "mb-8",
                        showMore: "h-8 w-full border-indigo-50",
                      }}
                    />
                  </div>
                  <div>
                    <p className="mb-2 text-lg font-medium text-blue-700">
                      Game version
                    </p>
                    <RefinementList
                      attribute="game_versions"
                      searchable={true}
                      searchablePlaceholder="Yellow"
                      showMore={true}
                      classNames={{
                        showMore: "h-8 w-full border-indigo-50",
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="flex justify-center items-center w-8 md:w-16 h-10 bg-white rounded-r-lg md:relative fixed z-20 drop-shadow-md"
                onClick={() => setIsOpen(true)}
              >
                <div className="cursor-pointer">
                  <div className="w-5 h-1 bg-blue-700 rounded-md " />
                  <div className="mt-1 w-5 h-1 bg-blue-700 rounded-md" />
                  <div className="mt-1 w-5 h-1 bg-blue-700 rounded-md" />
                </div>
              </div>
            )}
            <div className="w-full">
              <Hits
                hitComponent={Hit}
                classNames={{
                  root: "w-3/4 w-full px-4 md:px-8",
                  list: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-flow-row-dense gap-2 md:gap-6",
                  item: "first:rounded-md rounded-md drop-shadow-xl shadow-none p-0 bg-transparent",
                }}
              />
              <Pagination
                totalPages={5}
                classNames={{
                  root: "mt-8 flex justify-center",
                }}
              />
            </div>
          </div>
        </div>
      </InstantSearch>
    </>
  )
}

export default App
