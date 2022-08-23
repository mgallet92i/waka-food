export interface W7NavItemInterface {
  label: string;
  code: string;
  imgSrc: string;
  callback?: () => void; // FIXME: type ???
  selected?: boolean;
  disabled?: boolean;
  visible?: boolean;
}
