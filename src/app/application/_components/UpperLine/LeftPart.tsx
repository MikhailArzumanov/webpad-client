'use client'
import { LeftDdmSection } from './models/LeftDdmSection';
import styles from './UpperLine.module.css'
import Image from "next/image";
import DropdownBtn from './DropdownMenu/DropdowmBtn';
import DropdownBtnModel from './models/DropdownBtnModel';

function LogoImage(){
  return (
    <Image src='/logo.png' alt='LOGO' width={16} height={16} className={styles.logo}/>
  )
}

export default function LeftPart(){
  const ddmBtnsModel : DropdownBtnModel[] = [
    { label: 'Заметки',   ddmSection: LeftDdmSection.NOTES },
    { label: 'Хранилище', ddmSection: LeftDdmSection.REPOS }
  ];

  const ddmBtns = ddmBtnsModel.map((x, index) => 
    <DropdownBtn key={index} model={x} />
  )

  return (
    <div className={styles.leftPart}>
      <LogoImage />
      {ddmBtns}
    </div>
  )
}