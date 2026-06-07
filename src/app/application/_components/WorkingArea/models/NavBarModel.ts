export interface NavBarUnitModel {
  name: string;
  saved: boolean;
}

export interface NavBarModel {
  units: NavBarUnitModel[];
}