import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import image1 from "../images/flyers3D/1.png";
import image2 from "../images/flyers3D/2.png";
import image3 from "../images/flyers3D/3.jpg";
import image4 from "../images/flyers3D/4.jpg";
import image5 from "../images/flyers3D/5.jpg";
import image6 from "../images/flyers3D/6.JPG";

const Page3D = () => {
    const [gridWidth, setGridWidth] = useState(0);


    useEffect(() => {
        const handleResize = () => {
            setGridWidth(window.innerWidth - 340); // Ajusta el valor si necesitas un margen adicional
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleImageHover = (event) => {
        event.target.style.opacity = 0;
    };

    const handleImageLeave = (event) => {
        event.target.style.opacity = 1;
    };


    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
                width: "100%",
                overflow: "hidden",
            }}
        >
            <div style={{ width: "60%" }}>
                <Grid
                    container
                    spacing={1}
                    justifyContent="center"
                    style={{ maxWidth: `${gridWidth}px` }}
                >
                    <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>

                        <div
                            style={{
                                width: "340px",
                                height: "240px",
                                backgroundColor: "#df8f98",
                                transform: "translateY(10%)",
                                position: "relative",
                            }}
                            onMouseEnter={handleImageHover}
                            onMouseLeave={handleImageLeave}
                        >

                            <img
                                src={image1}
                                alt="Image 1"
                                style={{
                                    width: "340px",
                                    height: "240px",
                                }}
                            />
                            <p
                                style={{
                                    position: "absolute",
                                    top: "10%",
                                    left: "25%",
                                    fontWeight: 300,
                                    fontFamily: "Geologica, sans-serif",
                                    textAlign: "center",
                                    color: "#f0ede6",
                                    fontSize: "20px",
                                    zIndex: -1,
                                }}
                            >
                                Me gustó todo <br />
                                San Jorge, Santa Fe <br />
                                2018
                            </p>

                        </div>

                    </Grid>
                    <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>

                        <div
                            style={{
                                width: "310px",
                                height: "280px",
                                backgroundColor: "#df8f98",
                                transform: "translateX(15%)",
                                position: "relative",
                            }}
                            onMouseEnter={handleImageHover}
                            onMouseLeave={handleImageLeave}
                        >
                            <img
                                src={image2}
                                alt="Image 2"
                                style={{ width: "310px", height: "280px" }}

                            />
                            <p
                                style={{
                                    position: "absolute",
                                    top: "10%",
                                    left: "5%",
                                    fontWeight: 300,
                                    fontFamily: "Geologica, sans-serif",
                                    textAlign: "center",
                                    color: "#f0ede6",
                                    fontSize: "20px",
                                    zIndex: -1,
                                }}
                            >
                                Welcome La Florida <br />
                                Santa Cruz de la Sierra, Bolivia <br />
                                2016
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>
                        <div
                            style={{
                                width: "240px",
                                height: "300px",
                                backgroundColor: "#df8f98",
                                transform: "translateX(20%)",
                                position: "relative",

                            }}
                            onMouseEnter={handleImageHover}
                            onMouseLeave={handleImageLeave}
                        >
                            <img
                                src={image3}
                                alt="Image 3"
                                style={{ width: "240px", height: "300px" }}
                            />
                            <p
                                style={{
                                    position: "absolute",
                                    top: "10%",
                                    left: "5%",
                                    fontWeight: 300,
                                    fontFamily: "Geologica, sans-serif",
                                    textAlign: "center",
                                    color: "#f0ede6",
                                    fontSize: "20px",
                                    zIndex: -1,
                                }}
                            >
                                Makeover - Pasto <br />
                                Buenos Aires, Argentina <br />
                                2013
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>

                        <div
                            style={{
                                width: "240px",
                                height: "370px",
                                backgroundColor: "#df8f98",


                            }}
                            onMouseEnter={handleImageHover}
                            onMouseLeave={handleImageLeave}
                        >

                            <img
                                src={image4}
                                alt="Image 4"
                                style={{ width: "240px", height: "370px" }}
                            />

                        </div>
                    </Grid>
                    <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>
                        <div
                            style={{
                                width: "250px",
                                height: "360px",
                                backgroundColor: "#df8f98",
                                transform: "translateX(20%)"
                            }}
                            onMouseEnter={handleImageHover}
                            onMouseLeave={handleImageLeave}
                        >
                            <img
                                src={image5}
                                alt="Image 5"
                                style={{ width: "250px", height: "360px" }}
                            />

                        </div>
                    </Grid>
                    <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>
                        <div
                            style={{
                                width: "240px",
                                height: "350px",
                                backgroundColor: "#df8f98",
                                transform: "translateX(20%)",

                            }}
                            onMouseEnter={handleImageHover}
                            onMouseLeave={handleImageLeave}
                        >
                            <img
                                src={image6}
                                alt="Image 6"
                                style={{ width: "240px", height: "350px" }}
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div >
    );
};

export default Page3D;
