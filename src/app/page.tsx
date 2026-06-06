import NavBlock from './_local-components/NavBlock/NavBlock';
import SummaryBlock from './_local-components/SummaryBlock/SummaryBlock';
import TitleBlock from './_local-components/TitleBlock/TitleBlock'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <TitleBlock />
        <SummaryBlock />
        <NavBlock />
      </div>
    </div>
  );
}