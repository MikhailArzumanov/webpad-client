'use client'
import { Dispatch, SetStateAction, useState } from 'react';
import DropdownMenu from './DropdownMenu';
import { DdmModel } from './DropdownMenuModel';
import styles from './DropdownMenu.module.css';
import LeftDdmMap from '../objs/LeftDdmMap';
import { LeftDdmSection } from '../models/LeftDdmSection';
import DropdownBtnModel from '../models/DropdownBtnModel';


function openDropdownMenu(section: LeftDdmSection, setMenu: Dispatch<SetStateAction<DdmModel | null>>, turnFlag: () => void){
  const menu = LeftDdmMap.get(section);
  if(!LeftDdmMap.has(section) || !menu){
    console.trace("WARNING: absent section key was passed.");
    return;
  }
  
  const menuWithCallback = {
    callbackFn: (key: string) => {
      console.log(key);
    },
    onEnteted: turnFlag,
    ...menu
  };

  setMenu(menuWithCallback);
}

let cursorWasAtDdm = false;

export default function DropdownBtn(props: { model: DropdownBtnModel }){
  const { model } = props;

  const [menu, setMenu] : [DdmModel | null, Dispatch<SetStateAction<DdmModel | null>>] = useState<DdmModel | null>(null);

  const ddm = <DropdownMenu model={menu} />;

  return (
    <div className={styles.ddmBtn} 
      onClick={() => openDropdownMenu(model.ddmSection, setMenu, () => cursorWasAtDdm = true)}
      onMouseLeave={() => setTimeout(() => cursorWasAtDdm ? null : setMenu(null), 1000)}
    >
      <span className={styles.tileTextSpan}>{model.label}</span>
      {ddm}
    </div>
  );
}