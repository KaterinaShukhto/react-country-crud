import CountryForm from "../../components/pages/CountryForm/CountryForm";
import CountryList from "../../components/pages/CountryList/CountryList";

interface NavItem {
  path: string;
  name: string;
  element: React.ReactNode;
}

export const LIST_NAV: NavItem[] = [
  { path: "/", name: "Главная", element: <CountryList /> },
  { path: "/added-country", name: "Добавить страну", element: <CountryForm /> },
];
