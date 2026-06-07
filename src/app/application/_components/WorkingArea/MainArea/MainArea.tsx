import styles from './MainArea.module.css'

export function MainArea(){
  return (
    <textarea className={styles.mainArea} spellCheck='false'></textarea>
  )
}