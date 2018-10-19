import React from 'react';
import { render } from 'react-dom';
import data from './src/data-dummy.json'


const app = document.getElementById('app');

render(<home data={data}/>, app)