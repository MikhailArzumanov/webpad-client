import { MainArea } from './MainArea/MainArea';
import { NavBar } from './NavBar';
import styles from './WorkingArea.module.css'


export default function WorkingArea(){
  const placeholderModel = {units: [
    {name: 'Example.txt', saved: true}, 
    {name: 'Example.tsx', saved: true}, 
    {name: 'Example.jsx', saved: false},
  ]};

  return (
    <div className={styles.mainGrid}>
      <div><NavBar model={placeholderModel} /></div>
      <div className={styles.mainArea}><MainArea /></div>
    </div>
  );
}