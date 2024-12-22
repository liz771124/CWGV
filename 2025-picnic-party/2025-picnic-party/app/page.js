'use client'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import Swiper from '../components/Swiper'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

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
  const container = useRef()
  const circle = useRef()

  const { contextSafe } = useGSAP({ scope: container }) // we can pass in a config object as the 1st parameter to make scoping simple

  // ✅ wrapped in contextSafe() - animation will be cleaned up correctly
  // selector text is scoped properly to the container.
  const onClickGood = contextSafe(({ currentTarget }) => {
    gsap.to(currentTarget, { rotation: '+=360' })
  })

  useGSAP(
    () => {
      gsap.from('.box', { opacity: 0, stagger: 0.1 })

      gsap.to('.box', { rotation: '+=360', duration: 3 })

      // or refs...
      gsap.to(circle.current, { rotation: '-=360', duration: 3 })
    },
    { scope: container }
  ) // <-- scope for selector text (optional)

  return (
    <>
      <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
        <Swiper images={swiperImages} />
      </div>

      <div ref={container}>
        <button onClick={onClickGood} className='good bg-red-500 h-20 w-20'>
          111
        </button>
        <div className='box w-10 h-10 rounded-full bg-yellow-400'>selector</div>
        <div className='box w-10 h-10 rounded-full bg-yellow-400'>
          selector1
        </div>
        <div className='box w-10 h-10 rounded-full bg-yellow-400'>
          selector2
        </div>
        <div
          className='circle w-10 h-10 rounded-full bg-green-400'
          ref={circle}
        >
          Ref
        </div>
      </div>
      <div className='box w-10 h-10 rounded-full bg-blue-400'>selector</div>

      <main className='py-6'>
        <div className='container mx-auto rounded-lg bg-white pb-8 pt-5 shadow-[0px_3px_8px_0px_rgba(0,0,0,0.3)] md:px-8'>
          <div className='mb-3 flex flex-wrap gap-8 py-5 md:flex-nowrap'>
            <div className='mx-auto max-w-[350px]'>
              <div className='ms-auto'>
                <div className='swiper lessonMainSwiper h-[350px] w-[350px] rounded-lg shadow-[0px_3px_8px_0px_rgba(0,0,0,0.3)]'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <img
                        className='h-full w-full rounded object-contain'
                        src='https://imgs.cwgv.com.tw/top_project/44/244/preview/244.png'
                      />
                    </div>
                  </div>
                  <div className='swiper-button-next'></div>
                  <div className='swiper-button-prev'></div>
                </div>
                <div className='swiper lessonThumbSwiper mt-2 py-2'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide border-gary-600 cursor-pointer overflow-hidden rounded-lg shadow-sm'>
                      <img
                        className='h-[80px] w-[80px] rounded object-cover'
                        src='https://imgs.cwgv.com.tw/top_project/44/244/preview/244.png'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex w-full grow flex-col gap-3 text-lg'>
              <div className='mb-5 flex flex-col gap-3'>
                <h2 className='text-2xl font-semibold'>
                  和倉頡交朋友，房子變部首和倉頡交朋友，房子變部首和倉頡交朋友
                </h2>
                <div className='flex divide-x divide-gray-600 text-lg'>
                  <div className='shrink-0 pe-4'>適用年齡</div>
                  <div className='ps-4 font-semibold'>國小低年級</div>
                </div>
                <div className='flex divide-x divide-gray-600 text-lg'>
                  <div className='shrink-0 pe-4'>檔案格式</div>
                  <div className='ps-4 font-semibold'>PDF</div>
                </div>
                <div className='flex divide-x divide-gray-600 text-lg'>
                  <div className='shrink-0 pe-4'>適用科目</div>
                  <div className='ps-4 font-semibold'>
                    <div className='flex flex-wrap gap-2'>
                      <a
                        href='#'
                        className='hover:bg-primary-700 bg-primary-500 rounded-full px-3 py-1 text-sm text-white'
                      >
                        語文
                      </a>
                    </div>
                  </div>
                </div>
                <div className='flex divide-x divide-gray-600 text-lg'>
                  <div className='shrink-0 pe-4'>內容素材</div>
                  <div className='ps-4 font-semibold'>食農教育.zip</div>
                </div>
              </div>

              <button
                type='button'
                className='bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 w-ful mb-6 flex items-center justify-center gap-3 rounded-full px-2 py-2 font-bold text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0 md:max-w-[200px]'
              >
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 512 512'
                  enableBackground='new 0 0 512 512'
                  fill='currentColor'
                >
                  <g>
                    <path d='M446.844,208.875C447.625,203.313,448,197.656,448,192c0-70.563-57.406-128-128-128   c-40.938,0-78.531,19.344-102.344,51.063C209.25,113.031,200.688,112,192,112c-61.75,0-112,50.25-112,112   c0,1.563,0.031,3.094,0.094,4.625C33.813,242.375,0,285.313,0,336c0,61.75,50.25,112,112,112h272c70.594,0,128-57.406,128-128   C512,273.344,486.344,231.188,446.844,208.875z M384,416H112c-44.188,0-80-35.813-80-80s35.813-80,80-80   c2.438,0,4.75,0.5,7.125,0.719c-4.5-10-7.125-21.031-7.125-32.719c0-44.188,35.813-80,80-80c14.438,0,27.813,4.125,39.5,10.813   C246,120.25,280.156,96,320,96c53.031,0,96,42.969,96,96c0,12.625-2.594,24.625-7.031,35.688C449.813,238.75,480,275.688,480,320   C480,373.031,437.031,416,384,416z' />
                    <polygon points='288,192 224,192 224,288 160,288 256,384 352,288 288,288  ' />
                  </g>
                </svg>
                下載教學資源
              </button>

              <div className='flex items-start gap-3'>
                <button
                  type='button'
                  className='bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 flex h-[27px] shrink-0 items-center justify-center gap-3 rounded-full px-5 py-0 text-[12px] font-bold text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0'
                >
                  下載
                </button>
                <div>
                  教案：和倉頡交朋友，房子遍部首和倉頡交朋友，房子遍部首和倉頡交朋友，房子遍部首.pdf
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <button
                  type='button'
                  className='bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 flex h-[27px] shrink-0 items-center justify-center gap-3 rounded-full px-5 py-0 text-[12px] font-bold text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0'
                >
                  下載
                </button>
                <div>教案：和倉頡交朋友，房子遍部首.pdf</div>
              </div>
              <div className='flex items-start gap-3'>
                <button
                  type='button'
                  className='bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 flex h-[27px] shrink-0 items-center justify-center gap-3 rounded-full px-5 py-0 text-[12px] font-bold text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0'
                >
                  下載
                </button>
                <div>教案：和倉頡交朋友，房子遍部首.pdf</div>
              </div>
              <div className='flex items-start gap-3'>
                <button
                  type='button'
                  className='bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 flex h-[27px] shrink-0 items-center justify-center gap-3 rounded-full px-5 py-0 text-[12px] font-bold text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0'
                >
                  下載
                </button>
                <div>教案：和倉頡交朋友，房子遍部首.pdf</div>
              </div>
            </div>
          </div>

          <div className='mb-4 flex w-full items-center gap-3'>
            <div className='bg-gray2-700 h-[1px] grow'></div>
            <h2 className='font-display px-8 text-center text-2xl font-semibold'>
              內容介紹
            </h2>
            <div className='bg-gray2-700 h-[1px] grow'></div>
          </div>
          <div className='article-content py-3'>
            <p>
              <a href='#'>我是連結區域</a>
            </p>
            <p>
              本教案由林心茹老師（基隆市仁愛國民小學）、王立衍老師（基隆市仁愛國民小學）共同編寫。
            </p>
            <h2>一、教案像食譜，好看又要能照著做</h2>
            <p>
              教學演示即將到來！相信很多新手教師們想到要寫「教案」就很頭痛吧！其實教案就像是一篇食譜，不僅好看又要能讓人照著做，畢竟教案不是寫給自己看，是寫給其他人看的呀！我想無論是師培生、實習老師、還是老師們，寫好一份精彩、又好閱讀的教案不僅是我們的專業（挺胸）、也是我們的工作啊（留下辛酸淚），今天就讓小五跟大家分享五個教案撰寫小技巧吧！
            </p>
            <h1>標題</h1>
            <h2>標題</h2>
            <h3>標題</h3>
            <h4>標題</h4>
            <h5>標題</h5>
            <h6>標題</h6>
            <ul>
              <li>圓點列點一列點一列點一列點一列點一列點一</li>
              <li>圓點列點二列點二列點二列點二列點二列點二</li>
            </ul>
            <ol>
              <li>數字列點一列點一列點一列點一列點一列點一</li>
              <li>數字列點二列點二列點二列點二列點二列點二</li>
            </ol>
            <p>
              <img
                src='https://greenfuture-ea.greenpeace.org/media/c8a4dae1-2b8b-4a05-aee3-754963cbcf78.jpeg'
                alt='教案像食譜'
              />
            </p>

            <div>
              <iframe
                src='https://www.youtube.com/embed/HfbW8DL1Ld4?si=qtjNJwouQu-pgyAa&amp;controls=0'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            </div>
            <p>
              教案撰寫最重要的就是讓人「好讀」！千萬不要標點符號格式亂七八糟、密密麻麻，一定會讓人看不下去的啊！
              <br />
              <br />
            </p>
            <h2>二、不一定要照常見結構順序寫</h2>
            <p>
              還記得我在念師培的時候，老師常常強調教案設計要有結構，常見的教案結構是：引起動機、發展活動、綜合活動、總結活動，因此我以前就傻傻的每一堂課都花個10分鐘在引起動機，結果開始講正課的時候，學生竟然開始打瞌睡！
            </p>
            <p>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUdm0B184RlHzr_4jjVADu7-AzMxeHqellUg&s'
                alt='教案不一定要照固定結構順序寫'
              />
            </p>
          </div>

          <div className='relative mb-10 gap-5 overflow-hidden rounded-xl bg-white shadow-[0px_3px_8px_0px_rgba(0,0,0,0.3)]'>
            <div className='flex gap-5 flex-wrap p-6 md:flex-nowrap'>
              <div className='mx-auto flex h-[150px] w-[150px] shrink-0 overflow-hidden rounded bg-gray-50 md:h-[250px] md:w-[250px]'>
                <img
                  className='h-full w-full object-contain'
                  src='https://imgs.cwgv.com.tw/top_project/44/244/preview/244.png'
                />
              </div>
              <div className='mt-3 flex w-full grow flex-col md:mt-0'>
                <h3 className='font-display mb-2 text-2xl font-semibold'>
                  葉惠貞 老師
                </h3>
                <div className='text-gray2-700 mb-4'>
                  國立清華大學附設實驗小學教師
                </div>
                <div>
                  <p>
                    爽朗風趣、思考敏捷，既是活力滿點的課堂女王，也是張力十足的研習工作坊講師，更是魅力無限的親職講座分享人，投身教育工作三十餘載，專業熱情始終如一。
                  </p>
                  <p>
                    服膺「益者三有」教學模式──「有趣」、「有效」、「有機」，期望藉由簡單但深化的師生對話啟發學生的提問力和思考力，自主學習Get
                    Ready！
                  </p>
                </div>
              </div>
            </div>
            <div className='bg-primary-500 h-5 w-full'></div>
          </div>

          <div className='mb-4 flex w-full items-center gap-3'>
            <div className='bg-gray2-700 h-[1px] grow'></div>
            <h2 className='font-display px-8 text-center text-2xl font-semibold'>
              相關教學資源
            </h2>
            <div className='bg-gray2-700 h-[1px] grow'></div>
          </div>

          <div className='mt-8 grid grid-cols-2 gap-8 rounded md:grid-cols-4'>
            <div>
              <a className='mb-2 block' rel='noopener noreferrer' href='#'>
                <div className='flex max-w-full shrink-0 overflow-hidden rounded bg-gray-50'>
                  <img
                    className='aspect-[1/1] h-full w-full object-contain'
                    src='https://imgs.cwgv.com.tw/top_project/44/244/preview/244.png'
                  />
                </div>
              </a>
              <div className='text-center'>
                <h3 className='mb-2 line-clamp-2 text-lg font-semibold'>
                  太陽的親戚太陽的親戚太陽的親戚太陽的親戚太陽的親戚
                </h3>
                <div className='text-gray2-700 pe-1'>葉惠貞 老師</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className='tracking-wide'>
        <div className='container mx-auto flex flex-wrap items-center justify-between gap-5 px-3 py-5 text-sm'>
          <div className='flex grow flex-wrap items-center gap-2'>
            <h3>
              <Image
                className='max-f-full'
                width='80'
                height='40'
                src='/img/footer-logo.png'
                alt='logo'
              />
            </h3>
            <div>
              <ul className='mb-2 flex divide-x'>
                <li className='px-2'>
                  <Link
                    href='https://futureparenting.cwgv.com.tw/'
                    title='未來親子學習平台'
                    target='_blank'
                  >
                    未來親子學習平台
                  </Link>
                </li>
                <li className='px-2'>
                  <Link
                    href='https://futureparenting.cwgv.com.tw/kids'
                    title='小天下 / 未來出版'
                    target='_blank'
                  >
                    小天下 / 未來出版
                  </Link>
                </li>
                <li className='px-2'>
                  <Link
                    href='https://futureparenting.cwgv.com.tw/junior'
                    title='未來兒童'
                    target='_blank'
                  >
                    未來兒童
                  </Link>
                </li>
                <li className='px-2'>
                  <Link
                    href='https://futureparenting.cwgv.com.tw/youth'
                    title='未來少年'
                    target='_blank'
                  >
                    未來少年
                  </Link>
                </li>
                <li className='px-2'>
                  <Link
                    href='https://futureparenting.cwgv.com.tw/family'
                    title='未來Family'
                    target='_blank'
                  >
                    未來Family
                  </Link>
                </li>
              </ul>
              <div className='px-2'>
                Copyright © 未來親子學習平台﹒All rights reserved.
              </div>
            </div>
          </div>
        </div>
        <div className='fixed bottom-5 end-3' id='goTop'>
          <Image width='40' height='40' src='/img/go-top.svg' alt='' />
        </div>
      </footer>
    </>
  )
}
