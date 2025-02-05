import { Link, Outlet } from 'react-router-dom'
import style from './index.module.scss'
import app_icon from '../../../public/app_icon.svg'
import home_icon from '../../assets/home_icon.svg'
import search_icon from '../../assets/search_icon.svg'
import playlist_icon from '../../assets/playlist_icon.svg'
import albums_icon from '../../assets/albums_icon.svg'
import like_icon from '../../assets/like_icon.svg'

export const Layout = () => {
  return (
    <div className={style.layout}>
      <nav className={style.nav}>
        <div className={style.app}>
          <h1 className={style.app_name}>Soundweb</h1>
          <img src={app_icon} alt="error" width={30} height={30} />
        </div>
        <hr className={style.line} />
        <ul className={style.menu}>
          <div>
            <li>
              <Link className={style.link} to="/">
                <img src={home_icon} alt="error" width={25} height={25} />
                <span>Главная</span>
              </Link>
            </li>
            <li>
              <Link className={style.link} to="/search">
                <img src={search_icon} alt="error" width={25} height={25} />
                <span>Поиск</span>
              </Link>
            </li>
          </div>
          <hr className={style.line} />
          <div>
            <li>
              <Link className={style.link} to="/playlists">
                <img src={playlist_icon} alt="error" width={25} height={25} />
                <span>Плейлисты</span>
              </Link>
            </li>
            <li>
              <Link className={style.link} to="/albums">
                <img src={albums_icon} alt="error" width={25} height={25} />
                <span>Альбомы</span>
              </Link>
            </li>
            <li>
              <Link className={style.link} to="/liked-songs">
                <img src={like_icon} alt="error" width={25} height={23} />
                <span>Избранное</span>
              </Link>
            </li>
            <li>
              <Link className={style.link} to="/my-songs">
                <span>Мои песни</span>
              </Link>
            </li>
          </div>
          <hr className={style.line} />
          <li>
            <Link className={style.link} to="/profile">
              <span>Профиль</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={style.content}>
        <Outlet />
      </div>
    </div>
  )
}
