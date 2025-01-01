import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function LoggedOutLayout({ children }: Props) {
  return (
    <>
      {children}
    </>
  );
}
