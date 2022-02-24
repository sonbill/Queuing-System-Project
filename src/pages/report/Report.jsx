import React from 'react';
import Sidebar from '../../components/sidebar_left/Sidebar'
import TopNav from '../../components/topbar/TopNav'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import Datepicker from './Datepicker/Datepicker'
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import { reportRows } from '../../dummyData'
import * as XLSX from 'xlsx';

import './report.css'

export default function Report() {
  const downloadExcel = () => {
    const workSheet = XLSX.utils.json_to_sheet(reportRows)
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "")

    let buf = XLSX.write(workBook, { bookType: "xlsx", type: "buffer" })

    XLSX.write(workBook, { bookType: "xlsx", type: "binary" })

    XLSX.writeFile(workBook, "Report.xlsx")

  }


  const reportColumns = [
    { field: 'id', headerName: 'Số thứ tự', width: 130 },
    { field: 'service', headerName: 'Tên dịch vụ', width: 200 },
    { field: 'dateProvide', headerName: 'Thời gian cấp', width: 200 },
    { field: 'status', headerName: 'Tình trạng', width: 200, },
    { field: 'equipments', headerName: 'Nguồn cấp', width: 200 },
  ];

  return (
    <div className="report">
      <Sidebar />
      <div className="report__layout" >
        <TopNav name={'Lập báo cáo'} />
        <div className="report__wrapper">
          <h2 className="report__title">Quản lý cấp số</h2>
          <div className="report__function">
            <div className="report__func__items">
              <p className="report__func__title">Chọn thời gian</p>
              <Datepicker />
            </div>
          </div>
          <div className="report__content">
            <div className="report__table">
              <DataGrid
                rows={reportRows}
                columns={reportColumns}
                pageSize={10}
                rowsPerPageOptions={[8]}
              />
            </div>
            <div className="report__download">
              <Link to={""} onClick={downloadExcel}>
                <SimCardDownloadIcon style={{
                  fontSize: 30
                }} />
                <p>Tải về</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
