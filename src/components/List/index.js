import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const List = () => {
  const data = [
    {
      name: "GO AIR",
      date: "4th-7th Oct 2022",
      size: "3600 Crores",
      range: "50-60",
      invest: "50,000",
      qty: "100shares/5Lo",
      img:"https://assets.planespotters.net/files/airlines/1/goair_72e0ed_opk.png"
    },
    {
      name: "BAJAJ ENERGY",
      date: "4th-7th Oct 2022",
      size: "3600 Crores",
      range: "50-60",
      invest: "50,000",
      qty: "100shares/5Lo",
      img:"https://www.bajajenergy.com/bajajenergy_assets/s3fs-public/images/Bajaj%20Energy_300x118_Png.png"
    },
    {
      name: "OYO",
      date: "To be announced",
      size: "3600 Crores",
      range: "50-60",
      invest: "50,000",
      qty: "100shares/5Lo",
      img:"https://www.oyorooms.com/officialoyoblog/wp-content/uploads/2019/06/OYO_Rooms_logo-992x680.png"
    },
  ];

  const navigate = useNavigate();
  const details = (each) => {
    navigate("/details", {
      state: {
        data: each,
      },
    });
  };

  return (
    <div>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr style={{ backgroundColor:"#c0c0c0"}}>
            <th style={{width:"30%"}}>Company/Issue date</th>
            <th>Issue size</th>
            <th>Price range</th>
            <th>Min invest/Qty</th>
          </tr>
          {data.map((each) => (
            <tr key={each.name}>
              <td onClick={() => details(each)} style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"10px",cursor:"pointer"}}>
                <img src={each.img} style={{width:"15%"}}/>
                <p>
                {each.name}
                <br />
                <span style={{ fontSize: "10px" }}>{each.date}</span>
                </p>
              </td>
              <td>{each.size}</td>
              <td>{each.range}</td>
              <td>
                {each.invest}
                <br/>
                <span>{each.qty}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
