import { Navigate } from "react-router-dom";

const PrivateRouter = () => {
  const user = true;

  return <div>{user && <Navigate to="/home/product" />}</div>;
};

export default PrivateRouter;
