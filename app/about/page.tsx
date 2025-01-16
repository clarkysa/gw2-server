import React from 'react'
import Link from 'next/link'

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About GW2</h1>
        <p className="text-lg mb-6">
          Gatitos World 2 (GW2) is a vibrant and welcoming Discord community that brings together
          people from all walks of life who share a passion for gaming, friendship, and fun.
        </p>
        <p className="text-lg mb-6">
          Founded with the vision of creating a safe and inclusive space for everyone, GW2 has grown
          into a thriving ecosystem of gamers, content creators, and social butterflies.
        </p>
        <p className="text-lg mb-6">
          Our community is built on the principles of respect, support, and camaraderie. Whether
          you're here to find gaming partners, engage in lively discussions, or simply to make new
          friends, GW2 has something for everyone.
        </p>
        <Link href="/" className="text-blue-400 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default AboutPage
