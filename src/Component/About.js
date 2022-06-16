import React from "react";

export default function About() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <h2>WELCOME TO TextUtils</h2>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  A very handy online text tool where you can change between
                  lower case and upper case letters, where you can capitalize,
                  uncapitalize, convert to mix case and transform your text.
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <h4>Upper Case</h4>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  The upper case transformer will take any text that you have
                  and will generate all the letters into upper case ones. It
                  will essentially make all lower case letters into CAPITALS (as
                  well as keep upper case letters as upper case letters). To do
                  this, you simply have to select the text that you need
                  changing and pasting into the box above and then select the
                  UPPER CASE tab. THIS IS AN EXAMPLE OF UPPER CASE.
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <h4>Lower Case</h4>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  If you are wondering how to uncapitalize text, this is exactly
                  what the lower case text converter will allow you to do - it
                  transforms all the letters in your text into lowercase
                  letters. Simply copy the text that you need generating into
                  lower case and paste the text into the box above and select
                  the ‘lower case’ tab. this is an example of lower case.
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingfour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefour"
                aria-expanded="false"
                aria-controls="collapsefour"
              >
                <h4>Title Case</h4>
              </button>
            </h2>
            <div
              id="collapsefour"
              className="accordion-collapse collapse"
              aria-labelledby="headingfour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  The title case converter is perfect for those who are a bit
                  unsure on how to title an upcoming essay. It essentially
                  ensures the correct letters are capitalized within the context
                  of a title. Words such as “an” will be left all in lower case
                  and words that are important will be converted such as
                  “Title”. This Is an Example of Title Case.
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingfive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefive"
                aria-expanded="false"
                aria-controls="collapsefive"
              >
                <h4>Reverse Text</h4>
              </button>
            </h2>
            <div
              id="collapsefive"
              className="accordion-collapse collapse"
              aria-labelledby="headingfive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                  If you want a fast and quick way of making your text go back
                  to front, the reverse text generator is great. Write out your
                  text like normal and then see it get flipped. .txet sdrawkcab
                  fo ecnetnes elpmaxe na si sihT
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingsix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsesix"
                aria-expanded="false"
                aria-controls="collapsesix"
              >
                <h4>Text To Binary</h4>
              </button>
            </h2>
            <div
              id="collapsesix"
              className="accordion-collapse collapse"
              aria-labelledby="headingsix"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>
                Translate binary code into English and English into binary code with the following generator. Type out regularly and get a series of 0’s and 1’s in return.
                <br />
                <br />
                01000010 01101001 01101110 01100001 01110010 01111001 00100000 01000011 01101111 01100100 01100101 00100000 01010100 01110010 01100001 01101110 01110011 01101100 01100001 01110100 01101111 01110010
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
