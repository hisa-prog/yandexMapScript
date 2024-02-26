import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [isFirstLoading, setIsFirstLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!isFirstLoading) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ae2e66f199793dc3d42af2f52bda6765c4a76bb34025587a935a871b887b5142a&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true";
      document.getElementById("yandexMap")?.appendChild(script);
    }
  }, [isFirstLoading]);

  useEffect(() => {
    if (isFirstLoading) setIsFirstLoading(false);
  }, []);

  return <div id="yandexMap" className="h-[92vh] w-screen" />;
};

export default Home;
