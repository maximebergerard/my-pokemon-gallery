import { Pokemon } from "../../types/pokemon"

interface Props {
  stats: Pokemon["base"]
}

const Stats = ({ stats }: Props) => {
  const maxStat: Pokemon["base"] = {
    HP: 255,
    Attack: 181,
    Defense: 230,
    "Sp. Attack": 173,
    "Sp. Defense": 230,
    Speed: 169,
  }

  const getStatPercentage = (stat: number = 100, maxStat: number) => {
    return (stat / maxStat) * 100
  }

  return (
    <div className="flex jutify-center mb-6">
      <div className="w-full">
        <div className="items-center mb-2">
          <p className="mb-1">HP</p>
          <div className="w-3/4 bg-slate-100 rounded-md">
            <div
              className="h-2 bg-green-300 rounded-l-md"
              style={{ width: `${getStatPercentage(stats?.HP, maxStat.HP)}%` }}
            />
          </div>
        </div>
        <div className="items-center mb-2">
          <p className="mb-1">Attack</p>
          <div className="w-3/4 bg-slate-100 rounded-md">
            <div
              className="h-2 bg-red-300 rounded-l-md"
              style={{
                width: `${getStatPercentage(stats?.Attack, maxStat.Attack)}%`,
              }}
            />
          </div>
        </div>
        <div className="items-center mb-2">
          <p className="mb-1">Defense</p>
          <div className="w-3/4 bg-slate-100 rounded-md">
            <div
              className="h-2 bg-amber-300 rounded-l-md"
              style={{
                width: `${getStatPercentage(stats?.Defense, maxStat.Defense)}%`,
              }}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="items-center mb-2">
          <p className="mb-1">Speed</p>
          <div className="w-3/4 bg-slate-100 rounded-md">
            <div
              className="h-2 bg-sky-200 rounded-l-md"
              style={{
                width: `${getStatPercentage(stats?.Speed, maxStat.Speed)}%`,
              }}
            />
          </div>
        </div>
        <div className="items-center mb-2">
          <p className="mb-1">Sp. Attack</p>
          <div className="w-3/4 bg-slate-100 rounded-md">
            <div
              className="h-2 bg-red-400 rounded-l-md"
              style={{
                width: `${getStatPercentage(stats?.["Sp. Attack"], maxStat["Sp. Attack"])}%`,
              }}
            />
          </div>
        </div>
        <div className="items-center mb-2">
          <p className="mb-1">Sp. Defense</p>
          <div className="w-3/4 bg-slate-100 rounded-md">
            <div
              className="h-2 bg-amber-400 rounded-l-md"
              style={{
                width: `${getStatPercentage(stats?.["Sp. Defense"], maxStat["Sp. Defense"])}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
