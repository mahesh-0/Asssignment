import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RiFileDownloadLine } from "react-icons/ri";
import { Step, Stepper, StepLabel, Typography } from "@material-ui/core";
import GreenCheckIcon from "../Greencheck";
import { MdKeyboardArrowLeft } from "react-icons/md";
import html2pdf from "html2pdf.js";


const Details = () => {
  const location = useLocation();
  const receivedData = location.state?.data;
  const navigate=useNavigate()
  const isMobileView = window.innerWidth <= 576;
  const handleDownload = () => {
    const element = document.getElementById("details-container");
    if (!element) {
      console.error("Element with id 'details-container' not found.");
      return;
    }
    html2pdf()
      .from(element)
      .save();
  };
  return (
    <div>
      <p style={{textAlign:"center",width:"30%"}}>Home &gt;Market watch</p>
      <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent:"center"
      }}
      >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent:"space-between",
          width : "80%",
          alignItems : "center"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px"
          }}
        >
          <button style={{ border: "2px solid gray", padding: "5px",background:"white", color:"gray", borderRadius:"5px", fontSize:"1.8rem",cursor:"pointer"}} onClick={()=>navigate("/")}><MdKeyboardArrowLeft /></button>
          <img src={receivedData.img} style={{width:"80px"}}/>
          <p>
            {receivedData.name}
            <br />
            <span>{receivedData.name} Private Limited</span>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <RiFileDownloadLine style={{ width: "50px", height: "30px" }} onClick={handleDownload} />
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            Apply now
          </button>
        </div>
      </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "80%",
            border: "1px solid black",
            borderRadius: "10px",
          }}
        >
          <h2 style={{textAlign:"left",margin:"10px"}}>IPO details</h2>
          <div
            style={{
              border: "1px solid black",
              margin: "10px",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                width: isMobileView ? "230px" :""
              }}
            >
              <p style={{ width: "20%" }}>
                Issue size
                <br />
                <span>{receivedData.size}</span>
              </p>
              <p style={{ width: "20%" }}>
                Price Range
                <br />
                <span>{receivedData.range}</span>
              </p>
              <p style={{ width: "20%" }}>
                Minimum amount
                <br />
                <span>{receivedData.min}</span>
              </p>
              <p style={{ width: "20%" }}>
                Lot size
                <br />
                <span>{receivedData.qty}</span>
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                width: isMobileView ? "230px" : ""
              }}
            >
              <p style={{ width: "19%" }}>
                Issue dates
                <br />
                <span>{receivedData.date}</span>
              </p>
              <p style={{ width: "19%" }}>
                Listed on
                <br />
                <span>{receivedData.date}</span>
              </p>
              <p style={{ width: "19%" }}>
                Listed price
                <br />
                <span>{receivedData.range}</span>
              </p>
              <p style={{ width: "19%" }}>
                Listing gains
                <br />
                <span>{receivedData.qty}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{display:'flex',justifyContent:"center",alignItems:'center'}}>
      <div style={{width:"80%",border:"1px solid black",borderRadius:'10px',margin:'10px'}}>
        <h1 style={{ textAlign: "left",margin:"10px" }}>IPO timeline</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stepper activeStep={(1, 2, 3,4,5,6)}  orientation={isMobileView ? "vertical" : "horizontal"} alternativeLabel={!isMobileView} >
          <Step>
            <StepLabel StepIconComponent={GreenCheckIcon}>
              <Typography>Bidding starts<br/>12 Dec 2023</Typography>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel StepIconComponent={GreenCheckIcon}>
              <Typography>Bidding ends<br/>12 Dec 2023</Typography>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel StepIconComponent={GreenCheckIcon}>
              <Typography>Allotment finalization<br/>12 Dec 2023</Typography>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel StepIconComponent={GreenCheckIcon}>
              <Typography>Refund Initiation<br/>12 Dec 2023</Typography>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel StepIconComponent={GreenCheckIcon}>
              <Typography>Demat transfer<br/>12 Dec 2023</Typography>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel StepIconComponent={GreenCheckIcon}>
              <Typography>Listing date<br/>12 Dec 2023</Typography>
            </StepLabel>
          </Step>
        </Stepper>
      </div>
      </div>
      </div>
      <div style={{display:'flex',justifyContent:"center",alignItems:'center'}}>
      <div style={{width:"80%",border:"1px solid black",borderRadius:'10px',margin:'10px'}}>
        <h1>About the company</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed risus
          a velit finibus faucibus nec et urna. Duis sem lacus, aliquet nec
          consequat non, rutrum id lectus. Nunc pretium ex dui, ac luctus arcu
          vestibulum lacinia. Mauris eu ex finibus, convallis ex nec, ornare
          leo. Nulla malesuada rutrum cursus. Sed viverra ligula elementum ipsum
          tincidunt, vitae cursus orci imperdiet. Phasellus dui purus, aliquam
          eget enim et, tincidunt facilisis nisl. Cras id dolor metus. Nullam
          eget mi et ligula posuere sollicitudin ut quis ante. Maecenas non
          libero eu mauris iaculis hendrerit vel viverra leo. Suspendisse a
          vehicula arcu. Quisque semper mi eu nibh feugiat, vel vehicula orci
          malesuada. Duis mattis lectus at risus dignissim, vel aliquam nisl
          lacinia. Nullam non lacus justo. Morbi id sapien vel nisi mattis
          sagittis eu nec neque. In nulla eros, hendrerit id enim at, vestibulum
          fermentum diam. Nunc at enim nisi. Aenean id arcu sed ante ultrices
          pellentesque sed a mi. Vivamus at risus vel lorem consequat
          consectetur sed a mi. Nullam vulputate commodo sem sed placerat. Morbi
          id metus et quam consectetur auctor. Mauris posuere pretium massa, sit
          amet euismod justo suscipit non. Vivamus at nisl lorem. Etiam eget
          purus ut mauris blandit egestas eu ut ligula. Etiam sed diam vitae
          urna pretium blandit nec sed augue. Praesent ac semper magna. Morbi
          vel est et urna faucibus dictum. Curabitur vel dignissim arcu. Morbi
          ut quam et est convallis porttitor. Proin sit amet faucibus neque.
          Pellentesque tristique ante accumsan, auctor est eget, tincidunt leo.
          Phasellus semper sapien id tempus tristique.
        </p>
      </div>
      </div>
    </div>
  );
};

export default Details;
