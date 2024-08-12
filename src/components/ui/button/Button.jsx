import styles from './Button.module.scss';
import cn from 'clsx'

const Button = ({children, clickHandler, size='xl'}) => {
 return <div className={styles.wrapper}>
	<button className={cn(styles[size], styles.button)} onClick={clickHandler}>
		{children}
		</button>
 </div>
}

export default Button