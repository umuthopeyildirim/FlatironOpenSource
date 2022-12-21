import { Navbar, Button, Menu, Link } from 'react-daisyui';
import { BsGithub } from "react-icons/bs";

function CoreBar(){
    return (
        <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
            <Navbar>
                <Navbar.Start>
                    <Button href="/">
                        <img src="./img/logo-primary.svg" alt="FSOS" className="w-10 h-10 p-2"/>
                        FSOS
                    </Button>
                </Navbar.Start>
                <Navbar.End>
                    <Menu horizontal className="p-0 rounded-lg">
                        <Menu.Item>
                            <Link href="#lessons">Lessons</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="#about">About</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="#our-mission">Our Mission</Link>
                        </Menu.Item>
                        {/* <Menu.Item>
                            <Link href="#newsletter">Newsletter</Link>
                        </Menu.Item> */}
                        <Menu.Item>
                            <Link href="https://github.com/umuthopeyildirim/FlatironSchoolOpenSource" target="_blank"><BsGithub />Github</Link>
                        </Menu.Item>
                    </Menu>
                </Navbar.End>
            </Navbar>
        </div>
    );
}

export default CoreBar;