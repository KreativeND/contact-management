export interface SidebarItemData {
  icon: React.ReactElement; 
  text: string;
  onClick: () => void;
  path: string; 
  isOpen: boolean;
}
