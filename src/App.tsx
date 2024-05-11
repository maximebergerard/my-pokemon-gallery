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
import RangerSlider from "./components/RangeSlider"

const searchClient = algoliasearch(
  "3O2NY7LK83",
  "0f425df386c0ff977e6f08b26c581e7e",
)

const index = searchClient.initIndex("pokemon_dataset")

const App = () => {
  // Function to
  // Retrieve data from pokéAPI and algolia index using browseObjects
  // Mix and format data
  // Update index objects using partialUpdateObjects
  useEffect(() => {
    formatIndexData(index, false)
  })

  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="pokemon_dataset">
        <div>
          <SearchBox
            placeholder="Pikachu"
            autoFocus
            className="max-w-xl mx-auto p-6"
            resetIconComponent={() => null}
            submitIconComponent={() => null}
          />
          <div className="flex flex-column my-16">
            <div className="px-4">
              <RangerSlider attribute="base.HP" min={1} max={255} />
              <RefinementList
                attribute="game_versions"
                searchable={true}
                showMore={true}
                classNames={{
                  root: "mb-8",
                }}
              />
              <RefinementList
                attribute="type"
                searchable={true}
                showMore={true}
              />
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
