'use client';
import StdDetail from './StdDetail';
import StdList from './StdList';
import { useState } from 'react';
import './StdMain.css';
import StdSearch from './StdSerach';

// StdMain
export default () => {
    const [stdCode, setStdCode] = useState('');
    const [search, setSearch] = useState('');
    return (
        <div className="body">
            <div className="list">
                <StdSearch search={search} setSearch={setSearch} />
                <StdList search={search} setStdCode={setStdCode} />
            </div>
            <div className="detail">
                <StdDetail stdCode={stdCode} />
            </div>
        </div>
    );
};
