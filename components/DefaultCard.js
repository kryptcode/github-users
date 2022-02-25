import { LocationMarkerIcon } from '@heroicons/react/solid'
import React from 'react'

const DefaultCard = () => {
  return (
    <div className='bg-[#1e2a47] flex items-start p-5 rounded-xl'>
        <div>
            <img 
                src="https://avatars.githubusercontent.com/u/583231?v=4" 
                alt="octocat" 
                className='rounded-full w-32'
            />
        </div>

        <div className='flex-grow p-3'>
            <div className='flex justify-between flex-col md:flex-row items-start md:items-center text-white mb-6'>
                <h2 className='text-3xl font-semibold'>The Octocat</h2>
                <h5 className='text-gray-500'>Joined 25 Jan 2011</h5>
            </div>
            <div className='text-[#0077ff] mb-16'>
                @octocat
            </div>
            <div className='text-gray-500 mb-6'>
                "This profile has no bio"
            </div>

            <div className='bg-[#2b3442] text-white p-5 rounded-xl flex flex-col sm:flex-row justify-between items-start mb-8'>
                <div >
                    <p className='text-sm mb-1'>Repos</p>
                    <h2 className='text-2xl font-semibold'>8</h2>
                </div>
                <div >
                    <p className='text-sm mb-1'>Followers</p>
                    <h2 className='text-2xl font-semibold'>5004</h2>
                </div>
                <div >
                    <p className='text-sm mb-1'>Following</p>
                    <h2 className='text-2xl font-semibold'>9</h2>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <div className='flex items-center'>
                <img src='https://github-user-sa.netlify.app/static/media/icon-location.f11c5487.svg' className='h-4 mr-4' />
                    <h6 className='text-white italic text-lg'>San Francisco</h6>
                </div>
                <div className='flex items-center'>
                    <img src='https://github-user-sa.netlify.app/static/media/icon-twitter.f6a2a695.svg' className='h-4 mr-4' />
                    <h6 className='text-white italic'>Not Available</h6>
                </div>
                <div className='flex items-center'>
                <img src='https://github-user-sa.netlify.app/static/media/icon-website.b7923f6c.svg' className='h-4 mr-4' />
                    <a href='https://github.blog/' className='text-white italic text-md underline'>
                        https://github.blog/
                    </a>
                </div>
                <div className='flex items-center'>
                <img src='https://github-user-sa.netlify.app/static/media/icon-company.6f78ffb3.svg' className='h-4 mr-4' />
                    <a href='https://github.com/' className='text-white italic text-lg underline'>
                        @github
                    </a>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default DefaultCard