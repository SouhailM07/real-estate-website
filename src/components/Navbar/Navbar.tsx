import "./navbar.css";
// mui
import { AppBar, Toolbar, Stack } from "@mui/material";
// assets
import nav_logo from "/logo.png";

export default function Navbar() {
  let arrOfNav: string[] = [
    "Home",
    "Popular",
    "Services",
    "Blog",
    "Review",
    "Questions",
  ];
  return (
    <>
      <AppBar className="!bg-white !shadow-none !block" position="sticky">
        <Toolbar
          component="nav"
          className="justify-between font-medium !px-0 max-w-pw m-auto py-[0.8rem]"
        >
          <div>
            <img src={nav_logo} alt="logo" className="h-[4rem]" />
          </div>
          <Stack
            component="ul"
            direction="row"
            spacing="1.5rem"
            color="black"
            alignItems="center"
          >
            {arrOfNav.map((e, i) => {
              return (
                <li key={i}>
                  <a href={e}>{e}</a>
                </li>
              );
            })}
            <li>
              <button className="px-[2rem] py-[0.8rem] bg-black text-white">
                Contact Us
              </button>
            </li>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
