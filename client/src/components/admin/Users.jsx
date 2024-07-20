import React, { useEffect, useState } from 'react'
import apiClient from '../../axios/axios'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';

const Users = () => {

    const {currentUser} = useSelector((state) => state.user);
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        apiClient.post('/admin/users',{
            id: currentUser._id
        }).then((res) => {
            res.data.success ? setUsers(res.data.users) : toast.error(res.data.message);
        }).catch((error) => {
            toast.error(error.response.data.message);
            console.log(error);
        })
    }

    useEffect(() => {
        getUsers();
    }, []);

  return (
    <>
    <div className="bg-gray-50 dark:text-white dark:bg-gray-700 h-full overflow-y-auto scroll-smooth mb-10 ">
      <div className=" bg-white dark:bg-gray-800 rounded-xl py-10 mb-10">
        <div className="text-4xl text-gray-600 ml-5 my-5 dark:text-white">
          Contents
        </div>
        <div className="mx-10 rounded-xl border p-3 mb-10">
          <table className="w-full text-lg  rounded-xl border dark:border-none">
            <thead className="p-5 rounded-full">
              <tr className="text-xl text-gray-500 bg-blue-100 h-14 border-b">
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody className="p-5 dark:bg-gray-700">
              {users.map((user) => {
                return (
                  <tr
                    key={user._id}
                    className="h-14 border-t dark:border-gray-800"
                  >
                    <td className="">
                      &nbsp; &nbsp;
                      {user.username}
                    </td>
                    <td>
                    {user.email}
                    </td>
                    <td>
                        {user.role}
                    </td>
                    <td>
                      <button
                        type="button"
                        className={
                          "bg-blue-200 hover:bg-blue-300 py-1 px-2 text-black rounded-full mr-3  "
                        }
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(content)}
                        type="button"
                        className={
                          "bg-red-500 hover:bg-red-600 py-1 px-2 text-white rounded-full mr-3"
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default Users