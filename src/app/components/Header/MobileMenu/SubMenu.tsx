import React from "react";
import { SubMenuContainer, SubMenuContent } from "./styles";
import MenuButton from "./MenuButton";

interface SubMenuItem {
  icon: React.ReactNode;
  text: string;
  href: string;
  badge?: string;
}

interface SubMenuProps {
  isOpen: boolean;
  items: SubMenuItem[];
  isDark: boolean;
}

const SubMenu: React.FC<SubMenuProps> = ({ isOpen, items, isDark }) => {
  return (
    <SubMenuContainer isOpen={isOpen}>
      <SubMenuContent>
        {items.map((item, index) => (
          <div
            onClick={(e) => {
              if (item.href === "/") {
                e.stopPropagation();
                e.preventDefault();
              }
            }}
            key={index}
          >
            <MenuButton
              key={index}
              icon={item.icon}
              text={item.text}
              isDark={isDark}
              href={item.href}
              badge={item.badge}
            />
          </div>
        ))}
      </SubMenuContent>
    </SubMenuContainer>
  );
};

export default SubMenu;
