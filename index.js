import React from 'react';
import { render } from 'react-dom';
import data from './src/data-dummy.json'
import Species from './src/groups/components/species'


const app = document.getElementById('app');

//ReactDOM.render( que renderizar, donde)
render(<Species/>, app)