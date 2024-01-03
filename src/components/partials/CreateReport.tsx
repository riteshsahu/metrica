import Button from "@components/elements/Button/Button";
import OutlineButton from "@components/elements/Button/OutlineButton";
import { classNames } from "@utils/helpers";
import React, { useState } from "react";

export interface ICreateReportProps {}

const dataSources = [
  { name: "All Sources", value: "all" },
  { name: "LMS", value: "lms", checked: true },
  { name: "CRM", value: "crm" },
  { name: "LMS - Car loan", value: "lms_car" },
  { name: "Field Agent App", value: "field_agent" },
];

export default function CreateReport(props: ICreateReportProps) {
  const [checked, setChecked] = useState<string>("lms");

  return (
    <div className="bg-white rounded-md overflow-hidden">
      <div className="bg-primary text-white px-5 py-4">
        Create an Intelligent Report
      </div>
      <div className="pt-8 pb-6">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="border-b px-5 pb-8">
            <div>
              <label htmlFor="salesReportName">Enter Report Name</label>
              <input
                type="text"
                id="salesReportName"
                placeholder="ex: Sales report"
                className="border-b-2 text-sm pl-3 py-3"
              />
            </div>

            <div className="my-8">
              <label htmlFor="dataSource">Select Data Source</label>
              <div className="mt-3">
                {dataSources.map((dt) => (
                  <div>
                    <label
                      onClick={() => setChecked(dt.value)}
                      className="inline-flex items-center"
                    >
                      <input
                        id={"source" + dt.value}
                        className="form-radio text-primary"
                        type="radio"
                        name={"dataSource"}
                        value={dt.value}
                        checked={checked === dt.value}
                      />
                      <span
                        className={classNames(
                          "ml-2",
                          checked === dt.value ? "text-primary" : "text-gray-3"
                        )}
                      >
                        {dt.name}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <OutlineButton className="text-xs">
                + Connect New Data Source
              </OutlineButton>
            </div>
          </div>

          <div className="flex items-center justify-center mt-10">
            <Button className="font-bold">+ Connect Report</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
