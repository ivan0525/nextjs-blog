import style from './index.module.scss'
export default function Layout({children}) {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}