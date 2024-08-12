import { FaRegUser } from 'react-icons/fa'
import { FiArrowLeft } from 'react-icons/fi'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

const Header = ({ backLink = '/' }) => {
	/* TODO: React router useHistory */

	const {pathname } = useLocation()
	const navigate = useNavigate()
	const {isAuth} = useAuth()


	if(!isAuth) return null


	return (
		<header className={styles.header}>
			{pathname !== '/' || !isAuth ? (
			<button onClick={() => {navigate(isAuth ? backLink: '/auth')}}>
				<FiArrowLeft color='white' fontSize={25}/>
			</button>
			):<button onClick={() => {
				navigate('profile')
				}}
				>
			<FaRegUser color='white' fontSize={25}/>
		</button>}
		<h1></h1>
			<Hamburger />
		</header>
	)
}

export default Header
