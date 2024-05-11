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
      <div className="w-full flex flex-col items-center">
        <div className="w-4/5 items-center mb-2">
          <div className="flex justify-between mb-1">
            <span>HP</span>
            <span className="text-neutral-500">{stats?.HP}</span>
          </div>
          <div className="w-full bg-slate-100 rounded-md">
            <div
              className="h-2 bg-green-300 rounded-md"
              style={{ width: `${getStatPercentage(stats?.HP, maxStat.HP)}%` }}
            />
          </div>
        </div>
        <div className="w-4/5 items-center mb-2">
          <div className="flex justify-between mb-1">
            <span>Attack</span>
            <span className="text-neutral-500">{stats?.Attack}</span>
          </div>
          <div className="w-full bg-slate-100 rounded-md">
            <div
              className="h-2 bg-red-300 rounded-md"
              style={{
                width: `${getStatPercentage(stats?.Attack, maxStat.Attack)}%`,
              }}
            />
          </div>
        </div>
        <div className="w-4/5 items-center mb-2">
          <div className="flex justify-between mb-1">
            <span>Defense</span>
            <span className="text-neutral-500">{stats?.Defense}</span>
          </div>
          <div className="w-full bg-slate-100 rounded-md">
            <div
              className="h-2 bg-amber-300 rounded-md"
              style={{
                width: `${getStatPercentage(stats?.Defense, maxStat.Defense)}%`,
              }}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-4/5 items-center mb-2">
          <div className="flex justify-between mb-1">
            <span>Speed</span>
            <span className="text-neutral-500">{stats?.Speed}</span>
          </div>
          <div className="w-full bg-slate-100 rounded-md">
            <div
              className="h-2 bg-sky-200 rounded-md"
              style={{
                width: `${getStatPercentage(stats?.Speed, maxStat.Speed)}%`,
              }}
            />
          </div>
        </div>
        <div className="w-4/5 items-center mb-2">
          <div className="flex justify-between mb-1">
            <span>Sp. Attack</span>
            <span className="text-neutral-500">{stats?.["Sp. Attack"]}</span>
          </div>
          <div className="w-full bg-slate-100 rounded-md">
            <div
              className="h-2 bg-red-400 rounded-md"
              style={{
                width: `${getStatPercentage(stats?.["Sp. Attack"], maxStat["Sp. Attack"])}%`,
              }}
            />
          </div>
        </div>
        <div className="w-4/5 items-center mb-2">
          <div className="flex justify-between mb-1">
            <span>Sp. Defense</span>
            <span className="text-neutral-500">{stats?.["Sp. Defense"]}</span>
          </div>
          <div className="w-full bg-slate-100 rounded-md">
            <div
              className="h-2 bg-amber-400 rounded-md"
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
