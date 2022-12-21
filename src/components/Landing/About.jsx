import { Hero } from "react-daisyui"

function About(){
    return (
        <Hero className="py-8 px-8">
            <Hero.Content className="flex flex-col md:flex-row">
                <div>
                    <h1 className="text-5xl font-bold">Why do I need a password manager?</h1>
                    <p className="py-6">
                        81% of data breaches are caused by weak or reused passwords. 
                        To keep your information secure, you need a strong, unique password for every account. 
                        But when you have hundreds of accounts, how do you keep track of all your passwords?
                    </p>
                    <p>
                        That's where password managers come in. 
                        They help you create strong passwords and sign in to your accounts quickly.
                    </p>
                    <p>
                        MyPass Manager saves all your passwords and encrypts them with your Account Password - which only you know. 
                        To sign in to an account, just click or tap to fill your details with MyPass Manager.
                    </p>
                </div>
                <img
                    alt="Why do I need a password manager?"
                    src="https://1password.com/img/password-manager/password-gen.4f50c59efa7adeba1945556bcb90526a.png"
                    className="rounded-lg"
                />
            </Hero.Content>
        </Hero>
    );
}

export default About;