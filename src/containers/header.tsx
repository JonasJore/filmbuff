import React from 'react';

interface HeaderPropTypes {
  headerText: string;
}

export const Header = ({ headerText }: HeaderPropTypes) => (
  <header className="application-header">
    <h2>{headerText}</h2>
  </header>
);
