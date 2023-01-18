import { Button, Modal } from "react-daisyui"
import { useEffect, useState } from "react"

//Google Analytics Pop Up

function LandingModal() {

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
  setVisible(!visible)
}

return (
  <div className="font-sans">
    <Button onClick={toggleVisible}>GDPR Security Disclaimer</Button>
    <Modal open={visible}>
      <Modal.Header className="font-bold w-11/12 max-w-5xl bg-primary">
        GDPR Security Disclaimer
      </Modal.Header>

      <Modal.Body className = "items-center text-center">
      Please know that we use Google Analytics and cookies to track user traffic for this site. By clicking ok, you consent to flatironopensource.com's Cookie and Privacy policies.
      </Modal.Body>

      <Modal.Actions>
        <Button onClick={toggleVisible}>Confirm Consent</Button>
      </Modal.Actions>
    </Modal>
  </div>
)

}

export default LandingModal