import React from 'react'
import './featuredInfo.css'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function FeaturedInfo() {
    return (
        <div className="featured">
            {/* ITEM 01 */}
            <div className="featuredItem">
                <div className="featuredItemTop">
                    <div className="boxedIcon" style={{ color: '#6493F9' }}>
                        <CalendarTodayIcon />
                    </div>
                    <span className="featuredTitle">Số thứ tự đã cấp</span>
                </div>
                <div className="featuredOrderedContainer">
                    <span className="featuredOrdered">4.221</span>
                    <span className="featuredOrderedRate">
                        <ArrowUpwardIcon />
                        32,41%
                    </span>
                </div>
            </div>
            {/* ITEM 02 */}
            <div className="featuredItem">
                <div className="featuredItemTop">
                    <div className="boxedIcon" style={{ color: '#35C75A' }}>
                        <CalendarTodayIcon />
                    </div>
                    <span className="featuredTitle">Số thứ tự đã cấp</span>
                </div>
                <div className="featuredOrderedContainer">
                    <span className="featuredOrdered">4.221</span>
                    <span className="featuredOrderedRate">
                        <ArrowUpwardIcon />
                        32,41%
                    </span>
                </div>
            </div>
            {/* ITEM 03 */}
            <div className="featuredItem">
                <div className="featuredItemTop">
                    <div className="boxedIcon" style={{ color: '#FFAC6A' }}>
                        <CalendarTodayIcon />
                    </div>
                    <span className="featuredTitle">Số thứ tự đã cấp</span>
                </div>
                <div className="featuredOrderedContainer">
                    <span className="featuredOrdered">4.221</span>
                    <span className="featuredOrderedRate">
                        <ArrowUpwardIcon />
                        32,41%
                    </span>
                </div>
            </div>
            {/* ITEM 04 */}
            <div className="featuredItem">
                <div className="featuredItemTop">
                    <div className="boxedIcon" style={{ color: '#F86D6D' }}>
                        <CalendarTodayIcon />
                    </div>
                    <span className="featuredTitle">Số thứ tự đã cấp</span>
                </div>
                <div className="featuredOrderedContainer">
                    <span className="featuredOrdered">4.221</span>
                    <span className="featuredOrderedRate">
                        <ArrowUpwardIcon />
                        32,41%
                    </span>
                </div>
            </div>
        </div>
    )
}
export default FeaturedInfo
