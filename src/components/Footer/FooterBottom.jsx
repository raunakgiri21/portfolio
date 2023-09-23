import { useEffect, useState } from "react";

const FooterBottom = () => {
  const [year, setYear] = useState("2023")
  useEffect(() => {
    setYear(new Date().getFullYear());
  },[])

  return (
    <div className="w-full py-10">
      <p className="text-center text-gray-500 text-base">
        © {year}. All rights reserved by Raunak Giri
      </p>
    </div>
  );
};

export default FooterBottom;
