import { DdmModel } from "../DropdownMenu/DropdownMenuModel";
import { LeftDdmSection } from "../models/LeftDdmSection";

const notesMenu = {
  options: ['Новая заметка', 'Перемещение заметки'],
}
const reposMenu = {
  options: ['Открыть хранилище', 'Закрыть хранилище'],
}

const LeftDdmMap = new Map<LeftDdmSection, DdmModel>();
LeftDdmMap.set(LeftDdmSection.NOTES, notesMenu);
LeftDdmMap.set(LeftDdmSection.REPOS, reposMenu);

export default LeftDdmMap;