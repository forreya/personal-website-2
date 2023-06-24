import React, { useContext } from "react";
import { TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Container, Map, ContactInfo } from "./styles";
import "leaflet/dist/leaflet.css";
import { AiFillPhone, MdEmail } from "../../styles/Icons";
import { ThemeContext } from "styled-components";
import { motion } from "framer-motion";

function MapComp() {
  const { title } = useContext(ThemeContext);

  const MarkerIcon = L.icon({
    iconUrl: "/static/assets/marker.png",
    iconSize: [70, 70],
    iconAnchor: [12, 12],
    popupAnchor: [0, 0],
  });

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.7 }}
    >
      {title === "light-theme" ? (
        <Map center={[51.54331, -0.15293]} zoom={15} zoomControl={false}>
          <ContactInfo>
            <div>
              <p>Ryan Lai,</p>
              <p>London, United Kingdom</p>
            </div>
            <div>
              <span>
                <AiFillPhone /> +44 7555747347
              </span>
              <span>
                <MdEmail className="email" /> ryanlai12@gmail.com
              </span>
            </div>
          </ContactInfo>
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/twilightmoon/cl70w18v6000v15moe6rcn2iy/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidHdpbGlnaHRtb29uIiwiYSI6ImNsOTFmcWpjZjFhMTEzeG5uMWl5MXl5MWgifQ.D8WHcu-sz_JmbKyFBOCYAw`}
          />
          <Marker icon={MarkerIcon} position={[51.54331, -0.15293]}>
            <Popup>
              You found me! <br />
            </Popup>
          </Marker>
        </Map>
      ) : (
        <Map center={[51.54331, -0.15293]} zoom={15} zoomControl={false}>
          <ContactInfo>
            <div>
              <p>Ryan Lai,</p>
              <p>London, United Kingdom</p>
            </div>
            <div>
              <span>
                <AiFillPhone /> +44 7555747347
              </span>
              <span>
                <MdEmail className="email" /> ryanlai12@gmail.com
              </span>
            </div>
          </ContactInfo>
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/twilightmoon/cl91fs2vr00eh15mv8bfayex7/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidHdpbGlnaHRtb29uIiwiYSI6ImNsOTFmcWpjZjFhMTEzeG5uMWl5MXl5MWgifQ.D8WHcu-sz_JmbKyFBOCYAw`}
          />
          <Marker icon={MarkerIcon} position={[51.54331, -0.15293]}>
            <Popup>
              You found me! <br />
            </Popup>
          </Marker>
        </Map>
      )}
    </Container>
  );
}

export default MapComp;
