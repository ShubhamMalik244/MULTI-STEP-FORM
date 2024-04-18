import Step from "./JS-COMPONENTS/Step";
import InputBox from "./JS-COMPONENTS/InputBox";
import Card from "./JS-COMPONENTS/Card";
import AddOnTile from "./JS-COMPONENTS/AddOnTile";

function App() {
  return (
    <div className="Page">
      <div className="Container">
        <section className="Left-Hand">
          <Step icon="1" textUp="STEP 1" textDown="YOUR INFO" />
          <Step icon="2" textUp="STEP 2" textDown="SELECT PLAN" />
          <Step icon="3" textUp="STEP 3" textDown="ADD-ONS" />
          <Step icon="4" textUp="STEP 4" textDown="SUMMARY" />
        </section>

        <section className="Right-Hand Hidden">
          <main>
            <div className="Header">
              <h1>{"Personal info"}</h1>
              <p>
                {"Please provide your name, email address, and phone number."}
              </p>
            </div>

            <div className="Slide-Box">
              <section className="Hidden">
                <form>
                  <InputBox label="Name" placeholder="e.g. Stephen King" />
                  <InputBox
                    label="Email Address"
                    placeholder="e.g. stephenking@lorem.com"
                  />
                  <InputBox
                    label="Phone Number"
                    placeholder="e.g. +1 234 567 890"
                  />
                </form>
              </section>

              <section className="Slide-Two Hidden">
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
              </section>

              <section className="">
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
              </section>

              <section className="Slide-Four Hidden">
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
              </section>
            </div>
          </main>

          <div className="Footer">
            <button type="button">Go Back</button>
            <button type="button">Next Step</button>
          </div>
        </section>

        <section className="Thankyou-Page ">
          <div className="Thankyou-Logo"></div>
          <h1>Thank you!</h1>
          <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
