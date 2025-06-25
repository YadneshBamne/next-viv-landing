"use client";
// pages/career.jsx
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Career() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const jobs = [
    {
      title: 'Account Director, Digital Native',
      department: 'Go To Market',
      location: 'Singapore',
    },
    {
      title: 'Account Director, Digital Native',
      department: 'Sales',
      location: 'San Francisco',
    },
    {
      title: 'Account Director, Digital Natives',
      department: 'Go To Market',
      location: 'Seoul, South Korea',
    },
    {
      title: 'Account Director, EDU',
      department: 'Go To Market',
      location: 'Singapore',
    },
    {
      title: 'Account Director, Federal Civilian',
      department: 'Go To Market',
      location: 'Washington, DC',
    },
    {
      title: 'Software Engineer, AI Development',
      department: 'Engineering',
      location: 'San Francisco',
    },
    {
      title: 'Data Scientist, Machine Learning',
      department: 'Engineering',
      location: 'New York',
    },
    {
      title: 'Product Manager, AI Solutions',
      department: 'Go To Market',
      location: 'London, UK',
    },
    {
      title: 'Sales Representative, Enterprise',
      department: 'Sales',
      location: 'Chicago',
    },
    {
      title: 'AI Research Scientist',
      department: 'Engineering',
      location: 'Toronto, Canada',
    },
    {
      title: 'Marketing Specialist, Digital Campaigns',
      department: 'Go To Market',
      location: 'Singapore',
    },
    {
      title: 'Technical Support Engineer',
      department: 'Engineering',
      location: 'Austin',
    },
    {
      title: 'Account Manager, SMB',
      department: 'Sales',
      location: 'San Francisco',
    },
    {
      title: 'Senior Software Engineer, Backend',
      department: 'Engineering',
      location: 'Seattle',
    },
    {
      title: 'Business Development Manager',
      department: 'Go To Market',
      location: 'Tokyo, Japan',
    },
    {
      title: 'UX Designer, AI Interfaces',
      department: 'Engineering',
      location: 'Remote',
    },
    {
      title: 'Sales Director, APAC Region',
      department: 'Sales',
      location: 'Singapore',
    },
    {
      title: 'Machine Learning Engineer',
      department: 'Engineering',
      location: 'Bangalore, India',
    },
    {
      title: 'Customer Success Manager',
      department: 'Go To Market',
      location: 'New York',
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
    },
  ];

  const teams = ['All teams', 'Sales', 'Go To Market', 'Engineering'];
  const locations = [
    'All locations',
    'Singapore',
    'San Francisco',
    'Seoul, South Korea',
    'Washington, DC',
  ];

  const [selectedTeam, setSelectedTeam] = useState(teams[0]);
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredJobs = jobs.filter((job) => {
    const matchesTeam =
      selectedTeam.toLowerCase() === 'all teams' || job.department === selectedTeam;
    const matchesLocation =
      selectedLocation.toLowerCase() === 'all locations' || job.location === selectedLocation;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTeam && matchesLocation && matchesSearch;
  });

  return (
    <div className="relative w-full min-h-screen bg-[#07080A] text-white">
      <section className="w-full min-h-[calc(100vh-80px)] flex flex-col items-center px-4 py-12 bg-[#07080A]">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl text-center font-medium tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white/90 to-white/40 pb-10">
          Careers at VIV
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl max-w-3xl text-center mb-12">
          We are a team of innovators building AI to accelerate human understanding of the universe. Join us to shape the future of AI with ambitious goals and a passion for excellence.
        </p>

        <div className="w-full max-w-5xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-7 lg:gap-20 mb-8 items-center justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full p-3 rounded-lg text-white border border-[#4A4A48] focus:ring-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <span className="text-gray-400 text-sm">{filteredJobs.length} jobs</span>
            <div className="flex gap-4">
              <select
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
                className="p-3 text-white bg-[#07080A] border-b border-[#4A4A48] focus-none"
              >
                {teams.map((team) => (
                  <option key={team} value={team}>
                    {team}
                  </option>
                ))}
              </select>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="p-3 text-white bg-[#07080A] border-b border-[#4A4A48]"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="w-full max-w-6xl mx-auto">
            <div className="overflow-x-auto divide-y divide-neutral-700">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <div
                    key={index}
                    className="py-6 px-4 md:px-6 flex flex-col md:flex-row md:items-center justify-between transition duration-200"
                  >
                    <div>
                      <h3 className="text-white font-semibold text-base md:text-lg">{job.title}</h3>
                      <p className="text-gray-300">{job.department}</p>
                      <p className="text-gray-500">{job.location}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <button className="text-white hover:text-amber-100 cursor-pointer flex items-center gap-1">
                        Apply now
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-center py-6">No jobs match your filters.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}