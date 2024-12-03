export const page_routes = {
  //  Home page Routes
  home: {
    direct_link: "/",
    relative_link: "/",
  },

  // Bus Stop Routes
  bus_stop_view: {
    direct_link: "/bus-stop",
    relative_link: "bus-stop",
  },

  // Route Pages
  route_view: {
    direct_link: "/route",
    relative_link: "route",
  },

  // ------------------------------------------
  // admin
  // Bus Stop Routes
  bus_stop_admin_view: {
    direct_link: "/bus-stop-admin",
    relative_link: "bus-stop-admin",
  },
  // List
  bus_stop_list: {
    direct_link: "/bus-stop-admin/list",
    relative_link: "list",
  },
  // add
  bus_stop_add: {
    direct_link: "/bus-stop-admin/add",
    relative_link: "add",
  },
  bus_stop_search_add: {
    direct_link: "/bus-stop-admin/search-for-bus-stop",
    relative_link: "search-for-bus-stop",
  },
  bus_stop_search_admin: {
    direct_link: "/bus-stop-admin/search",
    relative_link: "search",
  },
  bus_stop_indiv: {
    direct_link: "/bus-stop-admin/indiv",
    relative_link: "indiv",
  },
  // ------------------------------------

  // -- admin routes ---------
  admin: {
    direct_link: "/admin",
    relative_link: "admin",
  },

  // Routs ------------
  route_admin: {
    direct_link: "/admin/routes",
    relative_link: "routes",
  },
  route_create_admin: {
    direct_link: "/admin/routes/create",
    relative_link: "create",
  },
  route_list_admin: {
    direct_link: "/admin/routes/list",
    relative_link: "list",
  },

  // Trip ------------------------
  trip_admin: {
    direct_link: "/admin/trip",
    relative_link: "trip",
  },
  trip_create_admin: {
    direct_link: "/admin/trip/create",
    relative_link: "create",
  },
  trip_list_admin: {
    direct_link: "/admin/trip/list",
    relative_link: "list",
  },

  // Trip _ bus stop _ time
  tripbusstoptime_admin: {
    direct_link: "/admin/trip-bus-stop-time",
    relative_link: "trip-bus-stop-time",
  },
  tripbusstoptime_create: {
    direct_link: "/admin/trip-bus-stop-time/create",
    relative_link: "create",
  },
  tripbusstoptime_list: {
    direct_link: "/admin/trip-bus-stop-time/list",
    relative_link: "list",
  },
};
