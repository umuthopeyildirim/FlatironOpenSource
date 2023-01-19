import { useState } from "react";
import { Button, Modal } from "react-daisyui";

function LandingModal() {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    setVisible(!visible);
    localStorage.setItem("consent", true);
  }

  return (
    <Modal open={visible} className="text-center w-full text-sm text-white px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400">
      <Modal.Header className="font-bold bg-primary">
        GDPR Security Disclaimer
      </Modal.Header>
      <Modal.Body className="font-bold max-w-5xl bg-primary">
        <p className="px-4 py-3"> 
          Please note that we use Google Analytics and cookies to track user traffic for this site.
          By clicking "Confirm Consent," you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. 
        </p>
        <div className="font-bold bg-primary">
          <a href="/cookies" className="font-bold bg-primary text-center">Cookies</a> 
          <a href="/privacy" className="font-bold px-10 bg-primary text-center">Privacy</a>
          <a href="/terms" className="font-bold bg-primary text-center">Terms And Conditions</a>
        </div>
      </Modal.Body>
      <Modal.Actions>
        <Button onClick={toggleVisible} className="text-center w-full text-sm text-white px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400">Confirm Consent</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default LandingModal