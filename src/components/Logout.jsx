import useAuthStore from "../store/auth-store";
import { createAlert } from "../utils/createAlert";
import { useNavigate } from "react-router";
function Logout() {
  // JS
  const actionLogout = useAuthStore((state) => state.actionLogout);
  const navigate = useNavigate();

  const hdlLogout = () => {
    // code body
    // console.log("Hello, Logout");
    createAlert("success", "Logout Sucess");
    actionLogout();
    navigate("/");
  };

  return (
    <div className="text-white">
      <button className=" hover:cursor-pointer" onClick={hdlLogout}>
        Logout
      </button>
    </div>
  );
}
export default Logout;
