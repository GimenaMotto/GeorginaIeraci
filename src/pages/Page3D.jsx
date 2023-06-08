import React from "react";
import { ImageList, ImageListItem } from "@mui/material";
import image1 from "../images/flyers3D/1.png";
import image2 from "../images/flyers3D/2.png";
import image3 from "../images/flyers3D/3.jpg";
import image4 from "../images/flyers3D/4.jpg";
import image5 from "../images/flyers3D/5.jpg";
import image6 from "../images/flyers3D/6.JPG";

const Page3D = () => {
    const images = [
        { src: image1, title: "Imagen 1" },
        { src: image2, title: "Imagen 2" },
        { src: image3, title: "Imagen 3" },
        { src: image4, title: "Imagen 4" },
        { src: image5, title: "Imagen 5" },
        { src: image6, title: "Imagen 6" },
        // Agrega más imágenes aquí
    ];

    return (
        <div className="Page3D" style={{ margin: "50px auto" }}>
            <ImageList sx={{ width: "80%", margin: "0 auto", gap: 16, paddingLeft: 32 }} cols={3} rowHeight={220}>
                <ImageListItem key={1} sx={{ width: "33%", height: "auto", marginBottom: 16 }}>
                    <img src={images[0].src} alt={images[0].title} style={{ objectFit: "contain", width: "120%", height: "120%" }} />
                </ImageListItem>
                <ImageListItem key={2} sx={{ width: "33%", height: "auto", marginBottom: 16 }}>
                    <img src={images[1].src} alt={images[1].title} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
                </ImageListItem>
                <ImageListItem key={3} sx={{ width: "33%", height: "auto", marginBottom: 16 }}>
                    <img src={images[2].src} alt={images[2].title} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
                </ImageListItem>
                <ImageListItem key={4} sx={{ width: "33%", height: "auto", marginBottom: 16 }}>
                    <img src={images[3].src} alt={images[3].title} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
                </ImageListItem>
                <ImageListItem key={5} sx={{ width: "33%", height: "auto", marginBottom: 16 }}>
                    <img src={images[4].src} alt={images[4].title} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
                </ImageListItem>
                <ImageListItem key={6} sx={{ width: "33%", height: "auto", marginBottom: 16 }}>
                    <img src={images[5].src} alt={images[5].title} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
                </ImageListItem>
            </ImageList>
        </div>
    );
};

export default Page3D;
