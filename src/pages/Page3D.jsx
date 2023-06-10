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

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
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
                        <img
                            src={image1}
                            alt="Image 1"
                            style={{ width: "100%", height: "auto", objectFit: "contain" }}
                        />
                    </Grid>
                    <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>
                        <img
                            src={image2}
                            alt="Image 2"
                            style={{ width: "90%", height: "auto", objectFit: "contain" }}
                        />
                    </Grid>
                    <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>
                        <img
                            src={image3}
                            alt="Image 3"
                            style={{ width: "70%", height: "auto", objectFit: "contain" }}
                        />
                    </Grid>
                    <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>
                        <img
                            src={image4}
                            alt="Image 4"
                            style={{ width: "70%", height: "auto", objectFit: "contain" }}
                        />
                    </Grid>
                    <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>
                        <img
                            src={image5}
                            alt="Image 5"
                            style={{ width: "80%", height: "auto", objectFit: "contain" }}
                        />
                    </Grid>
                    <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>
                        <img
                            src={image6}
                            alt="Image 6"
                            style={{ width: "80%", height: "auto", objectFit: "contain" }}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Page3D;
