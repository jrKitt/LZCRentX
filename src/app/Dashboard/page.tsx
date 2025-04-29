"use client";

import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Sidebar from "../widgets/components/sidebar";
import Header from "../widgets/components/Header";
import Footer from "../widgets/components/Footer";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function DashboardPage() {
  const time = new Date().toLocaleString("th-TH", {
    timeZone: "Asia/Bangkok",
    hour: "numeric",
    minute: "numeric",
  });

  // Data for Bar Chart
  const barData = {
    labels: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค."],
    datasets: [
      {
        label: "ยอดขาย",
        data: [120000, 150000, 80000, 200000, 180000, 220000, 170000],
        backgroundColor: "#22C55E",
      },
      {
        label: "ยอดเช่า",
        data: [90000, 110000, 60000, 150000, 140000, 190000, 130000],
        backgroundColor: "#3B82F6",
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "ยอดขาย",
      },
    },
  };

  return (
    <>
      <Sidebar />

      <div className="p-4 sm:ml-64 min-h-screen bg-[#F0F2F9]">
        <div className="mb-3">
            <p className="text-2xl font-bold">ภาพรวม <span className="text-sm text-gray-500">ณ วันที่ {new Date().toLocaleString("th-TH", { year: "numeric", month: "long", day: "numeric" })}</span></p>
            <p className="text-md font-regular flex items-center gap-2 text-gray-400">
            <svg
              className="w-[26px] h-[26px] text-gray-400 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            {time}
            </p>
        </div>
        {/* 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <Header />
          {/* Card 1 */}
          <div className="p-4 bg-white border-l-4 border-blue-500 rounded-lg shadow-md flex items-center">
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-700">รายได้ทั้งหมด</h2>
              <p className="text-3xl font-bold text-gray-900">฿12,000,000.00</p>
              <p className="text-sm mt-1 text-gray-500">อัปเดตล่าสุด: วันนี้ {time}</p>
            </div>
            <div className="w-24 h-24">
              <CircularProgressbar
                value={95}
                text={`${95}%`}
                styles={buildStyles({
                  textColor: "#1F2937",
                  pathColor: "#22C55E",
                  trailColor: "#E5E7EB",
                  textSize: "16px",
                })}
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-4 bg-white border-l-4 border-green-500 rounded-lg shadow-md flex items-center">
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-700">จำนวนสินค้าที่ให้เช่า</h2>
              <p className="text-3xl font-bold text-gray-900">340 ชิ้น</p>
              <p className="text-sm mt-1 text-gray-500">อัปเดตล่าสุด: วันนี้ {time}</p>
            </div>
            <div className="w-24 h-24">
              <CircularProgressbar
                value={75}
                text={`${75}%`}
                styles={buildStyles({
                  textColor: "#1F2937",
                  pathColor: "#ffc505",
                  trailColor: "#E5E7EB",
                  textSize: "16px",
                })}
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-4 bg-white border-l-4 border-gray-500 rounded-lg shadow-md flex items-center">
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-700">ลูกค้าใหม่</h2>
              <p className="text-3xl font-bold text-gray-900">15 คน</p>
              <p className="text-sm mt-1 text-gray-500">อัปเดตล่าสุด: วันนี้ {time}</p>
            </div>
            <div className="w-24 h-24">
              <CircularProgressbar
                value={22}
                text={`${22}%`}
                styles={buildStyles({
                  textColor: "#1F2937",
                  pathColor: "#222dc5",
                  trailColor: "#E5E7EB",
                  textSize: "16px",
                })}
              />
            </div>
          </div>
        </div>

        {/* Chart and Popular Products */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
          {/* Bar Chart */}
          <div className="col-span-2 p-4 bg-white rounded-lg shadow-md border-t-4 border-blue-500">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              รายงานยอดขายประจำเดือน {new Date().toLocaleString("th-TH", { month: "long" })}
            </h2>
            <Bar data={barData} options={barOptions} />
          </div>

          {/* Popular Products */}
          <div className="p-4 bg-white rounded-lg border-t-4 border-green-500 shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">สินค้ายอดนิยม</h2>
            <div className="space-y-3">
              {/* Item 1 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src="/sample.png" alt="" className="w-12 h-12 rounded-md" />
                  <div>
                    <span className="text-gray-700 block">ชุดแต่งงาน เซ็ต Premium (S)</span>
                    {/* Badge */}
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium mt-1 w-25">
                      <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                      <span>มีใน Stock</span>
                    </div>
                  </div>
                </div>
                <span className="text-gray-500">30 ชิ้น</span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src="/sample.png" alt="" className="w-12 h-12 rounded-md" />
                  <div>
                    <span className="text-gray-700 block">ชุดแต่งงาน เซ็ต Premium (S)</span>
                    {/* Badge */}
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium mt-1 w-25">
                      <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                      <span>มีใน Stock</span>
                    </div>
                  </div>
                </div>
                <span className="text-gray-500">10 ชิ้น</span>
              </div>

              {/* Item 3 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src="/sample.png" alt="สินค้า D" className="w-12 h-12 rounded-md" />
                  <div>
                    <span className="text-gray-700 block">ชุดแต่งงาน เซ็ต Premium (S)</span>
                    {/* Badge */}
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium mt-1 w-25">
                      <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                      <span>มีใน Stock</span>
                    </div>
                  </div>
                </div>
                <span className="text-gray-500">5 ชิ้น</span>
              </div>

              {/* Item 4 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src="/sample.png" alt="สินค้า D" className="w-12 h-12 rounded-md" />
                  <div>
                    <span className="text-gray-700 block">ชุดแต่งงาน เซ็ต Premium (S)</span>
                    {/* Badge */}
                    <div className="flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-medium mt-1 w-25">
                      <div className="w-2 h-2 bg-orange-800 rounded-full"></div>
                      <span>ไม่มีใน Stock</span>
                    </div>
                  </div>
                </div>
                <span className="text-gray-500">2 ชิ้น</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src="/sample.png" alt="สินค้า D" className="w-12 h-12 rounded-md" />
                  <div>
                    <span className="text-gray-700 block">ชุดแต่งงาน เซ็ต Premium (S)</span>
                    {/* Badge */}
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium mt-1 w-25">
                      <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                      <span>มีใน Stock</span>
                    </div>
                  </div>
                </div>
                <span className="text-gray-500">2 ชิ้น</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src="/sample.png" alt="สินค้า D" className="w-12 h-12 rounded-md" />
                  <div>
                    <span className="text-gray-700 block">ชุดแต่งงาน เซ็ต Premium (S)</span>
                    {/* Badge */}
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium mt-1 w-25">
                      <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                      <span>มีใน Stock</span>
                    </div>
                  </div>
                </div>
                <span className="text-gray-500">2 ชิ้น</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src="/sample.png" alt="สินค้า D" className="w-12 h-12 rounded-md" />
                  <div>
                    <span className="text-gray-700 block">ชุดแต่งงาน เซ็ต Premium (S)</span>
                    {/* Badge */}
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium mt-1 w-25">
                      <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                      <span>มีใน Stock</span>
                    </div>
                  </div>
                </div>
                <span className="text-gray-500">2 ชิ้น</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src="/sample.png" alt="สินค้า D" className="w-12 h-12 rounded-md" />
                  <div>
                    <span className="text-gray-700 block">ชุดแต่งงาน เซ็ต Premium (S)</span>
                    {/* Badge */}
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium mt-1 w-25">
                      <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                      <span>มีใน Stock</span>
                    </div>
                  </div>
                </div>
                <span className="text-gray-500">2 ชิ้น</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src="/sample.png" alt="สินค้า D" className="w-12 h-12 rounded-md" />
                  <div>
                    <span className="text-gray-700 block">ชุดแต่งงาน เซ็ต Premium (S)</span>
                    {/* Badge */}
                    <div className="flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-medium mt-1 w-25">
                      <div className="w-2 h-2 bg-orange-800 rounded-full"></div>
                      <span>ไม่มีใน Stock</span>
                    </div>
                  </div>
                </div>
                <span className="text-gray-500">2 ชิ้น</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src="/sample.png" alt="สินค้า D" className="w-12 h-12 rounded-md" />
                  <div>
                    <span className="text-gray-700 block">ชุดแต่งงาน เซ็ต Premium (S)</span>
                    {/* Badge */}
                    <div className="flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-medium mt-1 w-25">
                      <div className="w-2 h-2 bg-orange-800 rounded-full"></div>
                      <span>ไม่มีใน Stock</span>
                    </div>
                  </div>
                </div>
                <span className="text-gray-500">0 ชิ้น</span>
              </div>
            </div>
            
          </div>
        </div>

        {/* Rental Items */}
        <div className="w-full p-4 bg-white rounded-lg shadow-md border-t-4 border-gray-500 mt-4">
            <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">รายการเช่าสินค้า</h2>
            <div>
              <label htmlFor="entries" className="text-gray-700 mr-2">Show</label>
              <select
              id="entries"
              className="border border-gray-300 rounded-md p-1 text-gray-700"
              >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
              </select>
              <span className="text-gray-700 ml-2">entries</span>
            </div>
            </div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>ลูกค้า</th>
                  <th>สินค้า</th>
                  <th>วันที่เช่า</th>
                  <th>วันที่ต้องส่งคืน</th>
                  <th>ราคา</th>
                  <th>สถานะการเช่า</th>
                  <th>สถานะใน Stock</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.freepik.com/free-photo/happy-laughing-young-handsome-southeast-asian-man-isolated-blue-studio-background_74952-3619.jpg?t=st=1745908807~exp=1745912407~hmac=a877d9e7eb68ff499cee6e91d46b27afb9c428d7a99abb5cbaa8609f9988f956&w=900"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">ภัทรภณ วรวัฒนกุล</div>
                        <div className="text-sm opacity-50">092-959-4242</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    ชุดแต่งงาน เซ็ต Premium (M)
                    <br />
                    <span className="badge badge-ghost badge-sm">มีใน Stock</span>
                  </td>
                  <td>01/05/2025</td>
                  <td>07/05/2025</td>
                  <td>฿5,000</td>
                  <td>
                    <span className="badge badge-success text-white">กำลังเช่า</span>
                  </td>
                  <td>
                    <span className="badge badge-info text-white">มีใน Stock</span>
                  </td>
                  <th>
                    <button className="btn btn-ghost btn-xs">รายละเอียด</button>
                  </th>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.freepik.com/free-photo/young-asia-lady-feeling-happiness-with-positive-expression-joyful-surprise-funky-dressed-casual-cloth-looking-camera-isolated-blue-background-happy-adorable-glad-woman-rejoices-success_7861-2734.jpg?t=st=1745908780~exp=1745912380~hmac=1b2ca6aef7764bc762677e2edf7bc8a97477cb6d1dd18ad4f619cf213bd13592&w=996"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">ธาริณี รัตนโกเมนทร์ </div>
                        <div className="text-sm opacity-50">088-919-1414</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    ชุดแต่งงาน เซ็ต Premium (L)
                    <br />
                    <span className="badge badge-ghost badge-sm">มีใน Stock</span>
                  </td>
                  <td>02/05/2025</td>
                  <td>08/05/2025</td>
                  <td>฿6,000</td>
                  <td>
                    <span className="badge badge-warning text-white">รอคืนสินค้า</span>
                  </td>
                  <td>
                    <span className="badge badge-info text-white">มีใน Stock</span>
                  </td>
                  <th>
                    <button className="btn btn-ghost btn-xs">รายละเอียด</button>
                  </th>
                </tr>
              </tbody>
              {/* foot */}
              
            </table>
          </div>
        </div>
      </div>
        <Footer/>
    </>
  );
}
