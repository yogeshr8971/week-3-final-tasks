
import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* Page Title */}
      <div className="text-center py-16 border-t border-gray-200">
        <Title text1="CONTACT" text2="US" />
      </div>

      {/* Image */}
      <div className="flex justify-center mb-10 px-6">
        <img
          src={assets.contact_img}
          alt="Contact"
          className="w-full max-w-md rounded-xl shadow-md"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-3xl mx-auto px-6 text-center space-y-10 mb-24">

        {/* Store Address */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Our Store</h2>
          <p className="text-gray-500 leading-relaxed">
            Bengaluru jayanagar<br />
            86th main, 5th cross, India
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-gray-500">
            Phone: (415) 555-0132<br />
            Email: admin@example.com
          </p>
        </div>

        {/* Careers CTA */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Openings</h2>
          <p className="text-gray-500 mb-4">
            Learn more about our teams and job openings. We’re always looking for passionate people to join us.
          </p>
          <button className="border border-black px-6 py-3 text-sm font-medium rounded-full hover:bg-black hover:text-white transition-all duration-300">
            view openings
          </button>
        </div>
      </div>

      {/* Newsletter */}
      <NewsletterBox />
    </div>
  )
}

export default Contact
