import { useEffect } from "react";
import { ReactElement } from "react";
import { useAuth } from "../utils/useAuth";

export const Calculation = (): ReactElement => {
  const { shortTermToken } = useAuth();

  useEffect(() => {
    // login();
  }, []);

  return (
    <div>
      <h1>Calculation</h1>
      {shortTermToken && <span>Logged in, here are your options: [NOT IMPLEMENTED]</span>}
      {!shortTermToken && <span>Please log in first</span>}
    </div>
  );
};

export default Calculation;
