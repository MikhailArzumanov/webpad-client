import { NavBarModel, NavBarUnitModel } from './models/NavBarModel';
import styles from './WorkingArea.module.css'

function NavBarUnit({model}: { model: NavBarUnitModel }){
  const indicatorClass = model.saved ? styles.isSaved : styles.isNotSaved;
  const savedIndicator = <div className={`${indicatorClass} ${styles.indicator}`}></div>;

  const nameBlock = <div className={styles.nameWrapper}><div className={styles.nameSpan}>{model.name}</div></div>;

  const closingBtn = <div className={styles.closingWrapper}><div className={styles.closingBtn}>X</div></div>;

  return (
    <div className={styles.navBarBlock}>
      {savedIndicator}{nameBlock}{closingBtn}
    </div>
  )
}

export function NavBar(props: { model: NavBarModel }){
  const blocks = props.model.units.map((x, index) => 
    <NavBarUnit key={index} model={x} />
  );
  return (<div className={styles.navBar}>{blocks}</div>);
}