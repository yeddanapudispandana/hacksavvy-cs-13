import { Route, Routes } from "react-router-dom";
import PublicLayout from "@/app/layouts/public.layout";
import AppLayout from "@/app/layouts/app.layout";
import NotfoundPage from "@/app/pages/notfound.page";
import HomePage from "@/app/pages/home.page";

const Layout = () => {
  return (
    <section className="w-full min-h-screen flex flex-col bg-midnight-400">
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/app" element={<AppLayout />}></Route>
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </section>
  );
};

export default Layout;
