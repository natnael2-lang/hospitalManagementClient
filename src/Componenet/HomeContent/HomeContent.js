import React from 'react'
import Navbar from "../Navbar/nav"
import Admin from "../asset/admin.png"
import Doctor from "../asset/doctor.png"
import Lab from "../asset/lab.png"
import Manager from "../asset/manager.png"
import Other from "../asset/other.png"
import Payment from "../asset/payment.png"
import Pharm from "../asset/pharma.png"
import Radio from "../asset/radiology.png"
import "./HomeContent.css"


const Homee = () => {
  return (
    <div>
      <Navbar/>
      <div className="grid-containerA">
        <div className="home-pageA">
            <img src={Manager} alt=""/>
            <h1>Manager</h1>
        </div>
        <div className="home-pageA">
          <img src={Doctor} alt=""/>
          <h1>Doctor</h1>
        </div>
        <div className="home-pageA">
          <img src={Admin} alt=""/>
          <h1>Admin</h1>
        </div>
        <div className="home-pageA">
          <img src={Pharm} alt=""/>
          <h1>Pharmacist</h1>
        </div>
        <div className="home-pageA">
          <img src={Lab} alt=""/>
          <h1>Lab Technician</h1>
        </div>
        <div className="home-pageA">
          <img src={Radio} alt=""/>
          <h1>Radiologist</h1>
        </div>
        <div className="home-pageA">
          <img src={Other} alt="Admin"/>
          <h1>Other Staff Member</h1>
        </div>
        <div className="home-pageA">
          <img src={Payment} alt="Payment"/>
          <h1>Payment</h1>
        </div>
      </div>
    </div>
  )
}

export default Homee;
