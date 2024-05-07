import { useEffect } from "react"
import algoliasearch from "algoliasearch"
import { InstantSearch, Hits } from "react-instantsearch"
import type { Hit as AlgoliaHit } from "instantsearch.js"

import formatIndexData from "./utils/formatIndexData"
import { Pokemon } from "./types/pokemon"

const searchClient = algoliasearch(
  "3O2NY7LK83",
  "0f425df386c0ff977e6f08b26c581e7e",
)

const index = searchClient.initIndex("pokemon_dataset")

type HitProps = {
  hit: AlgoliaHit<{
    name: Pokemon["name"]
  }>
}

const Hit = ({ hit }: HitProps) => {
  return (
    <article>
      <p>{hit.name?.french}</p>
    </article>
  )
}

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
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </>
  )
}

export default App
