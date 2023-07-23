import { Item } from "@/components";
import { useEffect } from "react";
import { instance } from "@/axios/config";
import Skeleton from "react-loading-skeleton";

const List = () => {
  useEffect(() => {
    (async () => {
      try {
        // dispatch(apiPending(true));

        const { data } = await instance.get("cars");
        setTimeout(() => {
          // dispatch(apiFulfilled(data));
        }, 1000);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        // dispatch(apiRejected(error.message));
        console.log(error.message);
      }
    })();
  }, []);

  const handleRemoveCar = async (id: number) => {
    try {
      await instance.delete(`cars/${id}`);
      // dispatch(deleteCar(id));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // dispatch(apiRejected(error.message));
      console.log(error.message);
    }
  };

  // if (!("cars" in state)) {
  //   return null;
  // }

  return (
    <>
      {/* {state.isLoading ? (
        <Skeleton count={5} height={35} />
      ) : (
        <ul className="bg-white p-4 rounded-lg shadow">
          {state.cars?.map((car) => (
            <Item key={car.id} onRemoveCar={handleRemoveCar} car={car} />
          ))}
        </ul>
      )} */}
    </>
  );
};

export default List;
