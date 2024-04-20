import { useState } from 'react';

export default function useImageMenu() {
  const [image, setImage] = useState<string | null>(null);

  const setImageAndCloseMenu = (closeMenu: () => void) => (image: string) => {
    closeMenu();
    setImage(image);
  };

  return {
    image,
    setImage: setImageAndCloseMenu,
  };
}
