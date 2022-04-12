const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
let translator = new Translator();

suite("Unit Tests", () => {
  suite("to British English", () => {
    const locale = "american-to-british";
    test("Mangoes are my favorite fruit.", function (done) {
      assert.equal(
        translator.translate("Mangoes are my favorite fruit.", locale),
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
      );
      done();
    });
    test("I ate yogurt for breakfast.", function (done) {
      assert.equal(
        translator.translate("I ate yogurt for breakfast.", locale),
        'I ate <span class="highlight">yoghurt</span> for breakfast.'
      );
      done();
    });
    test("We had a party at my friend's condo.", function (done) {
      assert.equal(
        translator.translate("We had a party at my friend's condo.", locale),
        'We had a party at my friend\'s <span class="highlight">flat</span>.'
      );
      done();
    });
    test("Can you toss this in the trashcan for me?", function (done) {
      assert.equal(
        translator.translate(
          "Can you toss this in the trashcan for me?",
          locale
        ),
        'Can you toss this in the <span class="highlight">bin</span> for me?'
      );
      done();
    });
    test("The parking lot was full.", function (done) {
      assert.equal(
        translator.translate("The parking lot was full.", locale),
        'The <span class="highlight">car park</span> was full.'
      );
      done();
    });
    test("Like a high tech Rube Goldberg machine.", function (done) {
      assert.equal(
        translator.translate("Like a high tech Rube Goldberg machine.", locale),
        'Like a high tech <span class="highlight">Heath Robinson device</span>.'
      );
      done();
    });
    test("To play hooky means to skip class or work.", function (done) {
      assert.equal(
        translator.translate(
          "To play hooky means to skip class or work.",
          locale
        ),
        'To <span class="highlight">bunk off</span> means to skip class or work.'
      );
      done();
    });
    test("No Mr. Bond, I expect you to die.", function (done) {
      assert.equal(
        translator.translate("No Mr. Bond, I expect you to die.", locale),
        'No <span class="highlight">Mr</span> Bond, I expect you to die.'
      );
      done();
    });
    test("Dr. Grosh will see you now.", function (done) {
      assert.equal(
        translator.translate("Dr. Grosh will see you now.", locale),
        '<span class="highlight">Dr</span> Grosh will see you now.'
      );
      done();
    });
    test("Lunch is at 12:15 today.", function (done) {
      assert.equal(
        translator.translate("Lunch is at 12:15 today.", locale),
        'Lunch is at <span class="highlight">12.15</span> today.'
      );
      done();
    });
  });
  suite("to American English", () => {
    const locale = "british-to-american";
    test("We watched the footie match for a while.", function (done) {
      assert.equal(
        translator.translate(
          "We watched the footie match for a while.",
          locale
        ),
        'We watched the <span class="highlight">soccer</span> match for a while.'
      );
      done();
    });

    test("First, caramelise the onions.", function (done) {
      assert.equal(
        translator.translate("First, caramelise the onions.", locale),
        'First, <span class="highlight">caramelize</span> the onions.'
      );
      done();
    });

    test("I've just got bits and bobs in my bum bag.", function (done) {
      assert.equal(
        translator.translate(
          "I've just got bits and bobs in my bum bag.",
          locale
        ),
        'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.'
      );
      done();
    });
    test("The car boot sale at Boxted Airfield was called off.", function (done) {
      assert.equal(
        translator.translate(
          "The car boot sale at Boxted Airfield was called off.",
          locale
        ),
        'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.'
      );
      done();
    });

    test("Prof Joyner of King's College, London.", function (done) {
      assert.equal(
        translator.translate("Prof Joyner of King's College, London.", locale),
        '<span class="highlight">Prof.</span> Joyner of King\'s College, London.'
      );
      done();
    });
    test("Tea time is usually around 4 or 4.30.", function (done) {
      assert.equal(
        translator.translate("Tea time is usually around 4 or 4.30.", locale),
        'Tea time is usually around 4 or <span class="highlight">4:30</span>.'
      );
      done();
    });
  });
  suite("Highlight translation in", () => {
    const localeAB = "american-to-british";
    const localeBA = "british-to-american";
    test("Mangoes are my favorite fruit.", function (done) {
      assert.equal(
        translator.translate("Mangoes are my favorite fruit.", localeAB),
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
      );
      done();
    });
    test("I ate yogurt for breakfast.", function (done) {
      assert.equal(
        translator.translate("I ate yogurt for breakfast.", localeAB),
        'I ate <span class="highlight">yoghurt</span> for breakfast.'
      );
      done();
    });
    test("We watched the footie match for a while.", function (done) {
      assert.equal(
        translator.translate(
          "We watched the footie match for a while.",
          localeBA
        ),
        'We watched the <span class="highlight">soccer</span> match for a while.'
      );
      done();
    });
  });
});
