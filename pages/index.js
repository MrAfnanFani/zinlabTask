import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';

export default function Home() {
  const navItems = [
    'Stock Videos',
    'Video Templates',
    'Music',
    'Sound Effects',
    'Graphic Templates',
    'Graphics',
    'Presentation Templates',
    'Photos',
    'Fonts',
    'Add-Ons',
    'More',
  ];

  const bookmarks = [
    {
      title: 'Bookmark 1',
      description: 'Description textDescription textDescription text Description',
      image: '/sample.png',
    },
    {
      title: 'Bookmark 2',
      description: 'Description textDescription textDescription text Description',
      image: '/sample.png',
    },
    {
      title: 'Bookmark 3',
      description: 'Description textDescription textDescription text Description',
      image: '/sample.png',
    },
    {
      title: 'Bookmark 4',
      description: 'Description textDescription textDescription text Description',
      image: '/sample.png',
    },
  ];

  const convertToPdf = [
    {
      title: 'convertToPdf',
      description: 'Description textDescription textDescription text Description',
      image: '/sample.png',
    },
    {
      title: 'convertToPdf',
      description: 'Description textDescription textDescription text Description',
      image: '/sample.png',
    },
    {
      title: 'convertToPdf',
      description: 'Description textDescription textDescription text Description',
      image: '/sample.png',
    },
    {
      title: 'convertToPdf',
      description: 'Description textDescription textDescription text Description',
      image: '/sample.png',
    },
  ];


  const bookmarkconvert = [
    {
      title: 'PDF to Word',
      description: 'Description textDescription textDescription text Description',
      image: '/sample.png',
    },
    {
      title: 'PDF to Excel',
      description: 'Description textDescription textDescription text Description',
      image: '/sample.png',
    },
    {
      title: 'PDF to PPT',
      description: 'Description textDescription textDescription text Description',
      image: '/sample.png',
    },
    {
      title: 'PDF to JPG',
      description: 'Description textDescription textDescription text Description',
      image: '/sample.png',
    },
    {
      title: 'PDF to PNG',
      description: 'Description textDescription textDescription text Description',
      image: '/sample.png',
    },
    {
      title: 'PNG to TXT',
      description: 'Description textDescription textDescription text Description',
      image: '/sample.png',
    },
    {
      title: 'PDF to SVG',
      description: 'Description textDescription textDescription text Description',
      image: '/sample.png',
    },
    {
      title: 'PDF to PDF',
      description: 'Description textDescription textDescription text Description',
      image: '/sample.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + cardsPerPage, bookmarkconvert.length - cardsPerPage));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - cardsPerPage, 0));
  };

  const visibleCards = bookmarkconvert.slice(currentIndex, currentIndex + cardsPerPage);


    const socialMediaLinks = [
      { platform: 'Facebook', icon: '/facebook.png', link: '#' },
      { platform: 'Twitter', icon: '/twitter.png', link: '#' },
      { platform: 'YouTube', icon: '/youtube.png', link: '#' },
    ];
  
    const columnsData = [
      {
        title: 'Internal Links',
        links: [
          { text: 'Link 1', url: '#' },
          { text: 'Link 2', url: '#' },
          { text: 'Link 3', url: '#' },
          { text: 'Link 4', url: '#' },
          { text: 'Link 5', url: '#' },
        ],
      },   {
        title: 'Enterprise',
        links: [
          { text: 'Link 1', url: '#' },
          { text: 'Link 2', url: '#' },
          { text: 'Link 3', url: '#' },
          { text: 'Link 4', url: '#' },
          { text: 'Link 5', url: '#' },
        ],
      },   {
        title: 'Internal Links',
        links: [
          { text: 'Link 1', url: '#' },
          { text: 'Link 2', url: '#' },
          { text: 'Link 3', url: '#' },
          { text: 'Link 4', url: '#' },
          { text: 'Link 5', url: '#' },
        ],
      },   {
        title: 'Enterprise',
        links: [
          { text: 'Link 1', url: '#' },
          { text: 'Link 2', url: '#' },
          { text: 'Link 3', url: '#' },
          { text: 'Link 4', url: '#' },
          { text: 'Link 5', url: '#' },
        ],
      },   {
        title: 'Internal Links',
        links: [
          { text: 'Link 1', url: '#' },
          { text: 'Link 2', url: '#' },
          { text: 'Link 3', url: '#' },
          { text: 'Link 4', url: '#' },
          { text: 'Link 5', url: '#' },
        ],
      },
    
    ];
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white px-8 shadow-lg rounded-sm py-4 flex justify-between items-center">
      <div className='flex justify-center items-center '>
        <img src="/header.png" alt="Logo" className="h-12 w-12" />
        <span className='font-semibold text-xl'>ZinLabs</span>
      </div>

      <div className='flex items-center justify-center '>
        <input
          type="text"
          placeholder="Search for Movies, TV Shows, Themes & Cast"
          className="bg-gray-100  px-4 py-2 rounded-l-full w-[400px]"
        />
        <div className='rounded-r-full bg-gray-100 px-2 py-3'>
        <img src="/search.png" alt="Logo" className="h-4 w-4" />
        </div>
      </div>

      <div>
        <button className="mr-2 text-sm font-semibold">Login</button>
        <button className="bg-blue-700  text-white  px-4 pt-2 text-sm font-semibold pb-2.5 rounded-full leading-none">Signup</button>
      </div>
    </header>

    <nav className="bg-white text-sm font-semibold py-4 px-8 shadow-lg">
      <ul className=" gap-x-3 flex">
        {navItems.map((item, index) => (
          <li key={index} className="mr-4">
            <a href={`#${item}`} className="hover:text-gray-300">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    <section className="py-8 px-20">
      <h2 className="text-2xl font-bold mb-6 pt-8">Your Bookmarks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {bookmarks.map((bookmark, index) => (
          <div key={index} className="bg-white p-5 rounded-md hover:shadow-lg border">
            <img
              src={bookmark.image}
              alt={bookmark.title}
              className="mb-4 w-16 h-16 object-cover rounded-md"
            />
            <h3 className="text-xl font-bold mb-1">{bookmark.title}</h3>
            <p className="text-gray-400 text-sm">{bookmark.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="py-8 px-20">
      <h2 className="text-2xl font-bold mb-6">Convert from PDF</h2>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {visibleCards.map((bookmark, index) => (
            <div key={index} className="group bg-white p-5 rounded-md hover:shadow-lg border relative">
              <img
                src={bookmark.image}
                alt={bookmark.title}
                className="mb-4 w-16 h-16 object-cover rounded-md"
              />
              <h3 className="text-xl font-bold mb-1">{bookmark.title}</h3>
              <p className="text-gray-400 text-sm">{bookmark.description}</p>
              <div className="hidden group-hover:block absolute top-0 right-0 p-2">
                <img
                  src="/bookmark-variant.png" 
                  alt="Bookmark"
                  className="w-6 h-6"
                />
              </div>
            </div>
          ))}
        </div>
        {currentIndex > 0 && (
          <button onClick={handlePrev} className="absolute -left-10 top-1/2 transform -translate-y-1/2">
             <img
              src={'/left.png'}
              alt={' '}
              className="mb-3 w-7 bg-white shadow-xl h-7 rounded-full"
            />
          </button>
        )}
        {currentIndex + cardsPerPage < bookmarkconvert.length && (
          <button onClick={handleNext} className="absolute -right-10 top-1/2 transform -translate-y-1/2">
         <img
              src={'/right.png'}
              alt={' '}
              className="mb-3 w-7 h-7  bg-white shadow-2xl rounded-full"
            />          </button>
        )}
      </div>
    </section>


    <section className="py-8 px-20">
      <h2 className="text-2xl font-bold mb-6">Convert To PDF</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {convertToPdf.map((bookmark, index) => (
          <div key={index} className="bg-white p-5 rounded-md hover:shadow-lg border">
            <img
              src={bookmark.image}
              alt={bookmark.title}
              className="mb-4 w-16 h-16 object-cover rounded-md"
            />
            <h3 className="text-xl font-bold mb-1">{bookmark.title}</h3>
            <p className="text-gray-400 text-sm">{bookmark.description}</p>
          </div>
        ))}
      </div>
    </section>


    <footer className="bg-gray-100 mt-8 py-8 px-20">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between mb-8">
          <div className=" flex gap-x-5 pb-6 border-b">
            <h3 className=" font-bold text-sm mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              {socialMediaLinks.map((social, index) => (
                <a key={index} href={social.link} className="text-white hover:text-gray-400">
                  <img src={social.icon} alt={social.platform} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid pt-6 grid-cols-1 md:grid-cols-5 gap-4">
            {columnsData.map((column, columnIndex) => (
              <div key={columnIndex}>
                <h4 className="text-sm font-bold mb-2">{column.title}</h4>
                <ul>
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a className='text-sm text-gray-600' href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-start border-t">
        <div className='flex justify-center items-center '>
        <img src="/header.png" alt="Logo" className="h-12 w-12" />
        <span className='font-semibold text-xl'>ZinLabs</span>
      </div>
          <div className='flex gap-x-5 m-8'>
            <p className="text-gray-500 text-sm">Privacy Policy</p>
            <p className="text-gray-500 text-sm">Terms & COnditions</p>
            <p className="text-gray-500 text-sm">Cookies Policy</p>
            <p className="text-gray-500 text-sm">About Us</p>
            <p className="text-gray-500 text-sm">Contact</p>
          </div>
        </div>
      </div>
    </footer>
    

    </div>
  )
 }
