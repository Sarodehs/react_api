import React, { useEffect, useState } from 'react';
import './APIData.css'

const APIData = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }

    useEffect(() => {
        getCovidData();
    }, []);
    return (

        <div>

            <h1 >India Covid 19 Dashboard</h1>

            <table>
                <thead>
                    <tr>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                        <th>Active</th>
                        <th>Updates</th>
                        <th>Delta<br/>Confirmed</th>
                        <th>Delta<br/>Deaths</th>
                        <th>Deltare<br/>Covered</th>
                        <th>Migrated<br/>Other</th>
                        <th>State<br/>Code</th>
                    </tr> 
                </thead>
                <tbody>
                    {
                        data.map((curElem, ind) => {
                            return (
                                <tr>
                                    <td>{curElem.state}</td>
                                    <td>{curElem.confirmed}</td>
                                    <td>{curElem.recovered}</td>
                                    <td>{curElem.deaths}</td>
                                    <td>{curElem.actives}</td>
                                    <td>{curElem.lastupdatedtime}</td>
                                    <td>{curElem.deltaconfirmed}</td>
                                    <td>{curElem.deltadeaths}</td>
                                    <td>{curElem.deltarecovered}</td>
                                    <td>{curElem.migratedother}</td>
                                    <td>{curElem.statecode}</td>                                
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>

        </div>
    );

}

export default APIData;