import Step from "./JS-COMPONENTS/Step";
import InputBox from "./JS-COMPONENTS/InputBox";
import Card from "./JS-COMPONENTS/Card";
import AddOnTile from "./JS-COMPONENTS/AddOnTile";

import { useImmer} from "use-immer";
import { useState } from "react";

function App() {
  const [inputError, setInputEroor] = useImmer({
    text: { empty: false, invalide: false },
    email: { empty: false, invalide: false },
    phone: { empty: false, invalide: false },
  });

  const [step, setStep] = useState(1);

  function errorCheck() {
    const textInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const phoneInput = document.querySelector('input[type="number"]');

    const isTextEmpty = textInput.value.trim() === "";
    const isEmailEmpty = emailInput.value.trim() === "";
    const isPhoneEmpty = phoneInput.value.trim() === "";

    const isTextInvalide = !textInput.checkValidity();
    const isEmailInvalide = !emailInput.checkValidity();
    const isPhoneInvalide = !phoneInput.checkValidity();

    setInputEroor((draft) => {
      draft.text.empty = isTextEmpty;
      draft.text.invalide = isTextInvalide;
      draft.email.empty = isEmailEmpty;
      draft.email.invalide = isEmailInvalide;
      draft.phone.empty = isPhoneEmpty;
      draft.phone.invalide = isPhoneInvalide;
    });

    return (
      isTextEmpty +
        isEmailEmpty +
        isPhoneEmpty +
        isTextInvalide +
        isEmailInvalide +
        isPhoneInvalide ===
        0
    )
  }

  function stepChanger() {
    const newStep = step + 1;
    console.log(newStep)
    setStep(newStep)
  }

  return (
    <div className="Page">
      <div className="Container">
        <section className="Left-Hand">
          <Step icon="1" textUp="STEP 1" textDown="YOUR INFO" />
          <Step icon="2" textUp="STEP 2" textDown="SELECT PLAN" />
          <Step icon="3" textUp="STEP 3" textDown="ADD-ONS" />
          <Step icon="4" textUp="STEP 4" textDown="SUMMARY" />
        </section>

        <section className="Right-Hand">
          <main>
            { step !== 5 && <div className="Header">
              <h1>{"Personal info"}</h1>
              <p>
                {"Please provide your name, email address, and phone number."}
              </p>
            </div>}

            { step !== 5 && <div className="Slide-Box ">
              { step === 1 && <section>
                <form>
                  <InputBox
                    label="Name"
                    placeholder="e.g. Stephen King"
                    type="text"
                    isEmpty={inputError.text.empty}
                    isInvalide={inputError.text.invalide}
                    pattern="^[a-zA-Z]+(?: [a-zA-Z]+)*$"
                  />
                  <InputBox
                    label="Email Address"
                    placeholder="e.g. stephenking@lorem.com"
                    type="email"
                    isEmpty={inputError.email.empty}
                    isInvalide={inputError.email.invalide}
                  />
                  <InputBox
                    label="Phone Number"
                    placeholder="e.g. +1 234 567 890"
                    type="number"
                    isEmpty={inputError.phone.empty}
                    isInvalide={inputError.phone.invalide}
                    pattern="^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$"
                  />
                </form>
              </section>}

              { step === 2 && <section className="Slide-Two">
                <div className="Card-Box">
                  <Card icon={"arcade"} mode={"Arcade"} price={"$9/mo"} />
                  <Card icon={"advanced"} mode={"Advanced"} price={"$12/mo"} />
                  <Card icon={"pro"} mode={"Pro"} price={"$15/mo"} />
                </div>

                <div className="ToogleBtn-Box">
                  <button type="button">
                    <div className="Circle"></div>
                  </button>
                </div>
              </section>}

              { step === 3 && <section>
                <div className="Add-On-Tile-Box">
                  <AddOnTile
                    heading={"Online service"}
                    para={"Access to multiplayer games"}
                    rate={"+$1/mo"}
                  />
                  <AddOnTile
                    heading={"Larger storage"}
                    para={"Extra 1TB of cloud save"}
                    rate={"+$2/mo"}
                  />
                  <AddOnTile
                    heading={"Customizable Profile"}
                    para={"Custom theme on your profile"}
                    rate={"+$2/mo"}
                  />
                </div>
              </section>}

              { step === 4 && <section className="Slide-Four">
                <div className="Finishing-Table">
                  <h1>
                    <span>
                      Arcade (yearl)<br></br>
                      <a href="#">change</a>
                    </span>{" "}
                    <span>$90/yr</span>
                  </h1>
                  <div className="Hr-line"></div>
                  <h2>
                    <span>Online service</span>
                    <span>+$10/yr</span>
                  </h2>
                  <h2>
                    <span>Large storage</span>
                    <span>+$20/yr</span>
                  </h2>
                </div>

                <div className="Total-sum">
                  <span>Total (per year)</span>
                  <span>$120/yr</span>
                </div>
              </section>}
            </div>}

            { step === 5 && <section className="Thankyou-Page">
              <div className="Thankyou-Logo"></div>
              <h1>Thank you!</h1>
              <p>
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
              </p>
            </section>}
          </main>

          { step !== 5 && <div className="Footer">
            <button type="button">Go Back</button>
            <button type="button" onClick={stepChanger}>
              Next Step
            </button>
          </div>}
        </section>
      </div>
    </div>
  );
}

export default App;
