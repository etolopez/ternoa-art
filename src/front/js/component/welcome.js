import React from "react";

function Welcome({ user }) {
  return (
    <div className="container">
      <div className="text-center">
        <p>
          <em> Welcome, {user.email}</em>
        </p>
      </div>
    </div>
  );
}

export default Welcome;
