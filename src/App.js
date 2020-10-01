import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'

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
    const [selected, setSelected] = useState(options[0])


    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown label="Select color" options={options} selected={selected} onSelectedChange={setSelected} />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div >
    );
};