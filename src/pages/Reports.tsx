import CreateReport from "@components/partials/CreateReport";
import ReportsList from "@components/partials/ReportsList";
import * as React from "react";

export interface IReportsProps {}

export default function Reports(props: IReportsProps) {
  return (
    <div>
      <div className="bg-secondary flex">
        <div className="bg-gray-2 text-primary text-sm px-3 py-3">
          My Reports
        </div>
      </div>
      <div className="bg-gray-2 px-5 py-5">
        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-7 md:col-span-5">
            <ReportsList />
          </div>

          <div className="col-span-7 md:col-span-2">
            <CreateReport />
          </div>
        </div>
      </div>
    </div>
  );
}
