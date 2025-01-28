import React from 'react'
import GuateGrafik from '@assets/Grafik.png'

export default function Loading() {
    return (
        <div className="bg-logo h-screen flex justify-center items-center w-screen">
            <div className="loader">
                <img src={GuateGrafik} alt="Logo GuateGrafik" className="w-24 h-24 " />
            </div>
        </div>

    )
}
