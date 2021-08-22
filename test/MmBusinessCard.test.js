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

  it('does not hide the picture', () => {
    expect(el.shadowRoot.querySelector('img')).to.have.attr(
      'class',
      'picture '
    );
  });

  describe('when the first topic is selected', () => {
    beforeEach(async () => {
      await el.shadowRoot.getElementById('topic-0').click();
    });

    it('hides the picture and placeholder', () => {
      expect(el.shadowRoot.querySelector('img')).to.have.attr(
        'class',
        'picture picture--hidden'
      );
      expect(el.shadowRoot.getElementById('placeholder')).to.have.attr(
        'class',
        'placeholder placeholder--hidden'
      );
    });

    it('updates the description when clicking the second topic', async () => {
      await el.shadowRoot.getElementById('topic-1').click();

      expect(el.description).to.equal('Topic 2');
    });

    it('resets the description when clicking the close button', () => {
      el.shadowRoot.getElementById('close').click();

      expect(el.description).to.equal('');
    });
  });
});
