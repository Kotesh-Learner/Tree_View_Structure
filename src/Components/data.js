const userMenu = [
  { id : 1,
    label : "Home",
    to : "/",
  },
  {
    id : 2,
    label : "Kotesh",
    to : "/profile",
    children : [
      { 
        id : 3,
        label : "Details",
        to : "details",
        children : [
          {
            id : 4,
            label : "Location",
            to : "location",
          },
        ],
      },
    ],
  },
  {
    id : 5,
    label : "Settings",
    to : "/settings",
    children : [
      {
        id : 6,
        label : "Account",
        to : "account",
      },
      {
        id : 7,
        label : "Security",
        to : "security",
        children : [
          {
            id : 8 ,
            label: "Login",
            to: "login",
          },
          {
            id : 9,
            label: "Register",
            to: "Register",
          },
        ],
      },
    ],
  },
  {
    id : 10,
    label: "Contact",
    to: "contact",
    children: [
      {
        id : 11,
        label: "Mobile",
        to: "Mobile",
      },
      {
        id : 12,
        label: "E-mail",
        to: "Email",
      },
    ],
  },
];

export default userMenu;
