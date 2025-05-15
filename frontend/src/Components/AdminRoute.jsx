import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const AdminRoute = () => {
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);
  return userInfo && userInfo.isAdmin ? <Outlet /> : navigate("/login");
};

export default AdminRoute;
