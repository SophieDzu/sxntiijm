import React from "react";

function RoomDetails() {
    return (
        <div className="row mt-4">
            <div className="container d-flex justify-content-start gap-3 me-4 ms-4 mb-4">
                <div>
                    <label className="d-inline-block" style={{ backgroundColor: "#3E2723", borderRadius: "10px", color: "white", padding: "5px 10px", whiteSpace: "nowrap" }}>
                        ห้องพักที่ตึงที่สุดในจักรวาลมาเวล
                    </label>
                </div>
                <div>
                    <label className="d-inline-block" style={{ backgroundColor: "#3E2723", borderRadius: "10px", color: "white", padding: "5px 10px", whiteSpace: "nowrap" }}>
                        ประเภทห้อง : ครอบครัว
                    </label>
                </div>
                <div>
                    <label className="d-inline-block" style={{ backgroundColor: "#3E2723", borderRadius: "10px", color: "white", padding: "5px 10px", whiteSpace: "nowrap" }}>
                        ราคา : 10000 บาท / คืน
                    </label>
                </div>
            </div>

            <div className="container ms-4 me-4">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://via.placeholder.com/1000x500" className="img-fluid rounded" alt="Image 1" />
                    </div>
                    <div className="col-md-6">
                        <div className="row g-2">
                            <div className="col-6"><img src="https://via.placeholder.com/250" className="img-fluid rounded" alt="Image 2" /></div>
                            <div className="col-6"><img src="https://via.placeholder.com/250" className="img-fluid rounded" alt="Image 3" /></div>
                            <div className="col-6"><img src="https://via.placeholder.com/250" className="img-fluid rounded" alt="Image 4" /></div>
                            <div className="col-6"><img src="https://via.placeholder.com/250" className="img-fluid rounded" alt="Image 5" /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-4">
                <div className="row text-center feature-icons">
                    <div className="col"><i className="bi bi-wifi"></i><br /><span>Wi-Fi</span></div>
                    <div className="col"><i className="bi bi-tree"></i><br /><span>สวนสวย</span></div>
                    <div className="col"><i className="bi bi-bicycle"></i><br /><span>จักรยานฟรี</span></div>
                    <div className="col"><i className="bi bi-cup"></i><br /><span>อาหารเช้า</span></div>
                </div>
            </div>

            <div className="container">
                <h4>เกี่ยวกับห้องพัก</h4>
                <p>ห้องที่ดีที่สุดในจักรวาลนามอล...</p>
            </div>

            <div className="container my-4">
                <h4>ห้องพักที่คล้ายกัน / แนะนำ</h4>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card card-custom">
                            <img src="https://via.placeholder.com/300" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">ห้องพักหรู</h5>
                                <p className="card-text">รายละเอียด...</p>
                                <button className="btn btn-custom">ดูเพิ่มเติม</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RoomDetails;
