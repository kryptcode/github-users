import React from 'react'

const UserCard = ({ user }) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const date = new Date(user.created_at)
    const dateJoined = date.getDate()
    const year = date.getFullYear()
    const month = months[date.getMonth()]

    console.log(month);
  return (
    <div className='bg-[#1e2a47] flex items-start p-5 rounded-xl'>
        <div>
            <img 
                src={user.avatar_url} 
                alt={user.login} 
                className='rounded-full w-32'
            />
        </div>

        <div className='flex-grow p-3'>
            <div className='flex justify-between flex-col md:flex-row items-start md:items-center text-white mb-6'>
                <h2 className='text-3xl font-semibold capitalize'>
                    {user.login}
                </h2>
                <h5 className='text-gray-500'>
                    Joined {dateJoined} {month} {year}
                </h5>
            </div>
            <div className='text-[#0077ff] mb-16'>
                @{user.login}
            </div>
            <div className='text-gray-500 mb-6'>
                {
                    user.bio ? (
                        <p>"{user.bio}"</p>
                    ) : (
                        <p>"This profile has no bio"</p>
                    )
                }
            </div>

            <div className='bg-[#2b3442] text-white p-5 rounded-xl flex flex-col sm:flex-row justify-between items-start mb-8'>
                <div >
                    <p className='text-sm mb-1'>Repos</p>
                    <h2 className='text-2xl font-semibold'>
                        {user.public_repos}
                    </h2>
                </div>
                <div >
                    <p className='text-sm mb-1'>Followers</p>
                    <h2 className='text-2xl font-semibold'>
                        {user.followers}
                    </h2>
                </div>
                <div >
                    <p className='text-sm mb-1'>Following</p>
                    <h2 className='text-2xl font-semibold'>
                        {user.following}
                    </h2>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <div className='flex items-center'>
                <img src='https://github-user-sa.netlify.app/static/media/icon-location.f11c5487.svg' className='h-4 mr-4' />
                    <h6 className='text-white italic text-lg'>
                        {
                            user.location ? (
                                <p>{user.location}</p>
                            ) : (
                                <p>not available</p>
                            )
                        }
                    </h6>
                </div>
                <div className='flex items-center'>
                    <img src='https://github-user-sa.netlify.app/static/media/icon-twitter.f6a2a695.svg' className='h-4 mr-4' />
                    <h6 className='text-white italic'>
                        {
                            user.twitter_username ? (
                                <p>{user.twitter_username}</p>
                            ) : (
                                <p>Not Available</p>
                            )
                        }
                    </h6>
                </div>
                <div className='flex items-center'>
                <img src='https://github-user-sa.netlify.app/static/media/icon-website.b7923f6c.svg' className='h-4 mr-4' />
                    <a href={user.blog ? 'https://github.blog/' : user.blog} className='text-white italic text-md underline'>
                        {
                            user.blog ? (
                                <p>
                                    {user.blog}
                                </p>
                            ) : (
                                <p>https://github.blog/</p>
                            )
                        }
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

export default UserCard