import React from 'react';
import Functions from '../components/main/Functions';
import Home from '../components/main/Home';

export default function Main() {
    return (
        <main className='main'>
            <div className='clean'></div>
            <Home/>
            <Functions/>
        </main>
    )
}