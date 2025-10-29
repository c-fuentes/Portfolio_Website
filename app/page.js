import Image from "next/image";

export default function Home() {
  return (
    <div className="font-mono text-lg grid grid-rows-1 items-center justify-items-center min-h-[850px] p-8 text-center bg-gray-100 dark:bg-gray-900">
      <main className="flex flex-col gap-[32px] row-start-1 items-center justify-items-center">
        <div>
          <Image
            className="rounded-full"
            aria-hidden
            src="/Portfolio_Website/IMG_2934.JPG"
            alt="headshot icon"
            width={150}
            height={150}
          />
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row bg-white rounded-xl border-2 border-gray-200 w-5/6 h-48 text-center align-middle p-5 dark:bg-slate-800 dark:border-gray-700">
          <ul>
                <li className="font-semibold">Celso Alejandro Fuentes</li>
                <li>
                    Graduated Suma Cum Laude from Clayton State and looking for Data Roles (Data Analyst, Reporting Analyst, Business Analyst, etc.)
                </li>
            </ul>
        </div>
        <div className="flex gap-[24px] flex-wrap items-center justify-center">
          <a
          className=" items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/celso-fuentes-07aa5b204"
          target="_blank"
          rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              className="dark:invert"
              src="/Portfolio_Website/social_media_svg/Untitled.svg"
              alt="linkedin icon"
              width={32}
              height={32}
            />
          </a>
          <a
            className="items-center gap-2 hover:underline hover:underline-offset-4"
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
        </div>
      </main>
    </div>
  );
}
