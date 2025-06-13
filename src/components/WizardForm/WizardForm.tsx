import React, { useState } from 'react';

const steps = ['User Info', 'Profile', 'Confirm'];

export const WizardForm = () => {
  const [step, setStep] = useState(0);

  const next = () => setStep(prev => Math.min(prev + 1, steps.length - 1));
  const prev = () => setStep(prev => Math.max(prev - 1, 0));

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="mb-4 flex justify-between">
        {steps.map((label, idx) => (
          <div
            key={idx}
            className={\`px-2 py-1 border-b-4 \${idx === step ? 'border-primary font-bold' : 'border-neutral-300'}\`}
          >
            {label}
          </div>
        ))}
      </div>
      <div className="p-4 bg-surface rounded shadow">
        <p className="mb-4">Step {step + 1} content goes here</p>
        <div className="flex justify-between">
          <button onClick={prev} disabled={step === 0} className="btn">
            Previous
          </button>
          <button onClick={next} disabled={step === steps.length - 1} className="btn">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
