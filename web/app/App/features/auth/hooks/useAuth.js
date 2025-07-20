import { useEffect, useState } from "react";
import { subscribeToAuth } from "../services";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [checkedAuthState, setCheckedAuthState] = useState(false);
  useEffect(() => {
    const unsubscribe = subscribeToAuth((firebaseUser) => {
      setUser(firebaseUser);
      setCheckedAuthState(true);
    });
    return unsubscribe;
  }, []);
  return {
    user,
    isLoggedIn: !!user,
    checkedAuthState,
  };
}
