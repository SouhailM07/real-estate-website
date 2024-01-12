import "./popular.css";
// mui
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  CardHeader,
  Stack,
} from "@mui/material";
// assets
import vila_1 from "/home1.jpg";
import vila_2 from "/home2.jpg";
import vila_3 from "/home3.jpg";
//
import car_logo from "/car-solid.svg";
import compass_logo from "/compass-solid.svg";
import play_logo from "/play-solid.svg";
import arrow_logo from "/arrow-right-long-solid.svg";

export default function Popular() {
  interface arrOfLogos_type {
    img: string;
    value: string;
  }
  const arrOfLogos: arrOfLogos_type[] = [
    { img: car_logo, value: "bed" },
    { img: play_logo, value: "8*8" },
    { img: compass_logo, value: "2000 m2" },
  ];

  const arrOfVila: string[] = [vila_1, vila_2, vila_3];

  return (
    <>
      <article className="max-w-pw text-gray-800">
        {/* need to make this component as a Title component with |[align]| prop*/}
        <div className="flex justify-between mb-[2rem]">
          <h2 className="text-[2rem]">Our Popular Residence</h2>
          <button className="flex items-center space-x-2">
            <p>Explore All</p>
            <img src={arrow_logo} alt="logo" />
          </button>
        </div>
        {/*  */}
        <Stack component="ul" direction="row" className="justify-between">
          {arrOfVila.map((e, i) => {
            return (
              <Card key={i} component="li" className="w-[25rem]" square>
                <CardMedia
                  image={e}
                  component="div"
                  className="h-[16.5rem] !bg-contain"
                />
                <CardHeader
                  title={<p className="text-[1rem]">Islamabad, Pakistan</p>}
                />
                <CardContent
                  component="ul"
                  className="flex justify-between w-[80%] m-auto"
                >
                  {arrOfLogos.map((e, i) => {
                    return (
                      <li key={i} className="flex space-x-2">
                        <img src={e.img} alt="logo" />
                        <p>{e.value}</p>
                      </li>
                    );
                  })}
                </CardContent>
                <CardActions className="justify-between ">
                  <button className="bg-gray-900 px-[1.5rem] py-[0.8rem] text-white">
                    Book Now
                  </button>
                  <p>$2,13,048</p>
                </CardActions>
              </Card>
            );
          })}
        </Stack>
      </article>
    </>
  );
}
