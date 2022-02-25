import Head from 'next/head'
import { SearchIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import UserCard from '../components/UserCard'
import DefaultCard from '../components/DefaultCard'


export default function Home() {
  const [searchInput, setSearchInput] = useState('')
  const [userInfo, setUserInfo] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await fetch(`https://api.github.com/users/${searchInput}`).then(res => res.json());

    setUserInfo(user)
    setSearchInput('')
  }

  

  return (
    <div className="pt-16 px-3">
      <Head>
        <title>Github Users App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='max-w-screen md:max-w-2xl mx-auto'>
        {/* Header */}
        <div className='mb-5'>
          <h1 className='text-white text-3xl font-semibold'>devfinder</h1>
        </div>

        {/* Search Form */}
        <form 
          className='bg-[#1e2a47] flex items-center p-5 rounded-xl mb-6'
          onSubmit={handleSubmit}
        >
          <SearchIcon className='h-7 text-[#0077ff]' />
          <input 
            type="text"
            className='bg-transparent flex-grow outline-none text-white text-sm md:text-lg ml-3 sv' 
            placeholder='Search Github username...'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type='submit' className='bg-[#0077ff] text-white py-2 px-4 rounded-lg'>
            Search
          </button>
        </form>

        {
          userInfo ? (
            <UserCard user={userInfo} />
          ) : (
            <DefaultCard />
          )
        }
      </div>

    </div>
  )
};