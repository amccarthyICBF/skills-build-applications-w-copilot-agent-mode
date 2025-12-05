import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;
    console.log('Fetching Users from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setUsers(results);
        console.log('Users data:', results);
      })
      .catch(err => console.error('Error fetching users:', err));
  }, []);
  return (
    <div>
      <h2 className="mb-4 text-warning">Users</h2>
      <div className="card mb-4">
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user.id || idx}>
                  <td>{user.id || idx + 1}</td>
                  <td>{user.name || 'N/A'}</td>
                  <td>{user.details || JSON.stringify(user)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-warning mt-3" onClick={() => window.location.reload()}>Refresh</button>
        </div>
      </div>
    </div>
  );
};
export default Users;
