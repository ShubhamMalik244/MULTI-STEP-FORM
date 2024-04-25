import Step from "./JS-COMPONENTS/Step";
import InputBox from "./JS-COMPONENTS/InputBox";
import Card from "./JS-COMPONENTS/Card";
import AddOnTile from "./JS-COMPONENTS/AddOnTile";

import { useImmer } from "use-immer";
import { useState } from "react";

function App() {

  //VARIABLES --------------------------->>
  const [step, setStep] = useState(1);

  const [inputError, setInputEroor] = useImmer({
    text: { empty: false, invalide: false },
    email: { empty: false, invalide: false },
    phone: { empty: false, invalide: false },
  });

  const [inputvalue, setInputValue] = useState(["", "", ""]);

  const [card, setCard] = useImmer({
    currentPlan: "Arcade",
    currentPrice: "$9/mo",
  });

  const [toggle, setToggle] = useState(false);
  
  const [sub, setSub] = useState("monthly");

  const [tile, setTile] = useImmer({
    tile1: { active: "off", price: "$1/mo" },
    tile2: { active: "off", price: "$2/mo" },
    tile3: { active: "off", price: "$2/mo" },
  });




  //FUNCTIONS --------------------------------->>
  function isInputError() {
    const textInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const phoneInput = document.querySelectorAll('input[type="text"]')[1];

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

    if (
      isTextEmpty +
        isEmailEmpty +
        isPhoneEmpty +
        isTextInvalide +
        isEmailInvalide +
        isPhoneInvalide ===
      0
    ) {
      setInputValue([textInput.value, emailInput.value, phoneInput.value]);
      return false;
    } else {
      return true;
    }
  }

  function handelCardClick(e) {
    setCard((draft) => {
      draft.currentPlan = e.target.childNodes[1].firstChild.innerText;
      draft.currentPrice = e.target.childNodes[1].children[1].innerText;
    });
  }

  function handelToogleClick() {
    const circle = document.querySelector(".Circle");
    circle.classList.toggle("Toggle-btn");
    setToggle(circle.classList.contains("Toggle-btn"));

    if (sub === "monthly") {
      setSub("yearly");
      setCard((draft) => {
        draft.currentPrice = draft.currentPrice.slice(0, -3) + "0/yr";
      });
      setTile((draft) => {
        draft.tile1.price = draft.tile1.price.slice(0, -3) + "0/yr";
        draft.tile2.price = draft.tile2.price.slice(0, -3) + "0/yr";
        draft.tile3.price = draft.tile3.price.slice(0, -3) + "0/yr";
      });
    } else {
      setSub("monthly");
      setCard((draft) => {
        draft.currentPrice = draft.currentPrice.slice(0, -4) + "/mo";
      });
      setTile((draft) => {
        draft.tile1.price = draft.tile1.price.slice(0, -4) + "/mo";
        draft.tile2.price = draft.tile2.price.slice(0, -4) + "/mo";
        draft.tile3.price = draft.tile3.price.slice(0, -4) + "/mo";
      });
    }
  }

  function handelAddonClick(e) {
    setTile((draft) => {
      draft[e.target.id].active =
        draft[e.target.id].active === "off" ? "on" : "off";
      draft[e.target.id].price = e.target.children[2].innerText;
    });
  }

  function changePlan() {
    setStep(2);
  }

  function nextStep() {
    let next = 1;

    switch (step) {
      case 1:
        if (!isInputError()) next = step + 1;
        break;
      case 2:
        next = step + 1;
        break;
      case 3:
        next = step + 1;
        break;
      case 4:
        next = step + 1;
        break;
      default:
        break;
    }

    setStep(next);
  }

  function backStep() {
    if (step > 1) {
      const back = step - 1;
      setStep(back);
    }
  }





  //CONTENT ------------------------------------>>
  return (
    <div className="Page">
      <div className="Container">
        <section className="Left-Hand">
          <Step
            icon="1"
            textUp="STEP 1"
            textDown="YOUR INFO"
            active={step === 1 && "Active-step"}
          />
          <Step
            icon="2"
            textUp="STEP 2"
            textDown="SELECT PLAN"
            active={step === 2 && "Active-step"}
          />
          <Step
            icon="3"
            textUp="STEP 3"
            textDown="ADD-ONS"
            active={step === 3 && "Active-step"}
          />
          <Step
            icon="4"
            textUp="STEP 4"
            textDown="SUMMARY"
            active={step >= 4 && "Active-step"}
          />
        </section>

        <section className="Right-Hand">
          <main>
            {step !== 5 && (
              <div className="Header">
                <h1>{"Personal info"}</h1>
                <p>
                  {"Please provide your name, email address, and phone number."}
                </p>
              </div>
            )}

            {step !== 5 && (
              <div className="Slide-Box ">
                {step === 1 && (
                  <section>
                    <form>
                      <InputBox
                        label="Name"
                        placeholder="e.g. Stephen King"
                        type="text"
                        isEmpty={inputError.text.empty}
                        isInvalide={inputError.text.invalide}
                        pattern="^[a-zA-Z\s]+(?: [a-zA-Z]+)*$"
                        inputvalue={inputvalue[0]}
                      />
                      <InputBox
                        label="Email Address"
                        placeholder="e.g. stephenking@lorem.com"
                        type="email"
                        isEmpty={inputError.email.empty}
                        isInvalide={inputError.email.invalide}
                        inputvalue={inputvalue[1]}
                      />
                      <InputBox
                        label="Phone Number"
                        placeholder="e.g. +1 234 567 890"
                        type="text"
                        isEmpty={inputError.phone.empty}
                        isInvalide={inputError.phone.invalide}
                        pattern="^[\s]*(\d{3}[\- ]?\d{3}[\- ]?\d{4})?"
                        inputvalue={inputvalue[2]}
                      />
                    </form>
                  </section>
                )}

                {step === 2 && (
                  <section className="Slide-Two">
                    <div className="Card-Box">
                      <Card
                        icon={"arcade"}
                        mode={"Arcade"}
                        price={"$9"}
                        onClick={handelCardClick}
                        active={
                          card.currentPlan === "Arcade" && "Card-selected"
                        }
                        sub={sub}
                      />
                      <Card
                        icon={"advanced"}
                        mode={"Advanced"}
                        price={"$12"}
                        onClick={handelCardClick}
                        active={
                          card.currentPlan === "Advanced" && "Card-selected"
                        }
                        sub={sub}
                      />
                      <Card
                        icon={"pro"}
                        mode={"Pro"}
                        price={"$15"}
                        onClick={handelCardClick}
                        active={card.currentPlan === "Pro" && "Card-selected"}
                        sub={sub}
                      />
                    </div>

                    <div className="ToggleBtn-Box">
                      <button type="button" onClick={handelToogleClick}>
                        <div
                          className={"Circle " + (toggle && "Toggle-btn")}
                        ></div>
                      </button>
                    </div>
                  </section>
                )}

                {step === 3 && (
                  <section>
                    <div className="Add-On-Tile-Box">
                      <AddOnTile
                        heading={"Online service"}
                        para={"Access to multiplayer games"}
                        rate={"+$1"}
                        id={"tile1"}
                        onClick={handelAddonClick}
                        active={
                          tile.tile1.active === "on" && "AddonTile-selected"
                        }
                        sub={sub}
                      />
                      <AddOnTile
                        heading={"Larger storage"}
                        para={"Extra 1TB of cloud save"}
                        rate={"+$2"}
                        id={"tile2"}
                        onClick={handelAddonClick}
                        active={
                          tile.tile2.active === "on" && "AddonTile-selected"
                        }
                        sub={sub}
                      />
                      <AddOnTile
                        heading={"Customizable Profile"}
                        para={"Custom theme on your profile"}
                        rate={"+$2"}
                        id={"tile3"}
                        onClick={handelAddonClick}
                        active={
                          tile.tile3.active === "on" && "AddonTile-selected"
                        }
                        sub={sub}
                      />
                    </div>
                  </section>
                )}

                {step === 4 && (
                  <section className="Slide-Four">
                    <div className="Finishing-Table">
                      <h1>
                        <span>
                          {card.currentPlan} ({sub})<br></br>
                          <a onClick={changePlan} href="step2">
                            change
                          </a>
                        </span>
                        <span>{card.currentPrice}</span>
                      </h1>
                      <div className="Hr-line"></div>
                      {tile.tile1.active === "on" && (
                        <h2>
                          <span>Online service</span>
                          <span>{tile.tile1.price}</span>
                        </h2>
                      )}
                      {tile.tile2.active === "on" && (
                        <h2>
                          <span>Large storage</span>
                          <span>{tile.tile2.price}</span>
                        </h2>
                      )}
                      {tile.tile3.active === "on" && (
                        <h2>
                          <span>Customizable Profile</span>
                          <span>{tile.tile3.price}</span>
                        </h2>
                      )}
                    </div>

                    <div className="Total-sum">
                      <span>
                        Total {sub === "monthly" ? "(per month)" : "(per year)"}
                      </span>
                      <span>
                        {"$" +
                          (card.currentPrice.slice(0, -3).slice(1) * 1 +
                            (tile.tile1.active === "on"
                              ? tile.tile1.price.slice(0, -3).slice(2) * 1
                              : 0) +
                            (tile.tile2.active === "on"
                              ? tile.tile2.price.slice(0, -3).slice(2) * 1
                              : 0) +
                            (tile.tile3.active === "on"
                              ? tile.tile3.price.slice(0, -3).slice(2) * 1
                              : 0)) +
                          (sub === "monthly" ? "/mo" : "/yr")}
                      </span>
                    </div>
                  </section>
                )}
              </div>
            )}

            {step === 5 && (
              <section className="Thankyou-Page">
                <div className="Thankyou-Logo"></div>
                <h1>Thank you!</h1>
                <p>
                  Thanks for confirming your subscription! We hope you have fun
                  using our platform. If you ever need support, please feel free
                  to email us at support@loremgaming.com.
                </p>
              </section>
            )}
          </main>

          {step !== 5 && (
            <div className="Footer">
              <button type="button" onClick={backStep}>
                Go Back
              </button>
              <button
                className={step >= 4 ? "Confirm-btn" : ""}
                type="button"
                onClick={nextStep}
              >
                {step >= 4 ? "Confirm" : "Next Step"}
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
