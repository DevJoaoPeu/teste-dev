import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Home() {
  return (
    <div className="m-auto max-w-[1000px] p-5">
      <div className="mt-6">
        <table className="w-full border divide-y divide-gray-190">
          <thead className="bg-gray-50">
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
          <tbody className="bg-white divide-y divide-gray-190 ">
            <tr>
              <td className="flex items-center gap-4 px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                <Image src="https://github.com/DevJoaoPeu/teste-vaga/blob/develop/public/bmw.jpg?raw=true" width={70} height={70} alt="img1" />
                <span>Audi tt</span>
              </td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
               11/07
              </td>
              <td className="px-7 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
               <span className="p-1.5 bg-green-200 text-green-700 rounded-md font-bold">Available</span>
              </td>
              <td className="px-7 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
               <span>Estrelas</span>
              </td>
              <td className="px-[3rem] py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
               <BsThreeDotsVertical />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
