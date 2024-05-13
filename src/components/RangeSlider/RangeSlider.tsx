import { RangeSlider as SpectrumRangeSlider } from "@adobe/react-spectrum"
import { useEffect, useState } from "react"
import { useRange, UseRangeProps } from "react-instantsearch"
import "./RangeSlider.css"

interface RangeChangeEvent {
  start: number
  end: number
}

const RangerSlider = (props: UseRangeProps) => {
  const { start, range, canRefine, refine } = useRange({
    ...props,
    min: props.min || 0,
    max: props.max || 100,
  })

  const { min, max } = range

  const [value, setValue] = useState({
    start: props.min || 1,
    end: props.max || 100,
  })

  const from = Math.max(
    min as number,
    Number.isFinite(start[0]) ? (start[0] as number) : (min as number),
  )
  const to = Math.min(
    max as number,
    Number.isFinite(start[1]) ? (start[1] as number) : (max as number),
  )

  useEffect(() => {
    setValue({ start: from, end: to })
  }, [from, to])

  return (
    <SpectrumRangeSlider
      label="Heal Point"
      minValue={min}
      maxValue={max}
      value={value}
      onChange={setValue}
      onChangeEnd={(event: RangeChangeEvent) =>
        refine([event.start, event.end])
      }
      isDisabled={!canRefine}
    />
  )
}

export default RangerSlider
