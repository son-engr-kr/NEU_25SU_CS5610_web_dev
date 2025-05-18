import { Link, useNavigate } from "react-router-dom";
import { FormControl, Button } from "react-bootstrap";
// DONE(A2): 2.4.9 Styling the Account Screens (On Your Own)

export default function Signup() {
  const navigate = useNavigate();
  return (
    <div id="wd-signup-screen" className="mx-auto" style={{ maxWidth: 320 }}>
      <h1 className="mb-3">Signup</h1>
      <FormControl placeholder="username" className="mb-2" />
      <FormControl placeholder="password" type="password" className="mb-2" />
      <FormControl placeholder="verify password" type="password" className="mb-3" />
      <Button className="w-100 mb-2" variant="primary" onClick={() => navigate("/Kambaz/Account/Profile")}>Signup</Button>
      <Link to="/Kambaz/Account/Signin">Signin</Link>
    </div>
  );
}
