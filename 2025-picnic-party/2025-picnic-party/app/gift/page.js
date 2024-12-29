'use client'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import Swiper from '@/components/Swiper'
import { Alert, Dropdown } from 'flowbite-react'

import UserProfile from '@/components/UserProfile'

const swiperImages = [
  {
    src: 'https://imgs.cwgv.com.tw/slides/67/4567/carousel/4567.png',
    width: 600,
    height: 400,
    alt: 'banner'
  },
  {
    src: 'https://imgs.cwgv.com.tw/slides/49/4349/carousel/4349.png',
    width: 600,
    height: 400,
    alt: 'banner'
  },
  {
    src: 'https://imgs.cwgv.com.tw/slides/49/4349/carousel/4349.png',
    width: 300,
    height: 300,
    alt: 'banner'
  },
  {
    src: 'https://imgs.cwgv.com.tw/slides/49/4349/carousel/4349.png',
    width: 300,
    height: 300,
    alt: 'banner'
  },
  {
    src: 'https://imgs.cwgv.com.tw/slides/49/4349/carousel/4349.png',
    width: 300,
    height: 300,
    alt: 'banner'
  }
]

export default function Home() {
  return (
    <>
      <Alert color="info">Alert!</Alert>
      <Dropdown label="Dropdown button">
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
      <div className="text-lg text-black">Gift</div>
    </>
  )
}
