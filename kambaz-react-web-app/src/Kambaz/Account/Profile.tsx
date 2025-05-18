import { Link, useNavigate } from "react-router-dom";
import { FormControl, Button } from "react-bootstrap";
// DONE(A2): 2.4.9 Styling the Account Screens (On Your Own)
export default function Profile() {
  const navigate = useNavigate();
  return (
    <div id="wd-profile-screen" className="mx-auto" style={{ maxWidth: 320 }}>
      <h1 className="mb-3">Profile</h1>
      <FormControl defaultValue="alice" placeholder="username" className="mb-2" />
      <FormControl defaultValue="123" placeholder="password" type="password" className="mb-2" />
      <FormControl defaultValue="Alice" placeholder="First Name" className="mb-2" />
      <FormControl defaultValue="Wonderland" placeholder="Last Name" className="mb-2" />
      <FormControl defaultValue="2000-01-01" type="date" className="mb-2" />
      <FormControl defaultValue="alice@wonderland.com" type="email" className="mb-2" />
      <FormControl defaultValue="User" className="mb-2" />
      <Button className="w-100 mb-2" variant="danger" onClick={() => navigate("/Kambaz/Account/Signin")}>Signout</Button>
    </div>
  );
}
