import React from 'react'

function Videos() {
  return (
    <div>Videos
        <h1 className='text-warning'>Hey this is video component</h1>

        <video className='w-75' controls>
            <source src='https://player.vimeo.com/progressive_redirect/playback/889258575/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=0d2d3cc085c6ebf2853f251cbd031013f8cf7d1a46268595b807ac03f94cbd0a' type='' />
        </video>
    </div>
  )
}

export default Videos