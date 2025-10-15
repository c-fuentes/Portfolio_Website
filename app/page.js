import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-start ">
        <h1>Celso Alejandro Fuentes</h1>
        <p>Graduated Suma Cum Laude from Clayton State and looking for Data Roles (Data Analyst, Reporting Analyst, Business Analyst, etc.)</p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          
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
            src="/Portfolio_Website/social_media_svg/linkedin.svg"
            alt="linkedin icon"
            width={32}
            height={32}
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
