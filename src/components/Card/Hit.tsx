import type { Hit as AlgoliaHit } from "instantsearch.js"
import { Pokemon } from "../../types/pokemon"
import { pokemonBackgroundTypeColors } from "../../utils/pokemonColors"
import Stats from "./Stats"

type HitProps = {
  hit: AlgoliaHit<{
    name: Pokemon["name"]
    id: Pokemon["id"]
    image: Pokemon["imageUrl"]
    type: Pokemon["type"]
    base: Pokemon["base"]
  }>
}

const Hit = ({ hit }: HitProps) => {
  return (
    <article>
      <div className="flex justify-between items-center">
        <span className="text-blue-900 text-xl text-center font-semibold">
          {hit.name?.french ? hit.name?.french : hit.name?.english}
        </span>
        <span className="font-medium">{formatPokemonId(hit.id)}</span>
      </div>
      <div className="p-2">
        <img src={hit.image} className="w-3/4 m-auto my-4" />
      </div>
      <div>
        <Stats stats={hit.base} />
      </div>
      <div className="flex justify-center">
        {hit.type?.map((type, index) => {
          return (
            <span
              className={`mr-2 ${getTypeColor(type)} text-white text-xs font-medium px-4 py-1 rounded-full`}
              key={index}
            >
              {type.toLocaleUpperCase()}
            </span>
          )
        })}
      </div>
    </article>
  )
}

export default Hit

function getTypeColor(type: string) {
  const typeColor = pokemonBackgroundTypeColors[type.toLowerCase()]

  return typeColor ? typeColor : "gray" // Return a default color if the type is not found
}

function formatPokemonId(id: number): string {
  const idString = id.toString()
  if (id >= 1 && id <= 9) {
    return `#00${idString}`
  } else if (id >= 10 && id <= 99) {
    return `#0${idString}`
  } else if (id >= 100) {
    return `#${idString}`
  } else {
    throw new Error("Invalid Pokémon ID")
  }
}
