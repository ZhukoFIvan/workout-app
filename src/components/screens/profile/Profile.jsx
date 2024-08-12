import cn from 'clsx'
import Loader from '../../ui/Loader'
import styles from './Profile.module.scss'

import Header from '../../layout/header/Header'
import stylesLayout from '../../layout/Layout.module.scss'

// import Statistics from './statistics/Statistics'
import Statistics from './statistics/Statistics'
import { useProfile } from './useProfile'

const Profile = () => {
	const { data, isLoading } = useProfile()

	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{
				height: 356
			}}
		>
			<Header />

			<>
				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<img
								src='/images/user.svg'
								alt='Profile'
								height='56'
								draggable={false}
							/>
							<h1 className={stylesLayout.heading}>{data?.name}</h1>

							<Statistics />
						</>
					)}
				</div>

				<div
					className='wrapper-inner-page'
					style={{ paddingLeft: 0, paddingRight: 0 }}
				>
					<div className={styles.before_after}>
						<div>
							<div className={styles.heading}>Before</div>
							<img src='/images/before.jpg' alt='' />
						</div>
						<div>
							<div className={styles.heading}>After</div>
							<img src='/images/after.jpg' alt='' />
						</div>
					</div>
				</div>
			</>
		</div>

		
	)
}

export default Profile
