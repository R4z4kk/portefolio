const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "Accueil",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/skills",
        name: "Compétences",
        component: () => import("pages/SkillsPage.vue"),
      },
      {
        path: "/projects",
        name: "Projets",
        component: () => import("pages/ProjectsPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
