import LeftPart from './LeftPart';
import styles from './UpperLine.module.css';

export default function UpperLine(){
  return (
    <div className={styles.container}>
      <LeftPart />
      <div className={styles.rightPart}>

      </div>
    </div>
  );
}