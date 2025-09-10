import React from 'react'
import './Notification.css'

function Notification() {
  return (
    <>
    <div className="wrapper">
        <h2>Assigned Tasks</h2>

        <div className="container">

            <input className='inputData' type="radio" name="slide" id="c1" />
            <label for="c1" className="cardComponenet">
                <div className="row">
                    <div className="icon">1</div>
                    <div className="description">
                        <h4>Corona</h4>
                        <p></p>
                    </div>
                </div>
            </label>
            <input className='inputData' type="radio" name="slide" id="c2" />
            <label for="c2" className="cardComponenet">
                <div className="row">
                    <div className="icon">2</div>
                    <div className="description">
                        <h4>Medical news</h4>
                        <p></p>
                    </div>
                </div>
            </label>
            <input className='inputData' type="radio" name="slide" id="c3" />
            <label for="c3" className="cardComponenet">
                <div className="row">
                    <div className="icon">3</div>
                    <div className="description">
                        <h4>Hospital Service</h4>
                        <p></p>
                    </div>
                </div>
            </label>
            <input className='inputData' type="radio" name="slide" id="c4" />
            <label for="c4" className="cardComponenet" >
                <div className="row">
                    <div className="icon">4</div>
                    <div className="description">
                        <h4>How to keep your self Safe?</h4>
                        <p></p>
                    </div>
                </div>
            </label>
        </div>
    </div>
    </>
  )
}

export default Notification