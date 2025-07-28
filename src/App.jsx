import React from "react";
import { NavbarDemo } from "./components/NavbarDemo";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog"; // ✅ FIXED: Added missing import
import Contact from "./pages/Contact";
import Changelog from "./pages/Changelog";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectsPage from "./components/ProjectsPage";
import BlogPage from "./components/BlogPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavbarDemo />
        <Layout>
          <Home />
          <Projects />
          <Blog />
          <Changelog />
          <Contact />
          <Footer />
        </Layout>
      </div>
    ),
  },
  {
    path: "/home",
    element: (
      <div>
        <NavbarDemo />
        <Layout>
          <Home />
          <Projects />
          <Blog />
          <Changelog />
          <Contact />
          <Footer />
        </Layout>
      </div>
    ),
  },
  {
    path: "/projectspage",
    element: (
      <div>
        <NavbarDemo />
        <Layout>
          <ProjectsPage />
        </Layout>
      </div>
    ),
  },
  {
    path: "/blogpage",
    element: (
      <div>
        <NavbarDemo />
        <Layout>
          <BlogPage />
        </Layout>
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <NavbarDemo />
        <Layout>
          <Contact />
        </Layout>
      </div>
    ),
  },
]);

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
