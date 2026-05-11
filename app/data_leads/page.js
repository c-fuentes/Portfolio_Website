import Image from "next/image";

export default function Home() {
  return (
    <div className="font-mono text-lg grid grid-rows-1 items-center justify-items-center min-h-[850px] p-8 text-center bg-gray-100 dark:bg-gray-900">
      <main className="flex flex-col gap-[32px] row-start-1 items-center justify-items-center">
          <div>
            <p>placeholder actions for later, need to figure out how to make the post and get work for next js and what server to hookup to, and aws stuff</p>
            <form action="/action_page.php" method="post">
                <label for="fname">First name:</label><br></br>
                <input className="bg-white outline-black" type="text" id="fname" name="fname" value="John" pattern="[A-Za-z]{20}" required autocomplete="on"></input><br></br>
                <label for="lname">Last name:</label><br></br>
                <input className="bg-white outline-black" type="text" id="lname" name="lname" value="Doe"  pattern="[A-Za-z]{20}" required autocomplete="on"></input><br></br>
                <label for="pnum">Phone Number:</label><br></br>
                <input className="bg-white outline-black" type="tel" id="pnum" name="pnum" placeholder="404-999-9999" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required autocomplete="on"></input><br></br>
                <label for="email">Enter your email:</label><br></br>
                <input className="bg-white outline-black" type="email" id="email" name="email" autocomplete="on"></input><br></br>
                
                <input type="checkbox" id="auto" name="auto" value="Auto Insurance"></input>
                <label for="auto">Auto Insurance</label><br></br>
                <input type="checkbox" id="home" name="home" value="Home"></input>
                <label for="home">Home & Property Insurance</label><br></br>
                <input type="checkbox" id="life" name="life" value="Life"></input>
                <label for="life">Life Insurance</label><br></br>
                <input type="checkbox" id="business" name="business" value="Business"></input>
                <label for="business">Small Business</label><br></br>
                <input type="checkbox" id="other" name="other" value="other"></input>
                <label for="other">Small Business</label><br></br>

                <input className="bg-blue" type="submit" value="Submit" ></input>
            </form>

            <p>By filling out the form, you are providing express consent by electronic signature that you may be contacted by telephone .via call and/or text messages. and/or email for marketing purposes</p>
          </div>
      </main>
    </div>
  );
}
