import styles from './TitleBlock.module.css'

export default function TitleBlock(){
  return (
    <div className={styles.titleWrapper}>
      <h1>Webpad.</h1>
      <h4>Новое слово в мире текста.</h4>
    </div>
  );
}