import React, { useState, useEffect } from 'react'
import TopNav from '../../components/topbar/TopNav'
import Sidebar from '../../components/sidebar_left/Sidebar'
import { Link } from 'react-router-dom'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';


import { useParams } from "react-router-dom";
import { db } from '../../firebase-config'
import { doc, getDoc } from 'firebase/firestore'

import './detailOrdinalNumbers.css'

export default function DetailOrdinalNumbers() {
  const [detailOrdinalNumbers, setDetailOrdinalNumbers] = useState([])

  const params = useParams()
  const provideNumberID = params.provideNumberID

  const userData = async () => {
    const docRef = doc(db, "ordinalNumbers", provideNumberID);
    const docSnap = await getDoc(docRef);
    setDetailOrdinalNumbers(docSnap.data())
  }

  useEffect(() => {
    userData();
  }, []);

  return (
    <div>
      <div className="detailOrdinalNumbers">
        <Sidebar />
        <div className="detailOrdinalNumbers__layout">
          <TopNav name={'Chi tiết'} />
          <div className="detailOrdinalNumbers__infor">
            <div className="detailOrdinalNumbers__leftLayout">
              <h1 className="detailOrdinalNumbers__infor__title">Quản lý cấp số</h1>
              {
                <div key={detailOrdinalNumbers.id} className="detailOrdinalNumbers__infor__detail">
                  <h2>Thông tin cấp số</h2>
                  <div className="detailOrdinalNumbers__infor__wrapper">
                    <div className="detailOrdinalNumbers__infor__left">
                      <div className="detailOrdinalNumbers__info__leftItem">
                        <h5>Họ tên: </h5>
                        <p>{detailOrdinalNumbers.odUsername}</p>
                      </div>
                      <div className="detailOrdinalNumbers__info__leftItem">
                        <h5>Tên dịch vụ: </h5>
                        <p>{detailOrdinalNumbers.odService}</p>
                      </div>
                      <div className="detailOrdinalNumbers__info__leftItem">
                        <h5>Số thứ tự: </h5>
                        <p>{detailOrdinalNumbers.odID}</p>
                      </div>
                      <div className="detailOrdinalNumbers__info__leftItem">
                        <h5>Thời gian cấp: </h5>
                        <p>{detailOrdinalNumbers.odCreatedAt}</p>
                      </div>
                      <div className="detailOrdinalNumbers__info__leftItem">
                        <h5>Hạn sử dụng: </h5>
                        <p>{detailOrdinalNumbers.odExpired}</p>
                      </div>
                    </div>
                    <div className="detailOrdinalNumbers__infor__right">
                      <div className="detailOrdinalNumbers__info__rightItem">
                        <h5>Nguồn cấp: </h5>
                        <p>{detailOrdinalNumbers.odEquipment}</p>
                      </div>
                      <div className="detailOrdinalNumbers__info__rightItem">
                        <h5>Trạng thái: </h5>
                        <p>{detailOrdinalNumbers.odStatus}</p>
                      </div>
                      <div className="detailOrdinalNumbers__info__rightItem">
                        <h5>Số điện thoại: </h5>
                        <p></p>
                      </div>
                      <div className="detailOrdinalNumbers__info__rightItem">
                        <h5>Địa chỉ Email: </h5>
                        <p>{detailOrdinalNumbers.odEmail}</p>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
            <div className="detailOrdinalNumbers__rightLayout">
              <KeyboardReturnIcon style={{
                fontSize: 20
              }} />
              <Link to={"/provide-numbers"}>
                <a href="/provide-numbers">Quay lại</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      );
    </div>
  )
}
