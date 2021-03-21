/* eslint-env browser */
import React from 'react';

export function ProgrammingWebdevPage() {
  return (
    <div className="container">
      <header>
        <h1>Programming Tools for Web Developers</h1>
        <p>If you program for a living (or for fun), you should aim to craft secure and quality code. These resources will help in that endeavor.</p>
      </header>

      <section>
        <h2>Secure Programming Guidelines</h2>
        <ul>
          <li>
            <a href="https://www.owasp.org/images/7/72/OWASP_Top_10-2017_%28en%29.pdf.pdf" rel="noopener noreferrer">Open Web Application Security Project (OWASP) Top 10</a> list of most common programming vulnerabilities. Be sure to learn what mistakes <em>not</em> to make.
          </li>
          <li>
            <a href="https://cheatsheetseries.owasp.org/" rel="noopener noreferrer">Open Web Application Security Project (OWASP) Cheat Sheets</a>. A series of topic-specific guidelines for ensuring your web application is secure.
          </li>
          <li>
            <a href="https://github.com/minimaxir/big-list-of-naughty-strings" rel="noopener noreferrer">Big List of Naughty Strings</a> -- a GitHub code repo with plenty of variety to test your application against lots of malicious user-generated content strings. Make sure you test your app against data->code injection with more than just the inputs <em>you thought</em> to protect your app from.
          </li>
          <li>
            <a href="https://before-you-ship.18f.gov/security/frameworks/" rel="noopener noreferrer">18F Framework-Specific Security Guidelines</a>
          </li>
          <li>
            <strong>HTTP Headers</strong>
            <ul>
              <li>
                <a href="https://www.keycdn.com/blog/http-security-headers" rel="noopener noreferrer">Hardening Your HTTP Security Headers @ KeyCDN</a>
              </li>
            </ul>
          </li>
          <li>
            <strong>Docker Security</strong>
            <ul>
              <li>
                <a href="https://www.threatstack.com/blog/docker-security-tips-best-practices" rel="noopener noreferrer">ThreatStack: Docker Security Tips &amp; Best Practices</a>
              </li>
              <li>
                <a href="https://snyk.io/blog/10-docker-image-security-best-practices/" rel="noopener noreferrer">10 Docker Image Security Best Practices</a>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Program Testing</h2>
        <ul>
          <li>
            <a href="https://www.ssllabs.com/ssltest/analyze.html" rel="noopener noreferrer">SSL Labs: SSL/TLS Server Configuration Tester</a>
          </li>
          <li>
            <a href="https://securityheaders.com/" rel="noopener noreferrer">HTTP Security Headers Tester</a>
          </li>
          <li>
            <a href="https://developers.google.com/speed/pagespeed/insights/" rel="noopener noreferrer">Google PageSpeed Insights: web page performance and quality analysis</a>
          </li>
          <li>
            <a href="https://developers.google.com/web/tools/lighthouse/" rel="noopener noreferrer">Google Lighthouse: web application quality testing tool</a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Code Quality Checkers</h2>
        <p>Integrate these into your build/CI system and ensure your code has a quality gate.</p>
        <ul>
          <li>
            <a href="https://www.sonarqube.org/features/enhance-your-workflow/" rel="noopener noreferrer">SonarSource SonarQube static source code analyzer</a> for <a href="https://www.sonarqube.org/features/multi-languages/" rel="noopener noreferrer">multiple programming languages</a>
          </li>
          <li>
            <a href="https://before-you-ship.18f.gov/security/static-analysis/" rel="noopener noreferrer">18F Static Analysis tool recommendations</a> (18F is a US Government Digital Workforce that openly publishes great web+network resources)
          </li>
          <li>
            <strong>Python</strong>
            <ul>
              <li>
                <a href="https://github.com/PyCQA/bandit">Bandit for Python Secure Programming Practices</a>
              </li>
            </ul>
          </li>
          <li>
            <strong>JavaScript</strong>
            <ul>
              <li>
                <a href="https://eslint.org/" rel="noopener noreferrer">ESLint</a>
              </li>
              <li>
                <a href="https://docs.npmjs.com/cli/v7/commands/npm-audit" rel="noopener noreferrer">NPM audit</a>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Continuous Integration and Continuous Deployment (CI/CD)</h2>
        <p>Tools and procedures which support automating repetitive tasks related to code review, source control, and deployment.</p>
        <ul>
          <li>
            <a href="https://www.conventionalcommits.org/" rel="noopener noreferrer">Conventional Commits</a> -- a convention for formatting commit messages such that the Changelog and version bump can be programmatically determined.
          </li>
          <li>
            <a href="https://semantic-release.gitbook.io/semantic-release/" rel="noopener noreferrer">Semantic Release</a> -- a toolset which automates Changelog generation and version bumping provided all commits follow a variant of Conventional Changelog.
          </li>
        </ul>
      </section>

      <section>
        <h2>Best Practices Application Development</h2>
        <ul>
          <li>
            <a href="https://12factor.net/">12 Factor Application design</a>. Factors which describe robust, sustainable high quality web applications.
          </li>
        </ul>
      </section>
    </div>
  );
}
