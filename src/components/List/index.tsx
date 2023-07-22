import { Item } from "@/components";
import { useStore } from "@/store";
import { useEffect } from "react";
import {
  apiPending,
  apiFulfilled,
  apiRejected,
  deleteCar,
} from "@/store/actions";
import { instance } from "@/axios/config";
import Skeleton from "react-loading-skeleton";

const List = () => {
  const [state, dispatch] = useStore();

  useEffect(() => {
    (async () => {
      try {
        dispatch(apiPending(true));

        const { data } = await instance.get("cars");
        setTimeout(() => {
          dispatch(apiFulfilled(data));
        }, 1000);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        dispatch(apiRejected(error.message));
        console.log(error.message);
      }
    })();
  }, [dispatch]);

  const handleRemoveCar = async (id: number) => {
    try {
      await instance.delete(`cars/${id}`);
      dispatch(deleteCar(id));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(apiRejected(error.message));
      console.log(error.message);
    }
  };

  if (!("cars" in state)) {
    return null;
  }

  return (
    <>
      {state.isLoading ? (
        <Skeleton count={5} height={35} />
      ) : (
        <ul className="bg-white p-4 rounded-lg shadow">
          {state.cars?.map((car) => (
            <Item key={car.id} onRemoveCar={handleRemoveCar} car={car} />
          ))}
        </ul>
      )}
    </>
  );
};

export default List;
