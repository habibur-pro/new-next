"use client"
import React from 'react';

const page = ({ params }) => {
    return (
        <div>
            <h1>ClassName: {params.class[0]}</h1>
            <h1>Class Number: {params.class[1]}</h1>
        </div>
    );
};

export default page;