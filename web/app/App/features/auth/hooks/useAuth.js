import { useEffect, useState } from "react";

export default function useAuth() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = subscribeToAuth((firebaseUser) => {
      setUser(firebaseUser);
    });
    return unsubscribe;
  }, []);
  return {
    user,
    isLoggedIn: !!user,
  };
}
