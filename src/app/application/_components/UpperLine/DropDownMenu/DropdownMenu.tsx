'use client'
import { DdmModel } from "./DropdownMenuModel";
import styles from './DropdownMenu.module.css';

export default function DropDownMenu(props: { model : DdmModel | null }){
  const { model } = props;

  const optionsElements = model?.options.map((option, index) => 
    <div key={index} 
      className={styles.ddmOptionBlock} 
      onClick={() => model.callbackFn && model.callbackFn(option)}
    >{option}</div>
  );

  return optionsElements != null ? (
    <div className={styles.dropDownMenu} onMouseEnter={model?.onEntered}>
      {optionsElements}
    </div>
  ) : <></>;
}