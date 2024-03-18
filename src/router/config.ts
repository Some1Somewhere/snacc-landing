const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: "/terms-and-conditions",
    exact: true,
    component: "TermsAndConditions",
  },
  {
    path: "/privacy-policy",
    exact: true,
    component: "PrivacyPolicy",
  }

];

export default routes;
