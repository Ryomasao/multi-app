import { useState } from 'react'
import { Button } from '@/components/atoms'
import style from './Counter.module.scss'

type Props = {
  className?: string
}

const Counter = (props: Props) => {
  const [count, setCount] = useState(0)

  return (
    <div className={`${style.container} ${props.className}`}>
      <Button
        className={style.button}
        type="button"
        onClick={() => setCount((prev) => prev + 1)}
      >
        push
      </Button>
      <div className={style.count}>count:{count}</div>
    </div>
  )
}

export default Counter
