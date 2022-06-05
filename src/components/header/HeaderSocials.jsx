import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {FaSnapchat} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><AiOutlineGithub/></a>
        <a href="https://snapchat.com" target="_blank"><FaSnapchat/></a>

    </div>
  )
}

export default HeaderSocials