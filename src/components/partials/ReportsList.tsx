import { EditIcon, FilterIcon } from "@theme/icons";
import { classNames } from "@utils/helpers";
import moment from "moment";
import * as React from "react";
import { useSelector } from "react-redux";
import reports from "../../reports.json";

const columns = [
  { name: "Report Name", type: "text", sortKey: "name" },
  { name: "Created By", type: "text", sortKey: "createdByName" },
  { name: "Latest Report", type: "date", sortKey: "latestReportDate" },
  { name: "Report Frequency", sortKey: "" },
  { name: "Data Source", sortKey: "" },
  { name: "Status", sortKey: "" },
];

enum SORT_DIR {
  ASC = 1,
  DESC = -1,
}

export interface IReportsListProps {}

export default function ReportsList(props: IReportsListProps) {
  const [sortBy, setSortBy] = React.useState<string>(columns[0].sortKey);
  const [sortDirection, setSortDirection] = React.useState<number>(
    SORT_DIR.ASC
  );
  const search = useSelector((state: any) => state.app.search);

  const onSort = (key: string) => {
    if (!key) {
      return;
    }

    if (sortBy === key) {
      if (sortDirection === SORT_DIR.ASC) {
        setSortDirection(SORT_DIR.DESC);
      } else {
        setSortDirection(SORT_DIR.ASC);
      }
    }
    setSortBy(key);
  };

  const sortReports = (a: any, b: any) => {
    const sortType = columns.find((dt) => dt.sortKey === sortBy)?.type;
    switch (sortType) {
      case "text":
        return sortDirection === SORT_DIR.ASC
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      case "date":
        return sortDirection === SORT_DIR.ASC
          ? new Date(b[sortBy]).getTime() - new Date(a[sortBy]).getTime()
          : new Date(a[sortBy]).getTime() - new Date(b[sortBy]).getTime();

      default:
        return 1;
    }
  };

  const filterReports = (dt: any) => {
    if (search) {
      return dt.name?.toLowerCase()?.includes(search?.toLowerCase());
    }
    return true;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "#37833B";
      case "Draft":
        return "#EFAF00";
      case "Inactive":
        return "#EB5757";

      default:
        return "#000";
    }
  };

  return (
    <div className="bg-white">
      <div className="flex flex-col overflow-hidden">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-secondary">
                  <tr>
                    {columns.map((dt) => (
                      <th
                        onClick={() => onSort(dt.sortKey)}
                        key={dt.name}
                        scope="col"
                        className="px-6 cursor-pointer py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        <div className="flex items-center">
                          {dt.name}
                          {dt.sortKey && dt.sortKey === sortBy && (
                            <FilterIcon
                              className={classNames(
                                "ml-2 filterIcon",
                                sortDirection === SORT_DIR.ASC && "active"
                              )}
                            />
                          )}
                        </div>
                      </th>
                    ))}
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {reports
                    .filter(filterReports)
                    .sort(sortReports)
                    .map((report, idx) => (
                      <tr key={idx}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {report.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={report.createdByAvatar}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {report.createdByName}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {moment(report.latestReportDate).format(
                              "D MMM, YYYY"
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {report.reportFrequency}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {report.dataSource}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full "
                            style={{ color: getStatusColor(report.status) }}
                          >
                            {report.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <EditIcon />
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
