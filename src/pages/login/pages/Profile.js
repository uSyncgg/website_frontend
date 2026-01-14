import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import LoginButton from "./Login";
import ProfileInformation from "./components/ProfileInformation";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  // We will want to either have a sign up button and a login button
  // Or a button that says login/sign up
  if (!isAuthenticated) {
    <div>
      <h1>It appears you aren't logged in.</h1>
      <LoginButton />
    </div>
  }

  return (
    isAuthenticated && (
      // <div>
      //   <img src={user.picture} alt={user.name} />
      //   <h2>{user.name}</h2>
      //   <p>{user.email}</p>
      //   <p>USER INFO {JSON.stringify(user)}</p>
      // </div>
      <ProfileInformation />
    )
  );
};

export default Profile;