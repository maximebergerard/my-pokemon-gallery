import { useEffect } from "react"
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
  useEffect(() => {
    // This function retrieve data
    // from pokéAPI and algolia index using browseObjects
    // it mix and format data
    // and it update the index objects using partialUpdateObjects
    formatIndexData(index, false)
  })

  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="pokemon_dataset">
        <div>
          <div className="flex mt-10 mx-8 items-center">
            <h1 className="text-4xl font-bold mr-20">
              My Poké <br />
              Gallery
            </h1>
            <SearchBox
              placeholder="Pikachu"
              autoFocus
              className="flex-1 mr-40"
            />
            <LanguageDropdown />
          </div>
          <div className="flex flex-column my-10">
            <div className="px-4">
              <RangerSlider attribute="base.HP" min={1} max={255} />
              <div>
                <p className="mb-2 text-lg font-medium text-blue-700">Type</p>
                <RefinementList
                  attribute="type"
                  searchable={true}
                  searchablePlaceholder="Electric"
                  showMore={true}
                  classNames={{
                    root: "mb-8",
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
                />
              </div>
            </div>
            <div>
              <Hits
                hitComponent={Hit}
                classNames={{
                  root: "w-full px-8",
                  list: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-flow-row-dense gap-6",
                  item: "first:rounded-md rounded-md drop-shadow-xl shadow-none",
                }}
              />
              <Pagination
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
