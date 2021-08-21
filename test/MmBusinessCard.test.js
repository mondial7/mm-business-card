import { html, fixture, expect } from '@open-wc/testing';

import '../mm-business-card.js';

describe('MmBusinessCard', () => {
  let el;

  beforeEach(async () => {
    el = await fixture(html`
      <mm-business-card topics='["Topic 1", "Topic 2"]'></mm-business-card>
    `);
  });

  it('passes the a11y audit', async () => {
    await expect(el).shadowDom.to.be.accessible();
  });

  it('has a default title "Hey there" and counter 5', () => {
    expect(el.title).to.equal('Johnny Bravo');
    expect(el.topics).to.eql(['Topic 1', 'Topic 2']);
    expect(el.picture).to.eql('');
    expect(el.github).to.eql('');
    expect(el.linkedin).to.eql('');
    expect(el.curriculum).to.eql('');
    expect(el.description).to.eql('');
  });

  it('updates the description with the first topic', () => {
    el.shadowRoot.getElementById('topic-0').click();

    expect(el.description).to.equal('Topic 1');
  });

  it('updates the description with the second topic', () => {
    el.shadowRoot.getElementById('topic-1').click();

    expect(el.description).to.equal('Topic 2');
  });
});