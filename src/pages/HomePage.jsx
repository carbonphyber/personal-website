/* eslint-env browser */
import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { CodeSnippetCard } from '../CodeSnippetCard';

export function HomePage() {
  return (
    <Container maxWidth="lg">
      <header>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h2" component="h1">
              David Wortham
            </Typography>
          </Grid>
          <Grid item xs={12}>
            Explorations in programming, learning new languages, attacking programming puzzles and problems, and building tools to help access web services and scraping web &quot;services&quot;.
          </Grid>
          <Grid item xs={6}>
            Full stack web developer with a bias towards front end and web application security. <abbr title="Hypertext markup Language version 5">HTML5</abbr>, <abbr title="Cascading Style Sheets version 3">CSS3</abbr>, JavaScript, <abbr title="Model-View-Controllers">MVCs</abbr> in {`{JavaScript, PHP, Python, Go, Rust}`}, <abbr title="Relational Database Management Systems">RDBMs</abbr> {`{MySQL, Postgres}`}
          </Grid>
          <Grid item xs={6}>
            <a href="https://balbix.com/" rel="noopener noreferrer">
              <img src="/i/balbix_logo.svg" alt="Balbix: CyberSecurity Posture Transformation (logo)" title="Balbix: CyberSecurity Posture Transformation" align="left" style={{ border: 0, margin: '0 20px 30px 0', width: 174, height: 41 }} />
            </a>
            Currently working on solving companies' largest cybersecurity issues at <a href="https://balbix.com/" rel="noopener noreferrer">Balbix</a>.
            We build a next-generation Security Posture Transformation platform that provides with <a href="https://www.balbix.com/solutions/security-posture-visibility" rel="noopener noreferrer">100x better visibility of assets and vulnerabilities</a> and <a href="https://www.balbix.com/solutions/risk-based-vulnerability-management/" rel="noopener noreferrer">vulnerability management</a> on your corporate network.
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" component="h3">
              Identities
            </Typography>
            <ul>
              <li>
                <strong>Personal Website:</strong> <a href="https://davidwortham.com/" rel="noopener noreferrer">David Wortham</a>
              </li>
              <li>
                <strong>GitHub:</strong> <a href="https://github.com/carbonphyber/" rel="noopener noreferrer">carbonphyber</a>
              </li>
              <li>
                <strong>HackerOne:</strong> <a href="https://hackerone.com/carbonphyber/" rel="noopener noreferrer">carbonphyber</a>
              </li>
              <li>
                <strong>HackerRank:</strong> <a href="https://www.hackerrank.com/carbonphyber" rel="noopener noreferrer">carbonphyber</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4" component="h3">
              Formerly
            </Typography>
            <ul>
              <li>
                <strong>Founding <abbr title="Web Developer">WebDev</abbr></strong> at TradeSmash
              </li>
              <li>
                <strong>Lead <abbr title="Web Developer">WebDev</abbr></strong> at <a href="https://web.archive.org/web/20141111220604/http://www.tentacl.com/forum/explore" rel="noopener noreferrer">Tentacl</a>
              </li>
              <li>
                <strong>Senior <abbr title="Web Developer">WebDev</abbr></strong> at <a href="http://www.gaiaonline.com/" rel="noopener noreferrer">Gaia Online</a>
              </li>
              <li>
                <strong>Front-End <abbr title="Web Developer">WebDev</abbr></strong> at <a href="http://www.solutionset.com/" rel="noopener noreferrer">SolutionSet</a>
              </li>
              <li>
                <strong><abbr title="Web Developer">WebDev</abbr></strong> at <a href="http://www.unspam.com/" rel="noopener noreferrer">UnSpam Technologies</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" component="h3">
              Encrypted Communication
            </Typography>
            <p>If you are fancy, you can opt to communicate with me using GPG-encrypted email.</p>
            <p>Run the command (assumes you already have <code>gpg</code> and <code>curl</code> running on your local machine. This downloads my GPG key and imports it to your local GPG contacts. Other operaing system setups may require different instructions.</p>
            <CodeSnippetCard
              text="curl -sSL 'https://davidwortham.com/gpgkeys/B1C48E08B985EA14190A5B6FA2D2641201915780.txt' | gpg --import -"
            />
            <p>My email address is in the GPG key. Encrypt a message and we can keep in touch.</p>
          </Grid>
        </Grid>
      </header>

      <section>
        <Typography variant="h4" component="h3">
          <a href="#projects-list" id="projects-list" className="anchor" aria-hidden="true">
            <span className="octicon octicon-link"></span>
          </a>
          Projects List
        </Typography>

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

        <div className="row">
          <div className="one-half column">
            <Typography variant="h5" component="h4">
              <a href="#projects--kryptos" id="projects--kryptos" className="anchor" aria-hidden="true">
                <span className="octicon octicon-link"></span>
              </a>
              Kryptos Sculture at CIA Headquarters, Langley, VA
            </Typography>
            <p>Several months studying the cracked portions (K0, K1, K2, K3) of the <a href="https://en.wikipedia.org/wiki/Kryptos" rel="noopener noreferrer">Kryptos statue ciphers</a> and lots of nights and weekends learning the techniques used to break similar classical ciphers, then implementation of those techniques in JavaScript, Python, and Rust. No luck on <a href="https://en.wikipedia.org/wiki/Kryptos#Solution_of_passage_4" rel="noopener noreferrer">cracking K4</a> yet.</p>
          </div>
          <div className="one-half column">
            <Typography variant="h5" component="h4">
              <a href="#projects--best-cheap-dog-food" id="projects--best-cheap-dog-food" className="anchor" aria-hidden="true">
                <span className="octicon octicon-link"></span>
              </a>
              Best Cheap Dog Food
            </Typography>
            <p>A <del><a href="http://www.best-cheap-dog-food.com/" rel="noopener noreferrer">dog food price comparison</a></del> web property. It makes use of Python and Beautiful Soup for indexing different dog food retailers. The &quot;killer app&quot; is grouping of dog foods by ingredient quality ratings, then sorted by unit price (dollars per pound).</p>
            <p>This is an attempt to make use of a feature I wish all major e-tailers would support (unit price of commodity goods) and to practice SEO skills, analytics, and A/B Testing while generting a modest amount of passive income from affiliate marketing.</p>
            <p>If you like the value of the site, please spread the word. I currently donate more money on non-profit dog rescues than I generate on this website project.</p>
          </div>
        </div>
        <div className="row">
          <div className="one-half column">
            <Typography variant="h5" component="h4">
              <a href="#projects--dog-rescue-fostering" id="projects--dog-rescue-fostering" className="anchor" aria-hidden="true">
                <span className="octicon octicon-link"></span>
              </a>
              Dog Rescue Fostering
            </Typography>
            <p>A web page documenting <Link to="/dogs/rescue-foster/">my volunteer efforts in fostering, training, and photographing dogs</Link> for local non-profit animal rescues in my spare time.</p>
            <p><a href="https://www.coppersdream.org/" rel="noopener noreferrer">Copper's Dream</a> is a foster-based non-profit animal rescue that saves pets from high-kill shelters in California.</p>
            <p><a href="https://ilovefamilydog.org/" rel="noopener noreferrer">Family Dog Rescue</a> is a shelter-based non-profit dog rescue in San Francisco that saves family-friendly pets from California, Mexico, and other countries.</p>
          </div>
          <div className="one-half column">
            <Typography variant="h5" component="h4">
              <a href="#projects--news-feed" id="projects--news-feed" className="anchor" aria-hidden="true">
                <span className="octicon octicon-link"></span>
              </a>
              News Feed
            </Typography>
            <p>A Python web scraper with modules specifically designed for a few different news organization websites. Different old link indexing subclasses for Google XML Sitemaps, HTML pagination, RSS feeds, and similar lists of article URLs.</p>
            <p>Plans are to poll news organizations websites for new articles every few minutes and support web hooks for web service subscribers with data points similar to Dublin Five (Facebook Graph / Twitter)</p>
            <p>Ultimately the goal would be turning this into a news reader app with micropayments and contracts with content owners. It's worked for <a href="https://medium.com/on-blendle/blendle-a-radical-experiment-with-micropayments-in-journalism-365-days-later-f3b799022edc" rel="noopener noreferrer">Blendle</a> in The Netherlands, it can work in the US, also.</p>
          </div>
        </div>
      </section>

      <section>
        <Typography variant="h4" component="h3">
          Resources
        </Typography>
        <p>My dumping ground for useful resources as I collect them.</p>

        <ul>
          <li>
            <Link to="/resources/cybersecurity/"><strong>CyberSecurity Resources</strong></Link>
            <ul>
              <li>
                <Link to="/resources/cybersecurity/everyone/">for everyone</Link>.
              </li>
              <li>
                <Link to="/resources/cybersecurity/developers/">for software developers</Link>.
              </li>
              <li>
                <Link to="/resources/cybersecurity/businesses/">for businesses</Link> (or journalists, or enthusiasts, etc).
              </li>
            </ul>
          </li>
          <li>
            <Link to="/resources/programming/"><strong>Programming Resources</strong></Link>
            <ul>
              <li>
                <Link to="/resources/programming/webdev/">for web developers</Link>.
              </li>
            </ul>
          </li>
          <li>
            <Link to="/resources/economics/"><strong>Understanding Classical and Behavioral Economics</strong></Link>
          </li>
          <li>
            <Link to="/resources/nonprofits/"><strong>Non-Profit Organization Resources</strong></Link> that I find. Make your limited resources go further by finding lesser known grants, freebies, and tools.
          </li>
          <li>
            <Link to="/resources/charities/"><strong>Charities that I support</strong> </Link> and encourage you to consider.
          </li>
        </ul>
      </section>

      <footer>
        <p>
          <small>Hosted on GitHub Pages &mdash; Theme by <a href="https://mui.com/" rel="noopener noreferrer">MUI</a></small>
        </p>
      </footer>
    </Container>
  );
}
