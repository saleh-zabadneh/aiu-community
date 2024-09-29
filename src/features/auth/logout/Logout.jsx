import { useCreate } from "@/cache/reactquery/useCreate";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { createFunction, isCreating } = useCreate("user", "/user/logout");
  function logoutHandler() {
    createFunction("", {
      onSuccess: () => {
        logout();
        navigate("/login");
      },
    });
  }
  return (
    <Button
      onClick={logoutHandler}
      disabled={isCreating}
      variant="outline"
      className="flex items-center gap-2"
    >
      <LogOutIcon className={`h-4 w-4 ${isCreating ? "animate-spin" : ""}`} />
      Logout
    </Button>
  );
};

export default Logout;
function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}
