import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="text-primary-500">1234</div>
        {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.js
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
      </div>
      <footer className="tracking-wide">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-5 px-3 py-5 text-sm">
          <div className="flex grow flex-wrap items-center gap-2">
            <h3>
              <Image
                className="max-f-full"
                width="80"
                height="40"
                src="img/footer-logo.png"
                alt="logo"
              />
            </h3>
            <div>
              <ul className="mb-2 flex divide-x">
                <li className="px-2">
                  <Link
                    href="https://futureparenting.cwgv.com.tw/"
                    title="未來親子學習平台"
                    target="_blank"
                  >
                    未來親子學習平台
                  </Link>
                </li>
                <li className="px-2">
                  <Link
                    href="https://futureparenting.cwgv.com.tw/kids"
                    title="小天下 / 未來出版"
                    target="_blank"
                  >
                    小天下 / 未來出版
                  </Link>
                </li>
                <li className="px-2">
                  <Link
                    href="https://futureparenting.cwgv.com.tw/junior"
                    title="未來兒童"
                    target="_blank"
                  >
                    未來兒童
                  </Link>
                </li>
                <li className="px-2">
                  <Link
                    href="https://futureparenting.cwgv.com.tw/youth"
                    title="未來少年"
                    target="_blank"
                  >
                    未來少年
                  </Link>
                </li>
                <li className="px-2">
                  <Link
                    href="https://futureparenting.cwgv.com.tw/family"
                    title="未來Family"
                    target="_blank"
                  >
                    未來Family
                  </Link>
                </li>
              </ul>
              <div className="px-2">
                Copyright © 未來親子學習平台﹒All rights reserved.
              </div>
            </div>
          </div>
          <div>
            <ul className="mb-2 flex flex-wrap divide-x text-end">
              <li className="px-2">
                <Link
                  href="https://futuredata.cwgv.com.tw/copyright/index/A"
                  title="著作權聲明"
                  target="_blank"
                >
                  著作權聲明
                </Link>
              </li>
              <li className="px-2">
                <Link
                  href="https://futuredata.cwgv.com.tw/copyright/index/B"
                  title="隱私權政策"
                  target="_blank"
                >
                  隱私權政策
                </Link>
              </li>
            </ul>
            <ul className="flex divide-x text-end">
              <li className="px-2">
                <Link
                  href="https://futuredata.cwgv.com.tw/copyright/index/C"
                  title="個資保護聲明"
                  target="_blank"
                >
                  個資保護聲明
                </Link>
              </li>
              <li className="px-2">
                <Link
                  href="https://futuredata.cwgv.com.tw/qa"
                  title="QA"
                  target="_blank"
                >
                  常見問題
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="fixed bottom-5 end-3" id="goTop">
          <Image width="40" height="40" src="/img/go-top.svg" alt="" />
        </div>
      </footer>
    </>
  )
}
