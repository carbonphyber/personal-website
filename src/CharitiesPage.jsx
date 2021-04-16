/* eslint-env browser */
import React from 'react';

// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const charitiesList = [
  {
    name: 'Freedom of the Press Foundation',
    href: 'https://freedom.press/',
  },
  {
    name: 'ProPublica',
    href: 'https://www.propublica.org/',
  },
  {
    name: 'Northern California Innocence Project',
    href: 'http://ncip.org/',
  },
  {
    name: 'Electronic Frontier Foundation (EFF)',
    href: 'https://www.eff.org/',
  },
  {
    name: 'The Perfect Dog',
    href: 'https://theperfectdog.org/',
  },
  {
    name: 'Copper\'s Dream Rescue',
    href: 'https://www.coppersdream.org/',
  },
  {
    name: 'Family Dog Rescue',
    href: 'https://www.ilovefamilydog.org/',
  },
  {
    name: 'Ballotpedia',
    href: 'https://news.ballotpedia.org/',
  },
  {
    name: 'Wikipedia',
    href: 'https://www.wikipedia.org/',
  },
  {
    name: 'Second Harvest of Silicon Valley',
    href: 'https://www.shfb.org/',
  },
];


export function CharitiesPage() {
  const data = shuffle(charitiesList);
  return (
    <div className="container">
      <h1>Charities</h1>

      <p className="lead">David supports these charities. You should consider doing the same.</p>

      <div>
        <ul>
          {data.map(({ href, name }) => (<li><a href={href} rel="noopener noreferrer">{name}</a></li>))}
        </ul>
      </div>
    </div>
  );
}
