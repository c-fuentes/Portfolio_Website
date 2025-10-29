import Image from "next/image";
//import Capture from "./images/Capture.PNG"
//import Overall from "./images/Overall.PNG"
//import WolvesHome from "./images/WolvesHome.PNG"

export default function Home() {
  return (
    <div className="font-mono text-lg grid grid-rows-2 items-start justify-items-center min-h-screen p-8 gap-16 text-center bg-gray-100 dark:bg-gray-900">
      <main className="flex flex-col gap-[32px] row-start-1 items-center">
        <div className="bg-white rounded-xl border-2 border-gray-200 w-5/6 p-5 dark:bg-slate-800 dark:border-gray-700">
          <ol>
            <h1 className="font-bold">Table of Contents</h1>
            <li>
              <a href="#NBA">Investigating Historical NBA Referee Bias</a>
            </li>
            <li>
              <a href="#Electric">Is their a correlation between data centers operating and an increase in residential power rates</a>
            </li>
          </ol>
        </div>
        <div id="NBA" className="grid gap-4 bg-white rounded-xl border-2 border-gray-200 w-5/6 p-5 dark:bg-slate-800 dark:border-gray-700">
          <p className="font-semibold" >Investigation into historical bias from referees in the NBA</p>
          <p>
            This was my first project in data analysis. I had some previous expereince with SQL by using it for database design and implementation. Therefore, our two person team (me and <a href="
            https://www.linkedin.com/in/levi-riggins-154bbb289/" className="text-blue-600 after:content-['_↗']">Levi Riggins</a>) wanted to use as many new tools to try and answer our question: Do referees in 
            the NBA really have a bias towards teams or for the home team/away team.
            We found the dataset on <a href="https://www.kaggle.com/datasets/wyattowalsh/basketball" className="text-blue-600 after:content-['_↗']">Kaggle</a>, decided to try SQLite as our db, use python pandas to data clean and wanted to use Tableau for our visualizations.
            However during the data transformation process (in SQLite), I incorrectly calculated z-scores and also had not filtered out referees that had very few games during data cleaning. 
            This resulted in very skewed data results that were then put into Tableau. We believed that Tableau was reading our results wrong so we ended up switching to PowerBI. 
            It was not until later that we realized my mistake but by then we just decided to stick with PowerBI. So in the end we used the original dataset from Kaggle, data cleaned with python, did small transformations in SQLite, did most transformations and calculation with DAX in Microsoft PowerBI, and created our report in Microsoft PowerBI.
            Ultimately we found that no referees exhibted enough of a deviation from the average to be an outlier (aka biased without a doubt) but there were some very close calls.
            The report was fully interactive letting users select specific teams or specific referees and allowed for navigation.
            PowerBI does not allow me to embed the report with my personal Microsoft account so I am going to show some screen captures of the referees who were close to being outliers. 
          </p>
          <div className="grid grid-cols-2 mt-4">
             <Image src="/Portfolio_Website/Capture.PNG" alt="" width="1000" height="800"/> 

             <p>Insert in depth explaination of image</p>
          </div>

          <div className="grid grid-cols-2">
             <Image src="/Portfolio_Website/Overall.PNG" alt="" width="1000" height="800"/>

             <p>Insert in depth explaination of image</p>
          </div>
          
          <div className="grid grid-cols-2">
             <Image src="/Portfolio_Website/WolvesHome.PNG" alt="" width="1000" height="800"/>

             <p>Insert in depth explaination of image</p> 
          </div>

          <div className="grid grid-cols-2">
            
             <Image src="/Portfolio_Website/Away.PNG" alt="" width="1000" height="800"/>

             <p>Insert in depth explaination of image</p> 
          </div>
        </div>
        <div id="Electric" className="grid gap-4 bg-white rounded-xl border-2 border-gray-200 w-5/6 p-5 dark:bg-slate-800 dark:border-gray-700">
          <p className="font-semibold">Is their a correlation between data centers operating and an increase in residential power rates</p>
          <p>This project is a work in progress right now as I am still performing data cleaning on a dataset I scrapped from the Georgia Public Service Commission page. I also need to scrape some data on all the data centers in the State of Georgia to match with the corresponding power company.</p>
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
