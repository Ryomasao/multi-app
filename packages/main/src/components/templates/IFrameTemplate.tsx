import style from './MainTemplate.module.scss'
import { SideMenu } from '@/components/orgs'

type Props = {
  src: string
}

const IFrameTemplate = (props: Props) => {
  return (
    <main className={style.container}>
      <aside className={style.sidemenu}>
        <SideMenu />
      </aside>
      <iframe src={props.src} width="100%" height="100%" />
    </main>
  )
}

export default IFrameTemplate
