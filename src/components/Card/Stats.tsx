import { Pokemon } from "../../types/pokemon"

interface StatProps {
  type: "HP" | "Attack" | "Defense" | "Sp. Attack" | "Sp. Defense" | "Speed"
  color: string
  stats: Pokemon["base"]
  maxStat: Pokemon["base"]
}

const Stat = (props: StatProps) => {
  return (
    <div className="w-4/5 items-center mb-2">
      <div className="flex justify-between mb-1">
        <span>{props.type}</span>
        <span className="text-neutral-500">{props.stats?.[props.type]}</span>
      </div>
      <div className="w-full bg-slate-100 rounded-md">
        <div
          className={`h-2 ${props.color} rounded-md`}
          style={{
            width: `${getStatPercentage(props.stats?.[props.type], props.maxStat?.[props.type])}%`,
          }}
        />
      </div>
    </div>
  )
}

interface StatsProps {
  stats: Pokemon["base"]
}

const Stats = ({ stats }: StatsProps) => {
  const maxStat: Pokemon["base"] = {
    HP: 255,
    Attack: 181,
    Defense: 230,
    "Sp. Attack": 173,
    "Sp. Defense": 230,
    Speed: 169,
  }

  return (
    <div className="flex jutify-center mb-6">
      <div className="w-full flex flex-col items-center">
        <Stat type="HP" color="bg-green-300" stats={stats} maxStat={maxStat} />
        <Stat
          type="Attack"
          color="bg-red-300"
          stats={stats}
          maxStat={maxStat}
        />
        <Stat
          type="Defense"
          color="bg-amber-300"
          stats={stats}
          maxStat={maxStat}
        />
      </div>
      <div className="w-full flex flex-col items-center">
        <Stat type="Speed" color="bg-sky-200" stats={stats} maxStat={maxStat} />
        <Stat
          type="Sp. Attack"
          color="bg-red-400"
          stats={stats}
          maxStat={maxStat}
        />
        <Stat
          type="Sp. Defense"
          color="bg-amber-400"
          stats={stats}
          maxStat={maxStat}
        />
      </div>
    </div>
  )
}

export default Stats

function getStatPercentage(stat: number = 100, maxStat: number = 100) {
  return (stat / maxStat) * 100
}
