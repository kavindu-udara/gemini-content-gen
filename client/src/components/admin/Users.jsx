import React, { useEffect, useState } from "react";
import apiClient from "../../axios/axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button, Modal} from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const Users = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [deleteConfirmModel, setDeleteConfirmModel] = useState(false);
  const [editUserModel, setEditUserModel] = useState(false);
  const [userRoles, setUserRoles] = useState(["user", "admin"]);

  const [selectedRole, setSelectedRole] = useState("user");
  const [username, setUsername] = useState(selectedUser?.username || "");
  const [email, setEmail] = useState(selectedUser?.email || "");

  const getUsers = async () => {
    apiClient
      .post("/admin/users", {
        id: currentUser._id,
      })
      .then((res) => {
        res.data.success
          ? setUsers(res.data.users)
          : toast.error(res.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const updateUser = () => {
    apiClient
      .post(`/admin/user/edit/${selectedUser._id}`, {
        id: currentUser._id,
        username: username,
        email: email,
        role: selectedRole,
      })
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
          getUsers();
          setEditUserModel(false);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const deleteUser = () => {
    apiClient.post(`/admin/user/delete/${selectedUser._id}`, {
      id: currentUser._id,
    }).then((res) => {
      if (res.data.success) {
        toast.success(res.data.message);
        getUsers();
        setDeleteConfirmModel(false);
      } else {
        toast.error(res.data.message);
      }
    }).catch((error) => {
      toast.error(error.response.data.message);
    });
  }

  const handleDelete = (user) => {
    setSelectedUser(user);
    setDeleteConfirmModel(true);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditUserModel(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser();
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    setUsername(selectedUser?.username || "");
    setEmail(selectedUser?.email || "");
    setSelectedRole(selectedUser?.role || "user");
  }, [selectedUser]);

  return (
    <>
      <div className="bg-gray-50 dark:text-white dark:bg-gray-700 h-full overflow-y-auto scroll-smooth mb-10 ">
        <div className=" bg-white dark:bg-gray-800 rounded-xl py-10 mb-10">
          <div className="text-4xl text-gray-600 ml-5 my-5 dark:text-white">
            Users
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
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        <button
                          onClick={() => handleEdit(user)}
                          type="button"
                          className={
                            "bg-blue-200 hover:bg-blue-300 py-1 px-2 text-black rounded-full mr-3  "
                          }
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(user)}
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

      {/* delete user */}
      <Modal
        show={deleteConfirmModel}
        size="md"
        onClose={() => setDeleteConfirmModel(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this user?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => deleteUser()}
              >
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setDeleteConfirmModel(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* edit user model */}
      <Modal
        show={editUserModel}
        onClose={() => setEditUserModel(false)}
        size="md"
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Edit user
            </h3>
            <div className="bg-blue-200 dark:bg-gray-800 dark:text-white rounded-xl p-3">
              <div className="mt-3">
                <div>Username</div>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  className="rounded-xl w-full border-none dark:bg-gray-700"
                  required
                />
              </div>
              <div className="mt-3">
                <div>Email</div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="rounded-xl w-full border-none dark:bg-gray-700"
                  required
                />
              </div>
              <div className="mt-3">
                <div>Role</div>
                {userRoles.map((role) => {
                  return (
                    <button
                      type="button"
                      key={role}
                      onClick={() => setSelectedRole(role)}
                      className={
                        selectedRole === role
                          ? "bg-black text-white p-3 border border-black rounded-full mr-3"
                          : "p-3 rounded-full dark:border-white border border-black mr-3"
                      }
                    >
                      {role}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="w-full">
              <button
                type="submit"
                className="w-full bg-black text-white rounded-full p-3 disabled:opacity-80"
              >
                Save changes
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Users;
