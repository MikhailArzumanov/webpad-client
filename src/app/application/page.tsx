import styles from './page.module.css';
import UpperLine from './_components/UpperLine/UpperLine';
import SectionsPanel from './_components/SectionsPanel/SectionsPanel';
import ExplorerPanel from './_components/ExplorerPanel/ExplorerPanel';
import WorkingArea from './_components/WorkingArea/WorkingArea';

export default function ApplicationPage() {
  return (
    <div className={styles.mainGrid}>
      <div className={styles.upperLine}><UpperLine/></div>
      <div className={styles.sectionsPanel}><SectionsPanel /></div>
      <div className={styles.explorerPanel}><ExplorerPanel /></div>
      <div className={styles.workingArea}><WorkingArea /></div>
    </div>
  );
}