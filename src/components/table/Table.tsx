import { CustomButton, CustomButtonReverse } from "../ActionBtn";
import React from "react";

export interface BodyProps {
  [key: string]: any;
}

interface HeaderProps {
  name: string;
  id: string;
}

interface TableProps {
  headers: HeaderProps[];
  body: BodyProps[];
  title?: string;
}

const Table: React.FC<TableProps> = ({ headers, body, title }) => {
  return (
    <div
      className={`${title && "pt-5"} relative overflow-x-auto border border-muftar-gray-200 bg-white shadow-custom-shadow-100 sm:rounded-xl`}
    >
      {title && (
        <span className="px-6 text-lg font-semibold text-muftar-gray-900">
          {title}
        </span>
      )}
      <table
        className={`${title && "mt-5"} w-full text-left text-sm text-gray-500 rtl:text-right`}
      >
        <thead
          className={`${title && "border-t"} border-b border-muftar-gray-200 bg-muftar-gray-50 text-xs capitalize text-muftar-gray-600`}
        >
          <tr>
            {headers.map((heading, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-[13px] font-medium text-muftar-gray-600"
              >
                {heading?.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b text-sm text-muftar-gray-600"
            >
              {headers.map((header: HeaderProps, cellIndex) => (
                <td
                  key={cellIndex}
                  className="whitespace-nowrap px-6 py-[26px]"
                >
                  {row[header?.id.toLowerCase()]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between px-6 py-4">
        <CustomButton text="Previous" icon="/images/arrow-left.svg" />
        <div>
          <ul className="flex items-center gap-1">
            <li className="rounded-lg bg-muftar-gray-50 px-3.5 py-2.5 transition-colors">
              1
            </li>
            <li className="rounded-lg bg-white px-3.5 py-2.5 transition-colors hover:bg-muftar-gray-50">
              2
            </li>
            <li className="rounded-lg bg-white px-3.5 py-2.5 transition-colors hover:bg-muftar-gray-50">
              3
            </li>
            <li className="rounded-lg bg-white px-3.5 py-2.5 transition-colors hover:bg-muftar-gray-50">
              4
            </li>
          </ul>
        </div>
        <CustomButtonReverse text="Next" icon="/images/arrow-right.svg" />
      </div>
    </div>
  );
};

export default Table;
