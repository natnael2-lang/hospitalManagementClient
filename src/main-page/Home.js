import React from 'react';
import p1 from './../images/p1.jpg';
import p2 from './../images/p2.jpg';
import p9 from "./../images/p9.jpg";
import Card from '../newComponents/card'; // Import the Card component

const Home = () => {
  return (
    <> 
      <section className="py-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card 
            title="Expert Care" 
            content="Our team of highly skilled healthcare professionals is committed to delivering personalized care tailored to your needs."
          />
          <Card 
            title="Advanced Facilities" 
            content="Equipped with modern facilities and cutting-edge technology, we offer comprehensive medical services ranging from routine check-ups to specialized treatments."
          />
          <Card 
            title="Patient-Centered Approach" 
            content="We believe in treating each patient with respect, dignity, and empathy. Your comfort and satisfaction are paramount to us."
          />
          <Card 
            title="Community Focused" 
            content="Proudly serving our community, we strive to make a positive impact on the health and well-being of our patients and their families."
          />
        </div>
      </section>

      <div className='py-10 px-4 max-w-3xl mx-auto text-center'>
        <h1 className='text-4xl font-bold mb-4'>
          We care about
          <span className='text-blue-600'> {" "} your health</span>
        </h1>
        <p className='text-lg mb-4'>
          At Woldia General Hospital, your health and well-being are our top priorities. We are dedicated to providing exceptional medical care with compassion, expertise, and state-of-the-art technology.
        </p>
        <p className='mb-4'>በወልድያ አጠቃላይ ሆስፒታል፣ ጤናዎ እና ደህንነትዎ ቅድሚያ የምንሰጣቸው ጉዳዮች ናቸው. በርህራሄ፣ በእውቀት እና በዘመናዊ ቴክኖሎጂ ልዩ የህክምና አገልግሎት ለመስጠት ቆርጠናል።</p>
        <div className='flex justify-center space-x-4'>
          <img className="w-1/2 rounded-lg shadow-lg" src={p1} alt="p1" /> 
          <img className="w-1/2 rounded-lg shadow-lg" src={p2} alt="p2" /> 
        </div>
      </div>

      <div className='py-10 bg-gray-100'>
        <div className='max-w-3xl mx-auto text-center'>
          <span className='text-lg font-semibold'>Feedback</span>
          <h2 className='text-3xl font-bold mb-4'>
            Your feedback
            <span className='text-blue-600'> {" "}matters for us</span>
          </h2>
          <p className='mb-4'>
            Your feedback is invaluable to us in improving our hospital services. Please share your thoughts to help us enhance your experience. Your input matters greatly.
          </p>
          <p className='mb-4'>የሆስፒታል አገልግሎታችንን ለማሻሻል የእርስዎ አስተያየት ለእኛ ጠቃሚ ነው. እባክዎን ልምድዎን ለማሳደግ እንዲረዱን ሀሳብዎን ያካፍሉ. የእርስዎ ግብአት በጣም አስፈላጊ ነው።</p>
          <div className='feedback-image-container'>
            <Card 
              title="Feedback" 
              content="Your feedback is invaluable to us in improving our hospital services."
              imageSrc={p9}
            />
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-3xl mx-auto text-center">
          <h4 className="text-lg mb-2">Contact Us</h4>
          <div className="flex justify-between space-x-4 mb-4">
            <span className="social-icon">Facebook</span>
            <span className="social-icon">Twitter</span>
            <span className="social-icon">Instagram</span>
          </div>
          <p className="footer-tel">Tel: <a className="text-blue-400" href="tel:+123456789">+123456789</a></p>
          <p className="footer-email">Email: <a className="text-blue-400" href="mailto:info@newlifegeneralhospital.com">info@newlifegeneralhospital.com</a></p>
          <p className="footer-copywrite mt-4">© 2025 Woldia General Hospital. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Home;