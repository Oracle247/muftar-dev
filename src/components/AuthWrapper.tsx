import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  styles: string;
}

const AuthWrapper = ({ children, styles }: WrapperProps) => {
  return (
    <section className="relative grid grid-cols-1 gap-0 md:grid-cols-2">
      <p className="absolute bottom-0 left-0 p-8 text-sm text-app-gray-200">
        © Muftar 2024
      </p>
      <div className="col-span-0 flex items-center justify-center md:col-span-1">
        {children}
      </div>
      <div
        className={`${styles} col-span-0 hidden h-screen w-full bg-cover bg-center bg-no-repeat md:col-span-1 md:block`}
      ></div>
    </section>
  );
};

export default AuthWrapper;
