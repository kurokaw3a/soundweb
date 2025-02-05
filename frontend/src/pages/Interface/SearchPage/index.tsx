import style from './index.module.scss'
import app_search_icon from '../../../assets/app_search_icon.svg'

export const SearchPage = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1 className={style.app_name}>SoundWeb.com</h1>
        <div className={style.search_bar}>
          <input className={style.search_input} type="text" placeholder="Найти песню" maxLength={32} />
          <img className={style.search_input_icon} src={app_search_icon} alt="error" width={25} height={30} />
        </div>
      </div>
    </div>
  )
}
