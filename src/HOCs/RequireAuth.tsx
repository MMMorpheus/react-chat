import { FC, ReactElement } from "react";

import { Navigate } from "react-router-dom";

interface IRequireAuth {
  children: ReactElement;
}

export const RequireAuth: FC<IRequireAuth> = ({ children }) => {
  // Fake auth flag, will be replaced in future
  const isAuthed = true;

  if (!isAuthed) {
    return <Navigate to="/auth" />;
  }

  return children;
};
