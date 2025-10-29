import Image from "next/image";


export default function Home() {
  return (
    <div className="font-mono text-lg grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gray-100 dark:bg-gray-900 h-4/5">
      <main className="flex flex-col gap-[32px] row-start-2 items-center ">
        <div className="bg-white rounded-xl border-2 border-gray-200 w-5/6 p-5 dark:bg-slate-800 dark:border-gray-700">
            <ul className="text-center">
                <h1 className="font-semibold">Table of Contents</h1>
                <li className="after:content-['_↗']">
                    Exploratory Data Analysis on a PnL report
                </li>
            </ul>
        </div>
        <div className="bg-white rounded-xl border-2 border-gray-200 w-5/6 p-5 dark:bg-slate-800 dark:border-gray-700">
            
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://www.linkedin.com/in/celso-fuentes-07aa5b204"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  className="dark:invert"
                  src="/Portfolio_Website/social_media_svg/Untitled.svg"
                  alt="linkedin icon"
                  width={45}
                  height={45}
                />
              </a>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://www.github.com/c-fuentes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  className="dark:invert"
                  src="/Portfolio_Website/social_media_svg/github.svg"
                  alt="github icon"
                  width={32}
                  height={32}
                />
              </a>
      </footer>
    </div>
  );
}