import { useContext, useEffect } from "react";
import AlertDialog from "../../components/elements/AlertDialog";
import { ActiveSidebar } from "../../context/ActiveSidebar";

const NotFoundPage = () => {
  const { setActiveSidebar } = useContext(ActiveSidebar);

  useEffect(() => {
    setActiveSidebar("");
  });

  return (
    <main className="p-3 mb-20 sm:ml-20 sm:mb-0">
      <div className="relative mt-5">
        <AlertDialog text="Pages Not Found" />
      </div>
    </main>
  );
};

export default NotFoundPage;
