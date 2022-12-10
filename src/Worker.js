import { useState, useEffect } from "react";

function Worker() {
    const [data, setData] = useState(null);
    const [srcval, setSrcValue] = useState(null)
    const getData = () => {
        fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }
    const change = (event) => {
        setSrcValue(event.target.value)

    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="employee-list">
            <input value={srcval} onChange={change} placeholder="Samwise Gamgee"></input>
            {data ? (srcval ? (data.filter((user) => user.name == srcval).map((user) => (
                <div className="element">
                    <div>Id: {user.id}</div>
                    <div>Name: {user.name}</div>
                    <div>Department: {user.department}</div>
                    <div>Role: {user.role}</div>
                </div>
            ))) : (data.map((user) => (
                <div className="element">
                    <div>Id: {user.id}</div>
                    <div>Name: {user.name}</div>
                    <div>Department: {user.department}</div>
                    <div>Role: {user.role}</div>
                </div>
            )))) : null}
        </div>
    );
}

export default Worker;
