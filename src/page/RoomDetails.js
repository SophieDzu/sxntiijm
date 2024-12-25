import React from "react";

function RoomDetails() {
    return (
        <div className="row mt-4 me-4 ms-4">
            <div className="container d-flex justify-content-start gap-3 mb-4">
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
                    <label className="d-inline-block" style={{ backgroundColor: "#C59A71", borderRadius: "10px", color: "white", padding: "5px 10px", whiteSpace: "nowrap" }}>
                        ราคา : 1,000,000 บาท / คืน
                    </label>
                </div>
            </div>

            <div className="container">
                <div className="row g-2">
                    <div className="col-md-6">
                        <img
                            src="img/banner.jpg"
                            className="img-fluid rounded"
                            alt="Image 1"
                            style={{ width: "100%", maxHeight: "400px" }}
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="row g-2">
                            <div className="col-12">
                                <img
                                    src="img/banner.jpg"
                                    className="img-fluid rounded"
                                    alt="Wide Image"
                                    style={{ width: "100%", maxHeight: "196px", objectFit: "cover" }}
                                />
                            </div>
                            <div className="col-6">
                                <img
                                    src="img/banner3.jpg"
                                    className="img-fluid rounded"
                                    alt="Image 2"
                                    style={{ width: "100%", maxHeight: "196px", objectFit: "cover" }}
                                />
                            </div>
                            <div className="col-6">
                                <img
                                    src="img/banner3.jpg"
                                    className="img-fluid rounded"
                                    alt="Image 3"
                                    style={{ width: "100%", maxHeight: "196px", objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-2">
                <div className="row mb-4 g-2">
                    <div className="col-9">
                        <div style={{ height: "200px" }} className="d-flex rounded">
                            <div className="container my-4">
                                <div className="d-flex flex-wrap gap-3 mt-3">
                                    <div className="d-flex align-items-center">
                                        <div
                                            style={{
                                                backgroundColor: "#3E2723",
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <i className="bi bi-wifi" style={{ color: "white", fontSize: "20px" }}></i>
                                        </div>
                                        <span className="ms-2">Wi-Fi</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div
                                            style={{
                                                backgroundColor: "#3E2723",
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <i className="bi bi-cup-hot" style={{ color: "white", fontSize: "20px" }}></i>
                                        </div>
                                        <span className="ms-2">อาหารเช้า</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div
                                            style={{
                                                backgroundColor: "#3E2723",
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <i className="bi bi-tree" style={{ color: "white", fontSize: "20px" }}></i>
                                        </div>
                                        <span className="ms-2">สวนส่วนตัว</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div
                                            style={{
                                                backgroundColor: "#3E2723",
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <i className="bi bi-bicycle" style={{ color: "white", fontSize: "20px" }}></i>
                                        </div>
                                        <span className="ms-2">จักรยาน</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div
                                            style={{
                                                backgroundColor: "#3E2723",
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <i className="bi bi-door-open" style={{ color: "white", fontSize: "20px" }}></i>
                                        </div>
                                        <span className="ms-2">อ่างอาบน้ำ</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div
                                            style={{
                                                backgroundColor: "#3E2723",
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <i className="bi bi-p-circle" style={{ color: "white", fontSize: "20px" }}></i>
                                        </div>
                                        <span className="ms-2">ที่จอดรถ</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div
                                            style={{
                                                backgroundColor: "#3E2723",
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <i className="bi bi-water" style={{ color: "white", fontSize: "20px" }}></i>
                                        </div>
                                        <span className="ms-2">สระว่ายน้ำ</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div
                                            style={{
                                                backgroundColor: "#3E2723",
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <i className="bi bi-person-check" style={{ color: "white", fontSize: "20px" }}></i>
                                        </div>
                                        <span className="ms-2">แม่บ้านทำความสะอาด</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div
                                            style={{
                                                backgroundColor: "#3E2723",
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <i className="bi bi-plug" style={{ color: "white", fontSize: "20px" }}></i>
                                        </div>
                                        <span className="ms-2">เครื่องใช้ไฟฟ้าอื่นๆ</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-3">
                        <div style={{ backgroundColor: "#E0E0E0", height: "200px" }} className="d-flex align-items-center justify-content-center rounded">
                            <p>เลือกวันที่จอง</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-start">
                <h3><strong>เกี่ยวกับที่พัก</strong></h3>
                <p>ห้องที่ตึงที่สุดในจักรวาลมาเวล มีขนาดกว้างขวางกว่าห้องมาตรฐานอย่างมาก เหมาะสำหรับครอบครัวหรือกลุ่มคน 7-10 คน ภายในห้องจะมีเตียงขนาดใหญ่ เช่น เตียงควีนไซส์หรือคิงไซส์ พร้อมสิ่งอำนวยความสะดวกครบครัน เช่น โทรทัศน์จอแบน, ผาเช็ดตัว, wi-fi, เครื่องปรับอากาศ, อ่างอาบนํ้า, สระว่ายนํ้า และมีบริการอาหารเช้า/เย็น ฟรี</p>
            </div>
            <hr></hr>

            {/* <div className="container">
                <h4>เกี่ยวกับห้องพัก</h4>
                <p>ห้องที่ตึงที่สุดในจักรวาลมาเวล...</p>
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
            </div> */}
        </div>
    );
}

export default RoomDetails;
