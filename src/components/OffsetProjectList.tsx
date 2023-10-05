import { ReactElement, useEffect, useState } from "react";
import { useAuth } from "../utils/useAuth";
import { useAxios } from "../utils/useAxios";

import { IOrderListProjectsResponse } from "@climatepartner/climatepartner-api-sdk/gen/interface/components/i-order-list-projects-response";
import { IOrderListProject } from "@climatepartner/climatepartner-api-sdk/gen/interface/components/i-order-list-project";

export interface OffsetProject {
  id: string;
  name: string;
  description: string;
}

export const OffsetProjectList = (): ReactElement => {
  const { shortTermToken } = useAuth();
  const { axiosInstance } = useAxios();
  const [projects, setProjects] = useState<OffsetProject[]>([]);

  useEffect(() => {
    retrieveProjects();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const retrieveProjects = () => {
    if (!shortTermToken) {
      throw new Error("No short term token in auth context");
    }
    axiosInstance
      .get<IOrderListProjectsResponse>("/order/v1/projects/en", {
        headers: {
          Authorization: `Bearer ${shortTermToken}`,
        },
      })
      .then((res) => {
        console.log("RESPONSE: ", res);
        setProjects((res.data.projects || []).map(mapOffsetProject));
      })
      .catch((err) => {
        console.error("ERROR: ", err);
        throw err;
      });
  };

  const mapOffsetProject = (project: IOrderListProject): OffsetProject => {
    return {
      id: (project.projectId || "").toString(),
      name: project.projectName || "",
      description: project.description || "",
    };
  };

  return (
    <div>
      <table>
        <tr>
          <th>Project ID</th>
          <th>Project Name</th>
          <th>Project Description</th>
        </tr>
        {projects.map((project) => (
          <tr>
            <td>{project.id}</td>
            <td>{project.name}</td>
            <td>{project.description}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default OffsetProjectList;
