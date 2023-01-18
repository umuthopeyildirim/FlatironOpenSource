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
    <Button onClick={toggleVisible} >GDPR Security Disclaimer</Button>
    <Modal open={visible} className = "text-center w-full text-sm text-white px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400">
      <Modal.Header className="font-bold  bg-primary">
        GDPR Security Disclaimer
      </Modal.Header>

      <Modal.Body className="font-bold  max-w-5xl bg-primary">
      <p> Please note that we use Google Analytics and cookies to track user traffic for this site.
        By clicking "Confirm Consent," you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. 
        Flatironopensource.com's Cookies and Privacy policies, as well as the Site's Terms and Conditions, can be found in the footer below </p>
      </Modal.Body>

      <Modal.Actions>
        <Button onClick={toggleVisible} className = "text-center w-full text-sm text-white px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400">Confirm Consent</Button>
      </Modal.Actions>
    </Modal>
  </div>
)

}

export default LandingModal