import React from "react";

function Carousel() {
    return (
        <div className="row">
            <div className="container-fluid px-5 mt-4">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="/img/banner.jpg"
                                className="d-block w-100"
                                alt="banner1"
                                style={{
                                    height: "700px",
                                    objectFit: "cover",
                                    borderTopLeftRadius: "20px",
                                    borderTopRightRadius: "20px",
                                }}
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="/img/banner.jpg"
                                className="d-block w-100"
                                alt="banner2"
                                style={{
                                    height: "700px",
                                    objectFit: "cover",
                                    borderTopLeftRadius: "20px",
                                    borderTopRightRadius: "20px",
                                }}
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="/img/banner.jpg"
                                className="d-block w-100"
                                alt="banner3"
                                style={{
                                    height: "700px",
                                    objectFit: "cover",
                                    borderTopLeftRadius: "20px",
                                    borderTopRightRadius: "20px",
                                }}
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div
                    style={{
                        backgroundColor: "#3E2723",
                        borderBottomLeftRadius: "20px",
                        borderBottomRightRadius: "20px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                    }}
                >
                    <label
                        className="text-light"
                        style={{
                            lineHeight: "1.8",
                        }}
                    >
                        NTMHOTEL.JEZUZ.KUNGFU
                    </label>
                </div>


            </div>
        </div>
    );
}

export default Carousel;
