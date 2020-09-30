import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'

const items = [
    {
        title: 'What is React',
        content: 'React is a Frontend JS Framework'
    },
    {
        title: 'Why use React',
        content: 'React is nice'
    },
    {
        title: 'How to use React',
        content: 'You use React by creating components'
    }
];

const options = [
    {
        label: 'Color Red',
        value: 'red'
    },
    {
        label: 'Color Green',
        value: 'green'
    },
    {
        label: 'Color Blue',
        value: 'blue'
    },
];

export default () => {


    return (
        <div>
            <Translate />
        </div>
    );
};