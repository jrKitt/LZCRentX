"use client";

import React from "react";
import Sidebar from "../widgets/components/sidebar";
import Header from "../widgets/components/Header";

export default function RentalManagementPage() {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64 min-h-screen bg-[#F0F2F9]">
        <Header />
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-700">สินค้าให้เช่า</h1>
          <button className="btn btn-primary">เพิ่มสินค้าใหม่</button>
        </div>

        <div className="overflow-x-auto bg-white rounded-lg shadow-md p-4">
          <table className="table w-full">
            {/* Table Head */}
            <thead>
              <tr>
                <th>รูป</th>
                <th>ชื่อสินค้า</th>
                <th>สถานะ</th>
                <th>แก้ไข</th>
                <th>ลบ</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {/* Row 1 */}
              <tr>
                <td>
                  <div className="w-12 h-12">
                    <img
                      src="/sample.png"
                      alt="สินค้า A"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                </td>
                <td>ชุดแต่งงาน เซ็ต Premium (S)</td>
                <td>
                  <span className="badge badge-success">พร้อมให้เช่า</span>
                </td>
                <td>
                  <button className="btn btn-sm btn-warning">แก้ไข</button>
                </td>
                <td>
                  <button className="btn btn-sm btn-error">ลบ</button>
                </td>
              </tr>
              {/* Row 2 */}
              <tr>
                <td>
                  <div className="w-12 h-12">
                    <img
                      src="/sample.png"
                      alt="สินค้า B"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                </td>
                <td>ชุดแต่งงาน เซ็ต Premium (M)</td>
                <td>
                  <span className="badge badge-warning">กำลังเช่า</span>
                </td>
                <td>
                  <button className="btn btn-sm btn-warning">แก้ไข</button>
                </td>
                <td>
                  <button className="btn btn-sm btn-error">ลบ</button>
                </td>
              </tr>
              {/* Row 3 */}
              <tr>
                <td>
                  <div className="w-12 h-12">
                    <img
                      src="/sample.png"
                      alt="สินค้า C"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                </td>
                <td>ชุดแต่งงาน เซ็ต Premium (L)</td>
                <td>
                  <span className="badge badge-error">ไม่พร้อมให้เช่า</span>
                </td>
                <td>
                  <button className="btn btn-sm btn-warning">แก้ไข</button>
                </td>
                <td>
                  <button className="btn btn-sm btn-error">ลบ</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}