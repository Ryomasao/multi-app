import style from './MainTemplate.module.scss'
import { SideMenu } from '@/components/orgs'

type Props = {
  children: React.ReactNode
}

const MainTemplate = (props: Props) => {
  return (
    <main className={style.container}>
      <aside className={style.sidemenu}>
        <SideMenu />
      </aside>
      <div className={style.content}>{props.children}</div>
    </main>
  )
}

export default MainTemplate
