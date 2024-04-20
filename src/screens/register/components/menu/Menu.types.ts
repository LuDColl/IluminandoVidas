import { ReactNode } from 'react';

export type MenuPropsType = {
  archor: (props: UseMenuReturn) => ReactNode;
  render: (props: UseMenuReturn) => ReactNode;
};

export type UseMenuReturn = {
  visible: boolean;
  openMenu: () => void;
  closeMenu: () => void;
};
