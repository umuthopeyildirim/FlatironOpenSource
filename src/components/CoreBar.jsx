import { Navbar, Button, Menu, Link } from "react-daisyui";
import { BsGithub } from "react-icons/bs";

function CoreBar() {
  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Navbar>
        <Navbar.Start>
          <Button
            className="border-1 border-gray-300 shadow-lg"
            color="glass"
            tag="a"
            href="/"
            startIcon={<img src="/img/logo.webp" alt="FSOS" className="w-5" />}
          >
            Flatiron Open Source
          </Button>
        </Navbar.Start>
        <Navbar.End>
          <Menu horizontal className="p-0 rounded-lg">
            <Menu.Item>
              <Link
                href="https://github.com/umuthopeyildirim/FlatironOpenSource"
                target="_blank"
              >
                <BsGithub />
                Github
              </Link>
            </Menu.Item>
          </Menu>
        </Navbar.End>
      </Navbar>
    </div>
  );
}

export default CoreBar;
