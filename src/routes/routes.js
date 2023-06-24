// const ProfileReview = React.lazy(() =>
//   import("../components/profile/profile-review/ProfileReview")
// );
import React from "react";

const MovieForm = React.lazy(() => import("./MovieForm"));
const Rentals = React.lazy(() => import("./Rentals"));
const Movies = React.lazy(() => import("./Movies"));
const Customer = React.lazy(() => import("./components/Customer"));

export const publicRoutes = [
  {
    path: "/",
    element: <Movies />,
  },
  {
    path: "/customers",
    element: <Customer />,
  },
  {
    path: "/Rentals",
    element: <Rentals />,
  },
  {
    path: "/movies/:id",
    element: <MovieForm />,
  },
];
