import { useRef, useEffect, HtmlHTMLAttributes, useState } from "react";

export interface IMenuItem {
  label: string;
  onClick: () => void;
  icon: JSX.Element;
}
interface ContextMenuProps {
  x: number;
  y: number;
  onClose: () => void;
  menuItems: IMenuItem[];
}
const ContextMenu = ({ x, y, onClose, menuItems }: ContextMenuProps) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  //   useEffect(() => {
  //     const handleClickOutside = (event: MouseEvent | TouchEvent) => {
  //       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
  //         onClose();
  //       }
  //     };

  //     const handleEscape = (event: KeyboardEvent) => {
  //       if (event.key === "Escape") {
  //         onClose();
  //       }
  //     };

  //     document.addEventListener("mousedown", handleClickOutside);
  //     document.addEventListener("keydown", handleEscape);
  //     document.addEventListener("touchstart", handleClickOutside);

  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //       document.removeEventListener("keydown", handleEscape);
  //       document.removeEventListener("touchstart", handleClickOutside);
  //     };
  //   }, [onClose]);

  //   return (
  //     <div
  //       ref={menuRef}
  //       style={{
  //         top: y,
  //         left: x,
  //         transform: "translate(0, 0)",
  //       }}
  //       className="fixed min-w-[150px] rounded-md bg-white py-2 opacity-100 shadow-md transition-opacity duration-300 ease-in-out"
  //     >
  //       {menuItems.map((item, index) => (
  //         <div
  //           key={index}
  //           onClick={item.onClick}
  //           className={`flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100 ${
  //             item.label === "Delete"
  //               ? "text-red-600"
  //               : "border-b border-gray-300"
  //           }`}
  //         >
  //           {item.icon}
  //           {item.label}
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };

  const [position, setPosition] = useState({ x, y });

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       onClose();
  //     }
  //   };

  //   const handleKeyDown = (event) => {
  //     if (event.key === 'Escape') {
  //       onClose();
  //     }
  //   };

  //   // Disable scrolling
  //   document.body.style.overflow = 'hidden';

  //   document.addEventListener('mousedown', handleClickOutside);
  //   document.addEventListener('keydown', handleKeyDown);

  //   return () => {
  //     document.body.style.overflow = ''; // Re-enable scrolling on cleanup
  //     document.removeEventListener('mousedown', handleClickOutside);
  //     document.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    const menu = menuRef.current;
    if (menu) {
      const rect = menu.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let newX = x;
      let newY = y;

      // Check if the context menu overflows the right edge of the window
      if (x + rect.width > windowWidth) {
        newX = windowWidth - rect.width; // Align to the right edge of the window
      }

      // Check if there is enough space below the click position
      if (y + rect.height > windowHeight) {
        newY = y - rect.height; // Position the menu above the click point
        // Optional: Ensure it doesn't go above the top of the window
        if (newY < 0) {
          newY = 0; // Keep it within the top boundary
        }
      }

      setPosition({ x: newX, y: newY });
    }
  }, [x, y]);

  return (
    <div
      ref={menuRef}
      className="fixed z-50 w-[12rem] rounded-md bg-white py-2 shadow-md" // Tailwind classes
      style={{
        top: position.y,
        left: position.x,
      }}
    >
      {menuItems.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            item.onClick();
            onClose();
          }}
          className={`flex w-full cursor-pointer items-center justify-between px-4 py-2 transition-colors duration-200 ${item.label === "Delete" ? "border-b-0 text-red-600" : "border-b-2 text-gray-600"} ${item.label === "Edit" ? "border-b-4" : ""} hover:bg-gray-100`}
        >
          {item.label}
          {item.icon && <span className="mr-2">{item.icon}</span>}
        </div>
      ))}
    </div>
  );
};

export default ContextMenu;
