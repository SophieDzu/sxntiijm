import React from "react";
import { useNavigate } from "react-router-dom";

function Review() {
    const navigate = useNavigate();
    return (

        <div className="row me-4 ms-4 mt-4">
            <div className="col-lg-8">
                <div className="card p-3" style={{ border: "3px solid #3E2723", borderRadius: "15px" }}>
                    <div className="d-flex justify-content-start mb-3">
                        <button class="btn btn-sm w-50 me-3" style={{ backgroundColor: "#3E2723", borderColor: "#3E2723", color: "#ffffff" }}>
                            รีวิว
                        </button>
                        <button class="btn btn-sm w-50" style={{ backgroundColor: "#3E2723", borderColor: "#3E2723", color: "#ffffff" }}>
                            ห้อง
                        </button>
                    </div>

                    <div className="card mb-3" style={{ border: "3px solid #3E2723" }}>
                        <img
                            src="/img/banner2.jpg"
                            className="card-img-top"
                            alt="room1"
                            style={{ height: "300px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                            <h6 className="card-title"><strong>ห้อง : ห้องที่ตึงที่สุดในจักรวาลมาเวล</strong></h6>
                            <p className="card-text text-muted">
                                <strong>user0001</strong> ห้องหรู วิวดีเยี่ยม ส่วนตัวมากและอาหารอร่อย โดยรวมประทับใจมากครับ
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <span className="text-warning">คะแนน:</span>
                                    {" ★★★★★"}
                                </div>
                                <button
                                    className="btn btn-sm w-25"
                                    style={{ backgroundColor: "#3E2723", borderColor: "#3E2723", color: "#ffffff" }}
                                    onClick={() => navigate('/roomdetails')}
                                >
                                    เข้าดู
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ border: "3px solid #3E2723" }}>
                        <img
                            src="/img/banner3.jpg"
                            className="card-img-top"
                            alt="room2"
                            style={{ height: "300px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                            <h6 className="card-title"><strong>ห้อง : ห้องที่ดีที่สุดในจักรวาลมาเวล V2</strong></h6>
                            <p className="card-text text-muted">
                                <strong>user0002</strong> นี่แหละ ถ้าอยากชิล ขอห้องเรียบ สงบมากโดยไม่ผิดหวัง
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <span className="text-warning">คะแนน:</span>
                                    {" ★★★★★"}
                                </div>
                                <button
                                    className="btn btn-sm w-25"
                                    style={{ backgroundColor: "#3E2723", borderColor: "#3E2723", color: "#ffffff" }}
                                    onClick={() => navigate('/roomdetails')}
                                >
                                    เข้าดู
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="card p-3" style={{ border: "3px solid #3E2723", borderRadius: "15px" }}>
                    <h5 className="mb-3 text-start" style={{ color: '#3E2723' }}><strong>โปรโมชั่น</strong></h5>
                    <div class="mb-3" style={{ position: "relative", border: "3px solid #3E2723", borderRadius: "15px" }}>
                        <img
                            src="/img/banner3.jpg"
                            alt="promo1"
                            style={{ height: "150px", objectFit: "cover", width: "100%", borderRadius: "15px" }}
                        />
                        <div style={{
                            position: "absolute",
                            top: "50%",
                            left: "10px",
                            transform: "translateY(-50%)",
                            color: "white",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            padding: "5px",
                            textAlign: "left"
                        }}>
                            <h6 className="card-title"><strong>ลด 15% สำหรับลูกค้าใหม่</strong></h6>
                            <a href="#" className="text-light">
                                รายละเอียด &gt;&gt;
                            </a>
                        </div>
                    </div>

                    <div class="mb-5" style={{ position: "relative", border: "3px solid #3E2723", borderRadius: "15px" }}>
                        <img
                            src="/img/banner3.jpg"
                            alt="promo2"
                            style={{ height: "150px", objectFit: "cover", width: "100%", borderRadius: "15px" }}
                        />
                        <div style={{
                            position: "absolute",
                            top: "50%",
                            left: "10px",
                            transform: "translateY(-50%)",
                            color: "white",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            padding: "5px",
                            textAlign: "left"
                        }}>
                            <h6 className="card-title"><strong>คูปองลดราคา 20% 5 สิทธิ์</strong></h6>
                            <a href="#" className="text-light">
                                รายละเอียด &gt;&gt;
                            </a>
                        </div>
                    </div>




                    <div className="mt-4 bg-light mt-5">
                        <div className="card-body text-start" style={{ color: '#3E2723' }}>
                            <h5><strong>รายละเอียด</strong></h5>
                            <p><strong>ที่อยู่:</strong> 101/1 ซอย 5 อำเภอเมือง จังหวัดเชียงใหม่ 50000</p>
                            <p><strong>คะแนนโดยรวม:</strong> 5 ดาว</p>
                            <p><strong>เปิดให้เข้าพักทุกวัน:</strong> เช็คอินได้ตลอด 24 ชั่วโมง</p>
                            <p><strong>Wi-Fi:</strong> ฟรีทุกห้อง และไม่จำกัดเวลา</p>
                            <p><strong>ห้องนอน:</strong> มีบริการทำความสะอาด บริการซักผ้าให้ฟรี</p>
                            <p><strong>ที่จอดรถ:</strong> 1 ที่สำหรับห้องเดี่ยว/คู่ 2 ที่สำหรับห้องแบบครอบครัว</p>
                            <p><strong>พื้นที่สำหรับเด็กเล็ก:</strong> มีสวนสนุกขนาดย่อมเปิดบริการตั้งแต่ 7:00 น. - 17:00 น.</p>
                            <br></br>
                            <hr></hr>
                            <h5><strong>สอบถามรายละเอียดเพิ่มเติมได้ที่</strong></h5>
                            <ul>
                                <li><strong>ติดต่อ:</strong> 090-999-0000</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Review;
