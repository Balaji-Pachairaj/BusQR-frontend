import React, { useEffect, useState } from "react";
import RouteListIndivComponent from "./Utils/RouteListIndivComponent";
import { useSearchParams } from "react-router-dom";

const array = [
  {
    id: "id1",
    stop_name: "Kalapatti",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "	5:45 AM",
  },
  {
    id: "id2",
    stop_name: "Lakshmi Technology",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "5:47 AM",
  },
  {
    id: "id3",
    stop_name: "KMCH College of Pharmacy",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "5:50 AM",
  },
  {
    id: "id4",
    stop_name: "N.G.P. College",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "5:52 AM",
  },
  {
    id: "id5",
    stop_name: "Periyar Nagar",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "5:53 AM",
  },
  {
    id: "id6",
    stop_name: "Nehru Nagar",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "5:55 AM",
  },
  {
    id: "id7",
    stop_name: "SITRA Airport",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:00 AM",
  },
  {
    id: "id10",
    stop_name: "Arvind Eye Hospital",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:01 AM",
  },
  {
    id: "id11",
    stop_name: "Codissia",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:03 AM",
  },
  {
    id: "id12",
    stop_name: "	Hope College",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:07 AM",
  },
  {
    id: "id13",
    stop_name: "Varatharaja Mills",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:09 AM",
  },
  {
    id: "id14",
    stop_name: "Fun Mall",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:10 AM",
  },
  {
    id: "id15",
    stop_name: "Krishnamal College",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:12 AM",
  },
  {
    id: "id16",
    stop_name: "P.S.G. Tech / Peelamedu",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:14 AM",
  },
  {
    id: "id17",
    stop_name: "Suguna Kalyana Mandapam	",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:16 AM",
  },
  {
    id: "id18",
    stop_name: "Nava India",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:18 AM",
  },
  {
    id: "id19",
    stop_name: "Lakshmi Mills",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:21 AM",
  },
  {
    id: "id20",
    stop_name: "GKNM Hospital",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:22 AM",
  },
  {
    id: "id21",
    stop_name: "Anna Statue",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:26 AM",
  },
  {
    id: "id22",
    stop_name: "V.O.C. Park",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:27 AM",
  },
  {
    id: "id23",
    stop_name: "C.S.I. School",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:28 AM",
  },
  {
    id: "id24",
    stop_name: "C.S.I. Immanuel Church",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:29 AM",
  },
  {
    id: "id25",
    stop_name: "D.S.P. Office",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:29 AM",
  },
  {
    id: "id26",
    stop_name: "Collector Office",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:30 AM",
  },
  {
    id: "id27",
    stop_name: "Railway Station",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:30 AM",
  },
  {
    id: "id28",
    stop_name: "Town Hall",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:33 AM",
  },
  {
    id: "id29",
    stop_name: "Prakasam",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:34 AM",
  },
  {
    id: "id30",
    stop_name: "Oppanakara Street Bus Stop",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:35 AM",
  },
  {
    id: "id31",
    stop_name: "Sukrawarpet",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:37 AM",
  },
  {
    id: "id32",
    stop_name: "Mahali Amman Koil / Flower Market",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:38 AM",
  },
  {
    id: "id33",
    stop_name: "Poomarket",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:39 AM",
  },
  {
    id: "id34",
    stop_name: "Navratna Hotel",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:41 AM",
  },
  {
    id: "id35",
    stop_name: "North Coimbatore",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:42 AM",
  },
  {
    id: "id36",
    stop_name: "T.V.S.",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:44 AM",
  },
  {
    id: "id37",
    stop_name: "Murugan Mills",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:46 AM",
  },
  {
    id: "id38",
    stop_name: "Puliyamaram",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:47 AM",
  },
  {
    id: "id39",
    stop_name: "Saibaba Colony",
    route_number: "16B",
    city: "Cbe, Tamilnadu",
    reach_time: "6:48 AM",
  },
];

const RouteListingComponent = () => {
  const [list, setList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setList(array);

    const handleScroll = (target_id) => {
      const container = document.getElementById("routes");
      const targetElement = document.getElementById(target_id);
      console.log(targetElement, target_id);
      if (targetElement && container) {
        const targetPosition = targetElement.offsetTop - container.offsetTop;
        container.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    };

    setTimeout(() => {
      let id = searchParams.get("id");

      if (id) {
        handleScroll(id);
      }
    }, 100);
    return () => {};
  }, []);
  return (
    <div
      id={"routes"}
      className=" w-full h-full flex flex-col mt-[1rem] gap-[0.5rem] border-b-2 rounded-[2rem] mb-[5rem] overflow-auto pb-[10vh]"
    >
      {list?.map((item, index) => {
        return (
          <RouteListIndivComponent
            content={item}
            isLast={index === array?.length - 1}
            isCurrent={searchParams.get("id") === item?.id}
          />
        );
      })}
    </div>
  );
};

export default RouteListingComponent;
