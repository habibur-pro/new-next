"use client"
import React from 'react';

const page = ({ params }) => {
    console.log(params)
    return (
        <div>
            <h1>Student Id: {params.student}</h1>
        </div>
    );
};

export default page;