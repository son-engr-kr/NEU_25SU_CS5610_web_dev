import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  // Determine the current user status
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pathname } = useLocation();
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  return (
    
    <div id="wd-account-navigation">
      {/*
      DONE(A4):
      Users can use the Account Navigation sidebar to navigate between the Account Screens
       Signin, Signup, and Profile, but not all screens should be available if there's a 
       current user or not. Reimplement the Account Navigation sidebar so that it hides the 
       Signin and Signup navigation links if a user is already signed in, and hides the Profile
        link if a user is not yet signed in.
      */}
      {!currentUser && (
        <>
          <Link to={`/Kambaz/Account/Signin`}> Signin </Link> <br/>
          <Link to={`/Kambaz/Account/Signup`}> Signup </Link> <br/>
        </>
      )}
      {currentUser && (
        <>
          <Link to={`/Kambaz/Account/Profile`}> Profile </Link> <br/>
        </>
      )}
      {currentUser && currentUser.role === "ADMIN" && (
       <Link to={`/Kambaz/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}
    </div>
  );
}
