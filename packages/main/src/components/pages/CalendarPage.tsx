import Template from '@/components/templates/MainTemplate'
import { MaybeComplexUI } from '@ryomasao/multi-app-ui'
import { Counter } from '@/components/orgs'
import style from './CalendarPage.module.scss'

const CalendarPage = () => {
  return (
    <Template>
      <h1>カレンダー</h1>
      <Counter className={style.counter} />
      <MaybeComplexUI />
    </Template>
  )
}

export default CalendarPage
