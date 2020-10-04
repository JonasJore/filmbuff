import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { App } from './app';
import { Sandbox } from './sandbox';
import { Error } from './error';

export const Router = () => {
  return (
    <main>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/sandbox" component={Sandbox} />
        <Route component={Error} />
      </Switch>
    </main>
  );
};
