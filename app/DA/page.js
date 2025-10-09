import Image from "next/image";
import Capture from "./images/Capture.PNG"
import Away from "./images/Away.PNG"
import Overall from "./images/Overall.PNG"
import WolvesHome from "./images/WolvesHome.PNG"

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-start ">
        <div>
          <ul>
            <h1>Table of Contents</h1>
            <li>
              <a href="#NBA">Investigating Historical NBA Referee Bias</a>
            </li>
            <li>
              Is their a correlation between data centers operating and an increase in residential power rates
            </li>
          </ul>
        </div>
        <p>Investigation into historical bias from referees in the NBA</p>
        <div id="NBA">
          <p>
            This was my first project in data analysis. I had some previous expereince with SQL by using it for database design and implementation. Therefore, our two person team (me and <a src="
            https://www.linkedin.com/in/levi-riggins-154bbb289/">Levi Riggins</a>) wanted to use as many new tools to try and answer our question: Do referees in 
            the NBA really have a bias towards teams or for the home team/away team.
            We found the dataset on <a src="https://www.kaggle.com/datasets/wyattowalsh/basketball">Kaggle</a>, decided to try SQLite as our db, use python pandas to data clean and wanted to use Tableau for our visualizations.
            However during the data transformation process (in SQLite), I incorrectly calculated z-scores and also had not filtered out referees that had very few games during data cleaning. 
            This resulted in very skewed data results that were then put into Tableau. We believed that Tableau was reading our results wrong so we ended up switching to PowerBI. 
            It was not until later that we realized my mistake but by then we just decided to stick with PowerBI. So in the end we used the original dataset from Kaggle, data cleaned with python, did small transformations in SQLite, did most transformations and calculation with DAX in Microsoft PowerBI, and created our report in Microsoft PowerBI.
            Ultimately we found that no referees exhibted enough of a deviation from the average to be an outlier (aka biased without a doubt) but there were some very close calls.
            The report was fully interactive letting users select specific teams or specific referees and allowed for navigation.
            PowerBI does not allow me to embed the report with my personal Microsoft account so I am going to show some screen captures of the referees who were close to being outliers. 
          </p>
          <div>
             <Image src={Capture} alt="" width="1000" height="800"/> 
          </div>

          <div>
             <Image src={Overall} alt="" width="1000" height="800"/> 
          </div>
          
          <div>
             <Image src={WolvesHome} alt="" width="1000" height="800"/> 
          </div>

          <div>
             <Image src={Away} alt="" width="1000" height="800"/> 
          </div>
        </div>

      </main>
    </div>
  );
}
