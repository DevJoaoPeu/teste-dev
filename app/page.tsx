import { listCars } from "@/components/ListCars";
import { Ratings } from "@/components/Rating";
import Image from "next/image";

import { BsThreeDotsVertical } from "react-icons/bs";

export default function Home() {
  return (
    <div className="m-auto max-w-[1000px] p-8">
      <div className="mt-6">
        <table className="border divide-y divide-gray-190">
          <thead className="sm:hidden bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-grady-500 uppercase tracking-wider">
                car
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-grady-500 uppercase tracking-wider">
                next reservation
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-grady-500 uppercase tracking-wider">
                status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-grady-500 uppercase tracking-wider">
                rating
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-grady-500 uppercase tracking-wider">
                actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-190">
            {listCars.map((item) => (
              <tr key={item.id}>
                <td className="flex items-center gap-4 px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                  <Image
                  className="sm:w-[120px] md:inline"
                    src={item.imageUrl}
                    width={70}
                    height={70}
                    alt="img1"
                  />
                  <span>{item.name}</span>
                </td>
                <td className="sm:flex md:items-center sm:px-1 sm:py-1 px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                 <span>Next reservation:</span> {item.reservation}
                </td>
                <td className="sm:hidden px-7 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                  <span
                    className={
                      item.status
                        ? `p-1.5 bg-green-200 text-green-700 rounded-md font-bold`
                        : `p-1.5 bg-red-200 text-red-700 rounded-md font-bold`
                    }
                  >
                    {item.status ? "Available" : "Unavailable"}
                  </span>
                </td>
                <td className="sm:flex sm:px-1 sm:pr-10 px-7 sm:py-1 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                  <span>
                    <Ratings totalStars={item.rating} />
                  </span>
                </td>
                <td className="px-[3rem] sm:px-1 sm:py-0  py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                  <BsThreeDotsVertical />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
