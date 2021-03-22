/* eslint-env browser */
import React from 'react';

import './DogsRescueFostersPage.css';

const DOG_STATUS = {
  ADOPTED: 'adopted',
  AVAILABLE: 'available',
};
const ORGANIZATION = {
  CD: 'Copper\'s Dream Rescue',
  DPS: 'Doggie Protective Services',
  FDR: 'Family Dog Rescue',
};

const dogsArray = [
  {
    name: 'Guppy',
    status: DOG_STATUS.ADOPTED,
    breedGuess: 'Chihuahua mix',
    ageGuess: '5 months',
    weight: '5 lbs',
    organization: ORGANIZATION.CD,
    dateRescued: '2016-05-06',
    dateAdopted: '',
    imageUrl: '/i/coppersdream.org/guppy/DSC_6255.JPG',
    captionAlign: 'right',
  },
  {
    name: 'Sage',
    status: DOG_STATUS.ADOPTED,
    breedGuess: 'Terrier mix',
    ageGuess: '1 year',
    weight: '25 lbs',
    organization: ORGANIZATION.CD,
    dateRescued: '2016-03-04',
    dateAdopted: '',
    imageUrl: '/i/coppersdream.org/sage/DSC_5347.JPG',
    captionAlign: 'right',
  },
  {
    name: 'Curry',
    status: DOG_STATUS.ADOPTED,
    breedGuess: 'Terrier mix',
    ageGuess: '2 years',
    weight: '30 lbs',
    organization: ORGANIZATION.CD,
    dateRescued: '2016-02-24',
    dateAdopted: '2016-04-01',
    imageUrl: '/i/coppersdream.org/curry/DSC_4346.JPG',
    captionAlign: 'right',
  },
  {
    name: 'Cookie',
    status: DOG_STATUS.ADOPTED,
    breedGuess: 'Australian Shepherd',
    ageGuess: '1.5 years',
    weight: '41 lbs',
    organization: ORGANIZATION.FDR,
    dateRescued: '2016-01-15',
    dateAdopted: '2016-02-20',
    imageUrl: '/i/norcalfamilydogrescue.org/cookie/DSC_3932.JPG',
    captionAlign: 'right',
  },
  {
    name: 'Canella',
    status: DOG_STATUS.ADOPTED,
    breedGuess: 'Labrador Retriever',
    ageGuess: '2 years',
    weight: '45 lbs',
    organization: ORGANIZATION.DPS,
    dateRescued: '2015-07-05',
    dateAdopted: '2015-07-12',
    imageUrl: '/i/dpsrescue.com/canella/DSC_2839.JPG',
    captionAlign: 'left',
  },
  {
    name: 'Amadeus',
    status: DOG_STATUS.ADOPTED,
    breedGuess: 'Chihuahua + Russell Terrier',
    ageGuess: '1 year',
    weight: '19 lbs',
    organization: ORGANIZATION.CD,
    dateRescued: '2015-06-28',
    dateAdopted: '2015-08-16',
    imageUrl: '/i/coppersdream.org/amadeus/DSC_2825.JPG',
    captionAlign: 'right',
  },
  {
    name: 'Rachel',
    status: DOG_STATUS.ADOPTED,
    breedGuess: 'Aussie Poodle',
    ageGuess: '11 months',
    weight: '40 lbs',
    organization: ORGANIZATION.CD,
    dateRescued: '2015-05-26',
    dateAdopted: '2015-05-30',
    imageUrl: '/i/coppersdream.org/rachel/DSC_0599.JPG',
    captionAlign: 'left',
  },
  {
    name: 'Speckles',
    status: DOG_STATUS.ADOPTED,
    breedGuess: 'American Bulldog mix',
    ageGuess: '13 months',
    weight: '50 lbs',
    organization: ORGANIZATION.FDR,
    dateRescued: '2014-12-14',
    dateAdopted: '2015-05-23',
    imageUrl: '/i/norcalfamilydogrescue.org/speckles/DSC_0465.JPG',
    captionAlign: 'right',
  },
  {
    name: 'Cowboy',
    status: DOG_STATUS.ADOPTED,
    breedGuess: 'Australian Cattle Dog',
    ageGuess: '5 months',
    weight: '27 lbs',
    organization: ORGANIZATION.CD,
    dateRescued: '2014-12-02',
    dateAdopted: '2015-01-19',
    imageUrl: '/i/coppersdream.org/cowboy/DSC_9471.JPG',
    captionAlign: 'right',
  },
  {
    name: 'Reba',
    status: DOG_STATUS.ADOPTED,
    breedGuess: 'Terrier mix',
    ageGuess: '4 years',
    weight: '',
    organization: ORGANIZATION.CD,
    dateRescued: '2014-11-22',
    dateAdopted: '2014-11-23',
    imageUrl: '/i/coppersdream.org/reba/DSC_9374.JPG',
    captionAlign: 'right',
  },
  {
    name: 'Johnny',
    status: DOG_STATUS.ADOPTED,
    breedGuess: 'Terrier mix',
    ageGuess: '2 years',
    weight: '9 lbs',
    organization: ORGANIZATION.CD,
    dateRescued: '2014-10-11',
    dateAdopted: '2014-12-09',
    imageUrl: '/i/coppersdream.org/johnny/DSC_9405.JPG',
    captionAlign: 'right',
  },
  {
    name: 'Bowser',
    status: DOG_STATUS.ADOPTED,
    breedGuess: 'Rat Terrier mix',
    ageGuess: '8-10 months',
    weight: '20 lbs',
    organization: ORGANIZATION.CD,
    dateRescued: '2014-09-23',
    dateAdopted: '2014-10-11',
    imageUrl: '/i/coppersdream.org/bowser/DSC_8477.JPG',
    captionAlign: 'left',
  },
  {
    name: 'Felix',
    status: DOG_STATUS.ADOPTED,
    breedGuess: 'Whippet mix',
    ageGuess: '4 years',
    weight: '40 lbs',
    organization: ORGANIZATION.CD,
    dateRescued: '2014-08-01',
    dateAdopted: '2014-09-14',
    imageUrl: '/i/coppersdream.org/felix/DSC_7912.JPG',
    captionAlign: 'left',
  },
  {
    name: 'Cinnamon',
    status: DOG_STATUS.ADOPTED,
    breedGuess: 'Mixed breed',
    ageGuess: '11 months',
    weight: '45 lbs',
    organization: ORGANIZATION.CD,
    dateRescued: '2014-07-15',
    dateAdopted: '2014-07-23',
    imageUrl: '/i/coppersdream.org/cinnamon/DSC_7608.JPG',
    captionAlign: 'right',
  },
  {
    name: 'Sid',
    status: DOG_STATUS.ADOPTED,
    breedGuess: 'German Shepherd mix',
    ageGuess: '3 years',
    weight: '60 lbs',
    organization: ORGANIZATION.CD,
    dateRescued: '2014-07-08',
    dateAdopted: '2014-07-12',
    imageUrl: '/i/coppersdream.org/sid/DSC_7471.JPG',
    captionAlign: 'left',
  },
  {
    name: 'Bogart',
    status: DOG_STATUS.ADOPTED,
    breedGuess: 'Beagle + Australian Cattle Dog',
    ageGuess: '1-2 years',
    weight: '25 lbs',
    organization: ORGANIZATION.CD,
    dateRescued: '2014-06-18',
    dateAdopted: '2014-06-28',
    imageUrl: '/i/coppersdream.org/bogart/DSC_6906.JPG',
    captionAlign: 'left',
  },
  {
    name: 'Rascal',
    status: DOG_STATUS.ADOPTED,
    breedGuess: 'Border Collie + Australian Shepherd',
    ageGuess: '4 years',
    weight: '50 lbs',
    organization: ORGANIZATION.CD,
    dateRescued: '2014-05-14',
    dateAdopted: '2014-05-22',
    imageUrl: '/i/coppersdream.org/rascal/DSC_6269.JPG',
    captionAlign: 'right',
  },
  {
    name: 'Honey',
    status: DOG_STATUS.ADOPTED,
    breedGuess: 'Labrador Retriever + Boxer',
    ageGuess: '3 years',
    weight: '50 lbs',
    organization: ORGANIZATION.CD,
    dateRescued: '2014-03-25',
    dateAdopted: '2014-04-26',
    imageUrl: '/i/coppersdream.org/honey/DSC_5044.JPG',
    captionAlign: 'left',
  },
  {
    name: 'Bruno',
    status: DOG_STATUS.ADOPTED,
    breedGuess: 'Mixed breed',
    ageGuess: '12 - 16 months',
    weight: '60 lbs',
    organization: ORGANIZATION.CD,
    dateRescued: '2014-02-16',
    dateAdopted: '2014-02-24',
    imageUrl: '/i/coppersdream.org/bruno/DSC_4796.JPG',
    captionAlign: 'right',
  },
  {
    name: 'Clooney',
    status: DOG_STATUS.ADOPTED,
    breedGuess: 'Labrador Retriever mix',
    ageGuess: '2 years',
    weight: '50 lbs',
    organization: ORGANIZATION.CD,
    dateRescued: '2013-06-07',
    dateAdopted: '2013-06-08',
    imageUrl: '',
    captionAlign: 'left',
  },
].map((dog) => ({
  ...dog,
  id: dog.name.toLowerCase().replace(/[^a-z]+/, '_').replace(/^\s+|\s+$/g, ''),
  description: `${dog.name}, the ${dog.ageGuess}; ${dog.weight} ${dog.breedGuess}`,
}));

dogsArray.sort((a, b) => {
  if (a.dateRescued < b.dateRescued) return 1;
  if (a.dateRescued > b.dateRescued) return -1;
  return 0;
});

// const dogs = dogsArray.reduce((allDogs, currDog) => {
//   // create property `id` as a slug of property `name`
//   currDog.id = currDog.name.toLowerCase().replace(/[^a-z]+/, '_').replace(/^\s+|\s+$/g, '');
//   currDog.description = `${currDog.name}, the ${currDog.ageGuess}; ${currDog.weight} ${currDog.breedGuess}`;
//   allDogs[currDog.id] = currDog;
//   return allDogs;
// }, {});

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
        <div className="row">
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
