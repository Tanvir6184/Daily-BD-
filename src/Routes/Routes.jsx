import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllUsers from "../AdminPages/All Users/AllUsers";
import Dashboard from "../AdminPages/Dashboard/Dashboard";
import AllArticles from "../AdminPages/All Articles/AllArticles";
import AddPublisher from "../AdminPages/Add Publisher/AddPublisher";
import ApprovedArticles from "../Pages/Approved Articles/ApprovedArticles";
import ArticleDetails from "../Pages/Article Details/ArticleDetails";
import Subscription from "../Pages/Subscription/Subscription";
import AddArticles from "../Pages/Add Articles/AddArticles";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "add-articles",
        element: <AddArticles></AddArticles>,
      },
      {
        path: "approved-articles",
        element: <ApprovedArticles></ApprovedArticles>,
      },
      {
        path: "article-details",
        element: <ArticleDetails></ArticleDetails>,
      },
      {
        path: "subscription",
        element: <Subscription></Subscription>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "all-user",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "all-articles",
        element: <AllArticles></AllArticles>,
      },
      {
        path: "add-publisher",
        element: <AddPublisher></AddPublisher>,
      },
    ],
  },
]);
