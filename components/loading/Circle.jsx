"use client"
import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Circle = () => {
    return (
        <>
            <TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperClass=""
                visible={true}
            />
        </>
    )
}

export default Circle