import React, { FC } from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="2xl:container grid grid-cols-2 place-items-center">
      {children}
    </div>
  );
};

export default Layout;
