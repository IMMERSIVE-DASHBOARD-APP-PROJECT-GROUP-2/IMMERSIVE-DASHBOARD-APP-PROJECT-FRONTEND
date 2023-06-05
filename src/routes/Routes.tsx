import { useNavigate, useLocation } from "react-router-dom";

export function Routes(Component: any) {
  function Wrapper(props: any) {
    const navigate = useNavigate();
    const location = useLocation();
    return <Component navigate={navigate} location={location} {...props} />;
  }
  return Wrapper;
}
