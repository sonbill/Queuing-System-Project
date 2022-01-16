import React from 'react'
import './featuredInfo.css'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function FeaturedInfo() {
    return (
        <div className="featured">
            {/* ITEM 01 */}
            <div className="featuredItem">
                <div className="featuredItemGroup">
                    <div className="featuredItemTop">
                        <div className="boxedIcon" style={{ color: '#6493F9' }}>
                            <CalendarTodayIcon />
                        </div>
                        <span className="featuredTitle">Số thứ tự đã cấp</span>
                    </div>
                    <div className="featuredOrderedContainer">
                        <span className="featuredOrdered">4.221</span>
                        <span className="featuredOrderedRate" style={{ color: '#FFAC6A', backgroundColor: '#FCEED9' }}>
                            <ArrowUpwardIcon style={{ fontSize: 16 }} />
                            32,41%
                        </span>
                    </div>
                </div>
            </div>
            {/* ITEM 02 */}
            <div className="featuredItem">
                <div className="featuredItemGroup">
                    <div className="featuredItemTop">
                        <div className="boxedIcon" style={{ color: '#35C75A', }}>
                            <CalendarTodayIcon />
                        </div>
                        <span className="featuredTitle">Số thứ tự đã sử dụng</span>
                    </div>
                    <div className="featuredOrderedContainer">
                        <span className="featuredOrdered">3.721</span>
                        <span className="featuredOrderedRate" style={{ color: 'red', backgroundColor: '#FAE1E1' }}>
                            <ArrowDownwardIcon style={{ fontSize: 16 }} />
                            32,41%
                        </span>
                    </div>
                </div>
            </div>
            {/* ITEM 03 */}
            <div className="featuredItem">
                <div className="featuredItemGroup">
                    <div className="featuredItemTop">
                        <div className="boxedIcon" style={{ color: '#FFAC6A', fontSize: 20 }}>
                            <CalendarTodayIcon />
                        </div>
                        <span className="featuredTitle">Số thứ tự đang chờ</span>
                    </div>
                    <div className="featuredOrderedContainer">
                        <span className="featuredOrdered">468</span>
                        <span className="featuredOrderedRate" style={{ color: '#FFAC6A', backgroundColor: '#FCEED9' }}>
                            <ArrowUpwardIcon style={{ fontSize: 16 }} />
                            56,41%
                        </span>
                    </div>
                </div>
            </div>
            {/* ITEM 04 */}
            <div className="featuredItem">
                <div className="featuredItemGroup">
                    <div className="featuredItemTop">
                        <div className="boxedIcon" style={{ color: '#F86D6D' }}>
                            <CalendarTodayIcon />
                        </div>
                        <span className="featuredTitle">Số thứ tự đã bỏ qua</span>
                    </div>
                    <div className="featuredOrderedContainer">
                        <span className="featuredOrdered">32</span>
                        <span className="featuredOrderedRate" style={{ color: 'red', backgroundColor: '#FAE1E1' }}>
                            <ArrowDownwardIcon style={{ fontSize: 16 }} />
                            22,41%
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FeaturedInfo
