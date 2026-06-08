export interface DdmModel{
  options: string[];
  callbackFn? : (key: string) => void;
  onEntered?: () => void;
}