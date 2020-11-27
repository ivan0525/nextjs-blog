import styles from './index.module.scss'
import cn from 'classnames'
export default function Alert({children, type}) {
  return (
    <div 
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      })}
    >
      {children}
    </div>
  )
}