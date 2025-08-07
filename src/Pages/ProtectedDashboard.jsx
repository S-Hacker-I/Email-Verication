import {
  SignedIn,
  SignedOut,
  RedirectToSignIn
} from "@clerk/clerk-react";
import Dashboard from "./Dashboard";

const ProtectedDashboard = () => {
  return (
    <>
      <SignedIn>
        <Dashboard />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default ProtectedDashboard;
