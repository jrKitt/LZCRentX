"use client";

import React, { useState } from "react";
import Sidebar from "../widgets/components/sidebar";
import Header from "../widgets/components/Header";
import Footer from "../widgets/components/Footer";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const rentalItems = [
  {
    id: 1,
    image: "/sample.png",
    name: "ชุดแต่งงาน เซ็ต Premium (S)",
    status: "พร้อมให้เช่า",
  },
  {
    id: 2,
    image: "/sample.png",
    name: "ชุดแต่งงาน เซ็ต Premium (M)",
    status: "กำลังเช่า",
  },
  {
    id: 3,
    image: "/sample.png",
    name: "ชุดแต่งงาน เซ็ต Premium (L)",
    status: "ไม่พร้อมให้เช่า",
  },
];

export default function RentalManagementPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [selectedItem, setSelectedItem] = useState(null); // สินค้าที่เลือก

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = rentalItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(rentalItems.length / itemsPerPage);

  const generatePageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pageNumbers.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pageNumbers;
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };
  const time = new Date().toLocaleString("th-TH", {
    timeZone: "Asia/Bangkok",
    hour: "numeric",
    minute: "numeric",
  });
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64 min-h-screen bg-[#F0F2F9]">
      <div className="mb-3">
            <p className="text-2xl font-bold">ระบบจัดการสินค้า  <span className="text-sm text-gray-500">ณ วันที่ {new Date().toLocaleString("th-TH", { year: "numeric", month: "long", day: "numeric" })}</span></p>
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
        <Header />
        <div className="bg-white rounded-lg shadow-md p-4 border-t-4 border-purple-300 mb-3">
          <h2 className="text-lg font-bold text-gray-700 mb-4">ค้นหาและกรอง</h2>
          <input
            type="text"
            placeholder="ค้นหาชื่อสินค้า..."
            className="input input-bordered w-full mb-4"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="select select-bordered w-full"
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">สถานะทั้งหมด</option>
            <option value="พร้อมให้เช่า">พร้อมให้เช่า</option>
            <option value="กำลังเช่า">กำลังเช่า</option>
            <option value="ไม่พร้อมให้เช่า">ไม่พร้อมให้เช่า</option>
          </select>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Table Card */}
          <div className="overflow-x-auto bg-white rounded-lg shadow-md p-4 border-t-4 border-blue-300">
            <h2 className="text-lg font-bold text-gray-700 mb-4">
              รายการสินค้า
            </h2>

            <table className="table w-full">
              <thead>
                <tr>
                  <th>รูป</th>
                  <th>ชื่อสินค้า</th>
                  <th>สถานะ</th>
                  <th>เลือก</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="w-12 h-12">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>
                      <span
                        className={`badge ${
                          item.status === "พร้อมให้เช่า"
                            ? "badge-success"
                            : item.status === "กำลังเช่า"
                            ? "badge-warning"
                            : "badge-error"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => handleSelectItem(item)}
                      >
                        เลือก
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-4 space-x-2">
              <button
                className="btn btn-sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                Previous
              </button>
              {generatePageNumbers().map((page, index) =>
                page === "..." ? (
                  <span key={index} className="px-2 text-gray-500">
                    ...
                  </span>
                ) : (
                  <button
                    key={index}
                    className={`btn btn-sm ${
                      currentPage === page ? "btn-primary" : "btn-outline"
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                )
              )}
              <button
                className="btn btn-sm"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                Next
              </button>
            </div>
          </div>

          {/* Preview and Edit Card */}
          <div className="bg-white rounded-lg shadow-md p-4 border-t-4 border-green-300">
            <h2 className="text-lg font-bold text-gray-700 mb-4">
              รายละเอียดสินค้า
            </h2>
            {selectedItem ? (
              <>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">
                      {selectedItem.name}
                    </h3>
                    <span
                      className={`badge ${
                        selectedItem.status === "พร้อมให้เช่า"
                          ? "badge-success"
                          : selectedItem.status === "กำลังเช่า"
                          ? "badge-warning"
                          : "badge-error"
                      }`}
                    >
                      {selectedItem.status}
                    </span>
                  </div>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      ชื่อสินค้า
                    </label>
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      value={selectedItem.name}
                      onChange={(e) =>
                        setSelectedItem({
                          ...selectedItem,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      สถานะ
                    </label>
                    <select
                      className="select select-bordered w-full"
                      value={selectedItem.status}
                      onChange={(e) =>
                        setSelectedItem({
                          ...selectedItem,
                          status: e.target.value,
                        })
                      }
                    >
                      <option value="พร้อมให้เช่า">พร้อมให้เช่า</option>
                      <option value="กำลังเช่า">กำลังเช่า</option>
                      <option value="ไม่พร้อมให้เช่า">ไม่พร้อมให้เช่า</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      ราคา
                    </label>
                    <input
                      type="number"
                      className="input input-bordered w-full"
                      value={selectedItem.price || ""}
                      onChange={(e) =>
                        setSelectedItem({
                          ...selectedItem,
                          price: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      ส่วนลด (%)
                    </label>
                    <input
                      type="number"
                      className="input input-bordered w-full"
                      value={selectedItem.discount || ""}
                      onChange={(e) =>
                        setSelectedItem({
                          ...selectedItem,
                          discount: e.target.value,
                        })
                      }
                    />
                  </div>
                  <button type="button" className="btn btn-primary w-full">
                    บันทึกการเปลี่ยนแปลง
                  </button>
                </form>
              </>
            ) : (
              <p className="text-gray-500">กรุณาเลือกสินค้าจากตาราง</p>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 border-t-4 border-blue-300">
            <h2 className="text-lg font-bold text-gray-700 mb-4">
              เพิ่มสินค้าใหม่
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  ชื่อสินค้า
                </label>
                <input type="text" className="input input-bordered w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  สถานะ
                </label>
                <select className="select select-bordered w-full">
                  <option value="พร้อมให้เช่า">พร้อมให้เช่า</option>
                  <option value="กำลังเช่า">กำลังเช่า</option>
                  <option value="ไม่พร้อมให้เช่า">ไม่พร้อมให้เช่า</option>
                </select>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    ราคา
                  </label>
                  <input
                    type="number"
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    ส่วนลด (%)
                  </label>
                  <input
                    type="number"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <button type="button" className="btn btn-primary w-full">
                เพิ่มสินค้า
              </button>
            </form>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 border-t-4 border-blue-300">
            <h2 className="text-lg font-bold text-gray-700 mb-4">สถิติ</h2>
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Bar Chart */}
              <div className="w-full h-64">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">
                  การเช่ารายเดือน
                </h3>
                <Bar
                  data={{
                    labels: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย."],
                    datasets: [
                      {
                        label: "จำนวนการเช่า (ชุดแต่งงาน)",
                        data: [10, 20, 30, 40, 50, 60],
                        backgroundColor: "rgba(54, 162, 235, 0.6)",
                      },
                      {
                        label: "จำนวนการเช่า (ชุดราตรี)",
                        data: [15, 25, 35, 45, 55, 65],
                        backgroundColor: "rgba(255, 99, 132, 0.6)",
                      },
                      {
                        label: "จำนวนการเช่า (ชุดสูท)",
                        data: [5, 15, 25, 35, 45, 55],
                        backgroundColor: "rgba(75, 192, 192, 0.6)",
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: "top",
                      },
                      title: {
                        display: true,
                        text: "การเช่ารายเดือน (เปรียบเทียบ)",
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </>
  );
}
