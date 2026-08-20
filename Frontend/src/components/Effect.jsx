import React, { useState, useEffect } from 'react';

const Effect = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        const getData = async () => {

            try {

                const res = await fetch(
                    'https://jsonplaceholder.typicode.com/users'
                );

                const data = await res.json();

                setUsers(data);

            } catch (err) {
                console.log(err);
            }
        };

        getData();

    }, []);

    return (
        <div>
            <h1>useEffect Example</h1>

            <ol>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Effect;