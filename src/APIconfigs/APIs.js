export const API_domain = {
  //   main_domain: "http://localhost:5000/api",
  main_domain:
    "https://bus-qr-be-git-main-balaji-pachairajs-projects.vercel.app/api",
};

export const api_endpoints = {
  bus_stop_list: "/v1/bus_stop/list",
  bus_stop_add: "/v1/bus_stop/add_bus_stop",
  bus_stop_search_add: "/v1/bus_stop_search/create_search_list",
  bus_search_predictor: "/v1/bus_stop_search/search",

  //admin ;
  route_create: "/v1/route/add",
  route_list: "/v1/route/list",

  // Trip
  trip_create: "/v1/trip/create",
  trip_list: "/v1/trip/list",
  trip_indivlist: "/v1/trip/indivlist",

  // Trip bus Stop time
  trip_bus_stop_time_create: "/v1/trip_bus_stop_time/create",
};
