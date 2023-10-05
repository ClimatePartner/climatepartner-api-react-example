import { ReactElement } from "react";
import { useAuth } from "../utils/useAuth";
import OffsetProjectList from "./OffsetProjectList";

export const Offset = (): ReactElement => {
  const { shortTermToken } = useAuth();

  return (
    <div>
      <h1>Finance Climate Projects</h1>
      {!shortTermToken && <span>Please log in first</span>}
      {shortTermToken && <OffsetProjectList />}
    </div>
  );
};

export default Offset;
