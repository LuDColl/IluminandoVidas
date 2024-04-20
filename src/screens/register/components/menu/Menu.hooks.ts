import { useState } from 'react';
import { UseMenuReturn } from './Menu.types';

export default function useMenu(): UseMenuReturn {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return {
    visible,
    openMenu,
    closeMenu,
  };
}
