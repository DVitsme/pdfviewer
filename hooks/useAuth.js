import React, { useState, useEffect } from "react";
import * as db from "../lib/firebase";

function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return db.checkAuth((loggedIn) => {
      setLoading(false);
      const filteredUser = {
        displayName: loggedIn.displayName,
        email: loggedIn.email,
        photoURL: loggedIn.photoURL,
        uid: loggedIn.uid,
      };
      setUser(filteredUser);
    });
  }, []);
  return { user, loading };
}

export default useAuth;
