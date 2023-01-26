/* eslint-env browser */
import React from 'react';

import {
  dogsArray
} from '../data/DogsRescueFosters';
import './DogsRescueFostersPage.css';

export function DogsRescueFostersPage() {
  return (
    <div className="container">
      <header>
        <h1>Rescue Dog Foster</h1>
      </header>

      <header>
        <p className="lead">David fosters adoptable dogs for <a href="https://coppersdream.org/" className="coppers-dream-colors" rel="noopener noreferrer">CoppersDream.org</a>, <a href="http://dpsrescue.com/" className="doggie-protective-service-colors" rel="noopener noreferrer">Doggie Protective Services (DPS)</a>, and <a href="https://ilovefamilydog.org/" className="family-dog-rescue-colors" rel="noopener noreferrer">Family Dog Rescue</a>, animal rescues in the San Francisco Bay Area.</p>
        <p>These rescue groups pull dogs from high risk animal shelters in Central California, delivers them to fosters, and the fosters take care of them while they wait to be adopted. Family Dog Rescue tends to pull more &quot;special needs&quot; dogs (including blind, deaf, both, skin infections, medical conditions, etc), northern breeds (Husky, Malmute, and wolf hybrids) and also pulls dogs from other countries including Mexico and Burma.</p>
        <p>David enjoys photographing and training his foster dogs.</p>
      </header>

      {dogsArray.map((dog) => (
        <div className="row" key={`${String(dog.id)}-${String(dog.name)}`}>
          <figure
            className={`jumbotron rescue-dog rescue-dog-${dog.id} ${dog.imageUrl ? '' : 'no-image'}`}
            id={dog.id}
            style={{
              backgroundImage: `url(${dog.imageUrl})` || '',
            }}
          >
            <figcaption className={`rescue-dog--caption rescue-dog--caption__${dog.captionAlign || 'left'}`}>
              <h2 className="rescue-dog--header"><a href={`#${dog.id}`}>{dog.name}</a></h2>
              <h3 className="rescue-dog--breed">{dog.breedGuess || ''}</h3>
              <h3 className="rescue-dog--vitals">{[dog.ageGuess, dog.weight].join(', ')}</h3>
              <p className="rescue-dog--labels">
                <span className="label label-info">{`Rescued ${dog.dateRescued}`}</span>
                <br />
                {dog.dateAdopted && <span className="label label-success">{`Adopted ${dog.dateAdopted}`}</span>}
              </p>
            </figcaption>
            <div className="rescue-dog--actions">
              <a href={dog.imageUrl} title={`View the full size picture of ${dog.description}`} rel="noopener noreferrer" target="_blank">image</a>
            </div>
          </figure>
        </div>
      ))}
    </div>
  );
}
