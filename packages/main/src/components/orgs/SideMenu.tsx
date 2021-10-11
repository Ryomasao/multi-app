import Link from 'next/link'
import style from './SideMenu.module.scss'
import { A } from '@/components/atoms'
import { PAGE_URL } from '@/enums'

const SideMenu = () => {
  return (
    <ul className={style.container}>
      <li className={style.item}>
        <Link href={PAGE_URL.HOME} passHref>
          <A>Home</A>
        </Link>
      </li>
      <li className={style.item}>
        <Link href={PAGE_URL.ATTENDANCE_MANAGEMENT} passHref>
          <A>勤怠管理</A>
        </Link>
      </li>
      <li className={style.item}>
        <Link href={PAGE_URL.CALENDAR} passHref>
          <A>カレンダー</A>
        </Link>
      </li>
      <li className={style.item}>
        <Link href={PAGE_URL.IFRAME} passHref>
          <A>IFrame</A>
        </Link>
      </li>
    </ul>
  )
}

export default SideMenu
