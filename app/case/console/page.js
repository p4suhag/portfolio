import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Console Case Study',
  description: "Praveen Suhag's Portfolio",
};

export default function Console() {
  return (
    <div className="case_study">
      <div className="container">
        <Navbar />
      </div>

      <div className="case_study_section">
        <div className="container">
          <h2>Console</h2>
          <p>This project is under NDA, please reach out to <a href="mailto:p4suhag@gmail.com"><span>p4suhag@gmail.com</span></a> to know more about it.</p>
        </div>
      </div>

      

      <div className="container">
        <Footer />
      </div>
      
    </div>
  )
}