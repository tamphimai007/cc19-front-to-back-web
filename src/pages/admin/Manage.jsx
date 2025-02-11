import { useEffect, useState } from "react";
import { actionListUsers } from "../../api/user";
import useAuthStore from "../../store/auth-store";
import { Trash2 } from "lucide-react";

// rfce
function Manage() {
  // JS
  const [users, setUsers] = useState([]);
  const token = useAuthStore((state) => state.token);

  console.log(users);

  useEffect(() => {
    // code
    hdlFetchUsers(token);
  }, []);

  const hdlFetchUsers = async (token) => {
    try {
      const res = await actionListUsers(token);
      setUsers(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>
                  <Trash2 color="red"/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Manage;
