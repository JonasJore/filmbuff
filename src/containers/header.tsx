import React from 'react';

interface HeaderPropTypes {
  children: JSX.Element;
  headerText: string;
}

export const Header = ({ children, headerText }: HeaderPropTypes) => (
  <header className="application-header">
    <h2>{headerText}</h2>
    {children}
  </header>
);
