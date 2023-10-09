import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  // const step = 1;

  //useState --> Default Value, updateState
  //They are hooks, any keyword starting with 'use' is a hook
  //Can only be called inside react component, will give error if called inside if or normal functions
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleNext = () => {
    if (step < 3) {
      /*
        This won't work, step !== 3, as update state doesnot take current value like this.
        For making it work, we have to use callback
        This is a more safe way
      */
      // setStep(step + 1)
      // setStep(step + 1)
      setStep((currentStep) => currentStep + 1);
      // setStep((currentStep) => currentStep + 1)
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen((is) => !is)} className="close">
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <span>👈🏻</span> Previous
            </Button>
            <Button
              textColor="#fff"
              bgColor="#7950f2"
              onClick={handleNext}
              text="Next"
              emoji="👉🏻"
            >
              Next <span>👉🏻</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

const StepMessage = ({ step, children }) => {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
};

const Button = ({ textColor, bgColor, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
};

export default App;
