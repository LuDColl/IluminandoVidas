import { useState } from 'react';

export default function useMenu() {
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const setImageAndCloseMenu = (image: string) => {
    closeMenu();
    setImage(image);
  };

  return {
    visible,
    openMenu,
    closeMenu,
    image,
    setImage: setImageAndCloseMenu,
  };
}
