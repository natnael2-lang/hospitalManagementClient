import Anot from "../images/appo.png"
import Bone from "../images/bone.png"
import Cardio from "../images/cardio.jfif"
import Dep from "../images/dep.avif"
import BannerBackground from "../images/doctor-technicians-discussing-medical-record_1262-19767.avif"
import Neuro from "../images/neuro.jpg"
import './AppMash.css'

import Appointment from "./Appointment"

export default function AppMash() {
    return (
        
        <div className='Mash-main'>
            <Appointment/>
            <div className='home-banner-container'>
                <div className='home-text-section'>
                    <p style={{fontWeight:'900'}}>Start your journey with us</p>

                    <p>Boost your productivity and reduce booking hassle with our online 
                        appointment management system. Schedule appointments 24/7, receive 
                        automatic confirmations and reminders, and free up your valuable time. Our system 
                        is designed to increase efficiency, optimize your schedule, and ensure a seamless 
                        appointment experience for both you and your clients.</p>
                </div>
                <div className = "home-image-one">
                    <img src = {BannerBackground} alt = '' />
                </div>
            </div>
            <div className='home-banner-container' style={{marginBottom : '70px'}}>
                <div className = "home-image-one">
                    <img src = {Anot} alt = '' />
                </div>
                <div className='home-text-section-two'>
                    <p style={{fontWeight:'900'}}>Start your journey with us</p>

                    <p>Boost your productivity and reduce booking hassle with our online 
                        appointment management system. Schedule appointments 24/7, receive 
                        automatic confirmations and reminders, and free up your valuable time. Our system 
                        is designed to increase efficiency, optimize your schedule, and ensure a seamless 
                        appointment experience for both you and your clients.</p>
                </div>
            </div>
            <div className='home-banner-container' style={{marginBottom : '70px'}}>
                <div className='home-text-section'>
                    <p style={{fontWeight:'900'}}>Start your journey with us</p>

                    <p>Boost your productivity and reduce booking hassle with our online 
                        appointment management system. Schedule appointments 24/7, receive 
                        automatic confirmations and reminders, and free up your valuable time. Our system 
                        is designed to increase efficiency, optimize your schedule, and ensure a seamless 
                        appointment experience for both you and your clients.</p>
                </div>
                <div className = "home-image-one">
                    <img src = {Dep} alt = '' />
                </div>
            </div>
            <div className='departments'>
                <h1>Our Departments</h1>
                <div className='Dept-Container'>
                    <div className = 'spec-dept'>
                        <div className = "spec-dept-img">
                            <img src = {Cardio}></img>
                        </div>
                        <h5>
                            Cardiology Dep't
                        </h5>
                    </div>
                    <div className='spec-dept'>
                        <div className = "spec-dept-img">
                            <img src = {Bone}></img>
                        </div>
                        <h5>
                            Onthology Dep't
                        </h5>
                    </div>
                    <div className='spec-dept'>
                        <div className = "spec-dept-img">
                            <img src = {Neuro}></img>
                        </div>
                        <h5>
                            Neurology Dep't
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}