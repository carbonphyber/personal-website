/* eslint-env browser */
import React from 'react';

export function DogsJacquesPage() {
  return (
    <div className="container">
      <h1>Jacques</h1>

      <p className="lead">He is deaf and nearly blind, but don't tell him that.</p>

      <p>Pink nose, sky blue eyes, and white fur with some patches of liver. He is a large mini Aussie Shepherd or a small standard Aussie.</p>

      <p>His condition is genetic (<a href="http://en.wikipedia.org/wiki/Australian_Shepherd#Double_merle" title="Double Merle Australian Shepherd at Wikipedia">&quot;homozygous merle&quot;, &quot;double merle&quot;, or, incorrectly, &quot;lethal white&quot;</a>) and is entirely avoidable by doing basic research before
      allowing your dog to get pregnant. Simply don't breed two <a href="http://en.wikipedia.org/wiki/Merle_(dog_coat)" title="Merle Dog Coat color pattern at Wikipedia">merle dogs</a> together.</p>

      <p>Like most Australian Shepherds, he is extremely active. He is a regular at the local park trails and dog parks.</p>

      <figure>
        <a href="/i/jacques/DSC_5840.jpg" target="_blank" title="Jacques, the Mini Australian Shepherd">
          <img src="/i/jacques/DSC_5840.jpg" alt="Jacques, the Mini Australian Shepherd" style={{ width: '100%' }} />
        </a>
        <figcaption className="">
          <p>Occasionally, Jacques will idle in a chair.</p>
        </figcaption>
      </figure>

      <figure>
        <a href="/i/jacques/DSC_2829.jpg" target="_blank" title="Jacques, digging in the dog park">
          <img src="/i/jacques/DSC_2829.jpg" alt="Jacques, digging in the dog park" style={{ width: '100%' }} />
        </a>
        <figcaption className="">
          <p>No dirt clod is safe from Jacques. This is Jacques diggin in the dog park.</p>
        </figcaption>
      </figure>

      <figure>
        <a href="/i/jacques/IMG_0417.jpg" target="_blank" title="Jacques, sleeping on a dog bed at work">
          <img src="/i/jacques/IMG_0417.jpg" alt="Jacques, sleeping on a dog bed at work" style={{ width: '100%' }} />
        </a>
        <figcaption className="">
            <p>Working is hard work. Jacques occasionally shows up at work with his person.</p>
        </figcaption>
      </figure>

      <figure>
        <a href="/i/jacques/IMG_0442.jpg" target="_blank" title="Jacques, in the driver's seat">
          <img src="/i/jacques/IMG_0442.jpg" alt="Jacques, in the driver's seat" style={{ width: '100%' }} />
        </a>
        <figcaption className="">
          <p>&quot;Are we there yet?&quot; Jacques is in the driver's seat with the top down and is anxious to get moving again.</p>
        </figcaption>
      </figure>
    </div>
  );
}
