"use client";
import { useState } from "react";
import useSWR from "swr";
const serverApi = `http://localhost:3000`;
const fetcher = (url) => fetch(url).then((res) => res.json());
const Page = () => {
  const [provinceId, setProvinceId] = useState(null);
  const { data: provinces } = useSWR(`${serverApi}/api/provinces`, fetcher, {
    fallbackData: [],
  });
  const { data: districts } = useSWR(
    provinceId ? `${serverApi}/api/districts/${provinceId}` : null,
    fetcher,
    {
      fallbackData: [],
    },
  );
  const handleChangeProvince = (e) => {
    setProvinceId(e.target.value);
  };

  return (
    <div>
      <select onChange={handleChangeProvince}>
        <option value="">Chọn Tỉnh/Thành phố</option>
        {provinces.map((province) => (
          <option value={province.code} key={province.code}>
            {province.name}
          </option>
        ))}
      </select>
      <select name="">
        <option value="">Chọn Quận/Huyện</option>
        {districts.map((district) => (
          <option value={district.code} key={district.code}>
            {district.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Page;
