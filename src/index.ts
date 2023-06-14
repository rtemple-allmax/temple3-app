import './styles/index.css';

import { Component } from 'temple3-ui';

import { ribbonDef } from './defs/ribbon.def';
import { App } from './app/app';

new App().start(() => {
  const ribbon = document.getElementById('ribbon');
  (ribbon as Component).setState('data', ribbonDef);
});
