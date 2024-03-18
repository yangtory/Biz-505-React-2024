'use client';
import { useEffect, useState } from 'react';
import { Student } from '@/app/api/student';
import './StdList.css';

// stdList.js
export default ({ setStdCode, search }) => {
    const [stds, setStds] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await Student(search);
            setStds([...result]);
        };
        fetchData();
    }, [search]);

    const handleClick = (code) => {
        console.log(code);
        return setStdCode(code);
    };

    const viewList = stds.map((item) => {
        return (
            <tr>
                <td key={item.st_code} onClick={() => handleClick(item.st_code)}>
                    {item.st_code}
                </td>
                <td key={item.st_name} onClick={() => handleClick(item.st_code)}>
                    {item.st_name}
                </td>
            </tr>
        );
    });
    return (
        <>
            <tr>
                <th>학번</th>
                <th>이름</th>
            </tr>
            {viewList}
        </>
    );
};
