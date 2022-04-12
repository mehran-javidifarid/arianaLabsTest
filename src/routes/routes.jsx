import MainLayout from "../layout/main";
import RegisterView from "../pages/register";
import ResultsView from "../pages/results";
import TableView from "../pages/table";

export const routes = [
    {
        path: "/result",
        title: 'result',
        Component: ResultsView,
        exact: false,
        Layout: MainLayout,
        wrapperClassName: "customContainer customBg"
    },
    {
        path: "/table",
        title: 'users table',
        Component: TableView,
        exact: false,
        Layout: MainLayout,
        wrapperClassName: "customContainer customBg"
    },
    {
        path: "/",
        title: 'register',
        Component: RegisterView,
        exact: true,
        Layout: MainLayout,
        wrapperClassName: "customContainer customBg"
    }
];