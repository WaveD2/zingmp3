import React, { useEffect, useState } from "react";
import { apiGetTop100 } from "../../apis";
import { Loading, Sections } from "../../components";
export const MusicTop100 = () => {
  const [top100, setTop100] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      const res = await apiGetTop100();
      setTop100(res?.data?.data);
      setIsLoading(false);
    };
    setIsLoading(true);
    fetch();
  }, []);

  return (
    <div className=" mx-[59px]">
      {top100.length > 0 && !isLoading ? (
        top100?.map((item, index) => (
          <Sections
            key={index}
            title={item.title}
            data={item.items}
            typeSection={item.sectionType}
          />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};
