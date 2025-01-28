import React from 'react';
import Customers from './components/Customers';
import Orders from './components/Orders';
import CustomerTypes from './components/CustomerTypes';
import Sales from './components/Sales';
import StateOrders from './components/StateOrders';

export default function Home() {
    return (
        <>
            {/* Grid para pantallas grandes (md y superiores) */}
            <div className=" block sm:hidden md:grid md:gap-4 md:h-full md:grid-cols-3">
                <div className=" flex justify-center items-center"><Customers /></div>
                <div className=" flex justify-center items-center"><Orders /></div>
                <div className=" flex justify-center items-center"><CustomerTypes /></div>
                <div className="rounded-md row-span-2 col-start-1 sm:col-start-3 row-start-2 bg-gray-200 p-2 ">4</div>
                <div className="rounded-md col-start-1 sm:col-start-3 row-start-4 bg-gray-200 p-2">5</div>
                <div className="rounded-md col-start-1 sm:col-start-3 row-start-5 bg-gray-200 p-2">6</div>
                <div className="rounded-md row-span-2 col-start-1 sm:col-start-2 row-start-2 flex justify-center ">
                    <StateOrders />
                    {/* <Sales /> */}
                </div>
                <div className="rounded-md col-start-1 row-start-2 bg-gray-200 p-2">8</div>
                <div className="rounded-md col-start-1 row-start-3 bg-gray-200 p-2">9</div>
                <div className="rounded-md col-span-2 row-span-2 col-start-1 row-start-4 bg-gray-200 p-2">10</div>
            </div>

            {/* Grid para pantallas pequeñas (sm) */}
            <div className="md:hidden gap-2 h-full grid-cols-1">
                <div className="flex justify-center items-center"><Customers /></div>
                <div className="flex justify-center items-center"><Orders /></div>
                <div className="flex justify-center items-center"><CustomerTypes /></div>

                <div className="rounded-md row-span-2 col-start-1 row-start-2 bg-gray-200 p-2">4</div>
                <div className="rounded-md col-start-1 row-start-4 bg-gray-200 p-2">5</div>
                <div className="rounded-md col-start-1 row-start-5 bg-gray-200 p-2">6</div>

                <div className="rounded-md row-span-2 col-start-1 row-start-2 bg-gray-200 p-2">7</div>

                <div className="rounded-md col-start-1 row-start-2 bg-gray-200 p-2">8</div>
                <div className="rounded-md col-start-1 row-start-3 bg-gray-200 p-2">9</div>

                <div className="rounded-md col-span-2 row-span-2 col-start-1 row-start-4 bg-gray-200 p-2">10</div>
            </div>
        </>
    );
}
