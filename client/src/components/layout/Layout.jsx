// import library yang dibutuhkan
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import { Box } from "@chakra-ui/react";

// buat komponen Layout
export default function Layout() {
  return (
    <Box w={"100vw"} maxW="100%" bgColor={"white"}>
      {/* menampilak komponen sidebar */}
      <Sidebar />
      {/* outlet adalah komponen yang akan ditampilkan di dalam layout yang di definisikan di App.jsx / pada rute utama */}
      <Outlet /> {/* tampilkan outlet */}
    </Box>
  );
}
