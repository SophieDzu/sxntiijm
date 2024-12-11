import React from 'react';

function Navbar() {
    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#3E2723" }}>
                <div className="container-fluid">
                    <a className="navbar-brand ms-5" href="#">
                        <img src="/img/logo.png" alt="NTM HOTEL" style={{ height: "40px" }} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">หน้าหลัก</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">บริการ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">เกี่ยวกับโรมแรม</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">ช่องทางการติดต่อ</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-white me-5" href="#">ออกจากระบบ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
