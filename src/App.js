import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>David Wortham</h1>
        <p>
          Explorations in programming, learning new languages, attacking programming puzzles and problems, and building tools to help access web services and scraping web &quot;services&quot;.
        </p>
        <p>
          Full stack web developer with a bias towards front end and web application security.
          <abbr title="Hypertext markup Language version 5">HTML5</abbr>, <abbr title="Cascading Style Sheets version 3">CSS3</abbr>, JavaScript, <abbr title="Model-View-Controllers">MVCs</abbr> in {PHP, Python, Go, Rust}, <abbr title="Relational Database Management Systems">RDBMs</abbr> {MySQL, Postgres}
        </p>
        <p>
          <a href="https://balbix.com/" rel="noopener noreferrer">
            <img src="./i/balbix_logo.svg" alt="Balbix: CyberSecurity Posture Transformation (logo)" title="Balbix: CyberSecurity Posture Transformation" align="left" style="border: 0; margin: 0 20px 30px 0; width: 174px; height: 41px;" />
          </a>
          Currently working on solving companies' largest cybersecurity issues at <a href="https://balbix.com/" rel="noopener noreferrer">Balbix</a>.
          We build a next-generation Security Posture Transformation platform that provides with <a href="https://www.balbix.com/solutions/security-posture-visibility" rel="noopener noreferrer">100x better visibility of assets and vulnerabilities</a> and <a href="https://www.balbix.com/solutions/risk-based-vulnerability-management/" rel="noopener noreferrer">vulnerability management</a> on your corporate network.
        </p>
    
        <div class="row">
          <div class="one-half column">
            <h3>Identities</h3>
            <ul>
              <li>
                <strong>Personal Website:</strong>
                <a href="https://davidwortham.com/" rel="noopener noreferrer">David Wortham</a>
              </li>
              <li>
                <strong>GitHub:</strong>
                <a href="https://github.com/carbonphyber/" rel="noopener noreferrer">carbonphyber</a>
              </li>
              <li>
                <strong>HackerOne:</strong>
                <a href="https://hackerone.com/carbonphyber/" rel="noopener noreferrer">carbonphyber</a>
              </li>
              <li>
                <strong>HackerRank:</strong>
                <a href="https://www.hackerrank.com/carbonphyber" rel="noopener noreferrer">carbonphyber</a>
              </li>
            </ul>
          </div>
          <div class="one-half column">
            <h3>Formerly</h3>
            <ul>
              <li>
                <strong><abbr title="Web Developer">WebDev</abbr></strong> at TradeSmash
              </li>
              <li>
                <strong>Lead <abbr title="Web Developer">WebDev</abbr></strong>
                at
                <a href="https://web.archive.org/web/20141111220604/http://www.tentacl.com/forum/explore" rel="noopener noreferrer">Tentacl</a>
              </li>
              <li>
                <strong>Senior <abbr title="Web Developer">WebDev</abbr></strong>
                at
                <a href="http://www.gaiaonline.com/" rel="noopener noreferrer">Gaia Online</a>
              </li>
              <li>
                <strong>Front-End <abbr title="Web Developer">WebDev</abbr></strong>
                at
                <a href="http://www.solutionset.com/" rel="noopener noreferrer">SolutionSet</a>
              </li>
              <li>
                <strong><abbr title="Web Developer">WebDev</abbr></strong>
                at
                <a href="http://www.unspam.com/" rel="noopener noreferrer">UnSpam Technologies</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="column">
            <h3>Encrypted Communication</h3>
            <p>If you are fancy, you can opt to communicate with me using GPG-encrypted email.</p>
            <p>Run the command (assumes you already have <code>gpg</code> and <code>curl</code> running on your local machine. This downloads my GPG key and imports it to your local GPG contacts. Other operaing system setups may require different instructions.</p>
            <pre><code>curl -sSL 'https://davidwortham.com/gpgkeys/B1C48E08B985EA14190A5B6FA2D2641201915780.txt' | gpg --import -</code></pre>
            <p>My email address is in the GPG key. Encrypt a message and we can keep in touch.</p>
          </div>
        </div>

      </header>
      <section>
        <h2>
          <a href="#projects-list" id="projects-list" class="anchor" aria-hidden="true">
            <span class="octicon octicon-link"></span>
          </a>
          Projects List
        </h2>

        <ol>
          <li>
            <a href="#projects--kryptos">CIA Kryptos Scupture</a>
          </li>
          <li>
            <a href="#projects--best-cheap-dog-food">Best Cheap Dog Food</a>
          </li>
          <li>
            <a href="#projects--dog-rescue-fostering">Dog Rescue Fostering</a>
          </li>
          <li>
            <a href="#projects--news-feed">News Feed project</a>
          </li>
        </ol>

        <div class="row">
          <div class="one-half column">
            <h3><a href="#projects--kryptos" id="projects--kryptos" class="anchor" aria-hidden="true"><span class="octicon octicon-link"></span></a>Kryptos Sculture at CIA Headquarters, Langley, VA</h3>
            <p>Several months studying the cracked portions (K0, K1, K2, K3) of the <a href="https://en.wikipedia.org/wiki/Kryptos" rel="noopener noreferrer">Kryptos statue ciphers</a> and lots of nights and weekends learning the techniques used to break similar classical ciphers, then implementation of those techniques in JavaScript, Python, and Rust. No luck on <a href="https://en.wikipedia.org/wiki/Kryptos#Solution_of_passage_4" rel="noopener noreferrer">cracking K4</a> yet.</p>
          </div>
          <div class="one-half column">
            <h3><a href="#projects--best-cheap-dog-food" id="projects--best-cheap-dog-food" class="anchor" aria-hidden="true"><span class="octicon octicon-link"></span></a>Best Cheap Dog Food</h3>
            <p>A <del><a href="http://www.best-cheap-dog-food.com/" rel="noopener noreferrer">dog food price comparison</a></del> web property. It makes use of Python and Beautiful Soup for indexing different dog food retailers. The &quot;killer app&quot; is grouping of dog foods by ingredient quality ratings, then sorted by unit price (dollars per pound).</p>
            <p>This is an attempt to make use of a feature I wish all major e-tailers would support (unit price of commodity goods) and to practice SEO skills, analytics, and A/B Testing while generting a modest amount of passive income from affiliate marketing.</p>
            <p>If you like the value of the site, please spread the word. I currently donate more money on non-profit dog rescues than I generate on this website project.</p>
          </div>
        </div>
        <div class="row">
          <div class="one-half column">
            <h3><a href="#projects--dog-rescue-fostering" id="projects--dog-rescue-fostering" class="anchor" aria-hidden="true"><span class="octicon octicon-link"></span></a>Dog Rescue Fostering</h3>
            <p>A web page documenting <a href="https://www.davidwortham.com/dogs/rescue-foster/" rel="noopener noreferrer">my volunteer efforts in fostering, training, and photographing dogs</a> for local non-profit animal rescues in my spare time.</p>
            <p><a href="http://www.coppersdream.org/" rel="noopener noreferrer">Copper's Dream</a> is a foster-based non-profit animal rescue that saves pets from high-kill shelters in California.</p>
            <p><a href="http://ilovefamilydog.org/" rel="noopener noreferrer">Family Dog Rescue</a> is a shelter-based non-profit dog rescue in San Francisco that saves family-friendly pets from California, Mexico, and other countries.</p>
          </div>
          <div class="one-half column">
            <h3><a href="#projects--news-feed" id="projects--news-feed" class="anchor" aria-hidden="true"><span class="octicon octicon-link"></span></a>News Feed</h3>
            <p>A Python web scraper with modules specifically designed for a few different news organization websites. Different old link indexing subclasses for Google XML Sitemaps, HTML pagination, RSS feeds, and similar lists of article URLs.</p>
            <p>Plans are to poll news organizations websites for new articles every few minutes and support web hooks for web service subscribers with data points similar to Dublin Five (Facebook Graph / Twitter)</p>
            <p>Ultimately the goal would be turning this into a news reader app with micropayments and contracts with content owners. It's worked for <a href="https://medium.com/on-blendle/blendle-a-radical-experiment-with-micropayments-in-journalism-365-days-later-f3b799022edc" rel="noopener noreferrer">Blendle</a> in The Netherlands, it can work in the US, also.</p>
          </div>
        </div>
      </section>
    
      <section>
        <h2>Resources</h2>
        <p>My dumping ground for useful resources as I collect them.</p>

        <ul>
          <li>
            <a href="./resources/cybersecurity/index.html">
              <strong>CyberSecurity Resources</strong>
            </a>
            <ul>
              <li>
                <a href="./resources/cybersecurity/everyone/index.html">for everyone</a>.
              </li>
              <li>
                <a href="./resources/cybersecurity/developers/index.html">for software developers</a>.
              </li>
              <li>
                <a href="./resources/cybersecurity/businesses/index.html">for businesses</a> (or journalists, or enthusiasts, etc).
              </li>
            </ul>
          </li>
          <li>
            <a href="./resources/programming/index.html">
              <strong>Programming Resources</strong>
            </a>
            <ul>
              <li>
                <a href="./resources/programming/webdev/index.html">for web developers</a>.
              </li>
            </ul>
          </li>
          <li>
            <a href="./resources/economics/index.html">
              <strong>Understanding Classical and Behavioral Economics</strong>
            </a>
          </li>
          <li>
            <a href="./resources/nonprofits/index.html">
              <strong>Non-Profit Organization Resources</strong>
            </a>
            that I find. Make your limited resources go further by finding lesser known resources.
          </li>
          <li>
            <a href="./resources/charities/index.html">
              <strong>Charities that I support</strong>
            </a>
            and encourage you to consider.
          </li>
        </ul>
      </section>

      <footer>
        <p>
          <small>Hosted on GitHub Pages &mdash; Theme by <a href="http://getskeleton.com/" rel="noopener noreferrer">Skeleton CSS Framework</a></small>
        </p>
      </footer>
    </div>
  );
}

export default App;
