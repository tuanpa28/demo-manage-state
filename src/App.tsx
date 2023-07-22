import { ChangeEvent, FormEvent, useRef, useState } from "react";

import "@/App.css";
import { Input, List, Button, Form } from "@/components";
import { useStore } from "./store";
import {
  apiFulfilled,
  apiPending,
  apiRejected,
  setIsLoading,
} from "./store/actions";
import { FaPlus } from "react-icons/fa";
import { instance } from "./axios/config";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  const [carInput, setCarInput] = useState("");
  const [state, dispatch] = useStore();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(apiPending(true));
      if (carInput.trim()) {
        const car = {
          name: carInput,
        };
        const { data } = await instance.post("cars", car);
        setTimeout(() => {
          dispatch(apiFulfilled([...state.cars, data]));
          setCarInput("");
          inputRef.current?.focus();
        }, 1000);
      } else {
        setTimeout(() => {
          dispatch(setIsLoading(false));
        }, 1000);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(apiRejected(error.message));
      console.log(error.message);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-2xl font-bold mb-4">Car List</h1>
      <Form onSubmit={handleSubmit}>
        <div className="flex mb-4">
          <Input
            type="text"
            value={carInput}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setCarInput(event.target.value)
            }
            ref={inputRef}
            className="w-full px-4 py-2 border border-gray-400 rounded-lg"
            placeholder="Enter a new task"
          />
          <Button isLoading={state.isLoading} type="submit" primary>
            <FaPlus />
          </Button>
        </div>
      </Form>

      <List />
    </div>
  );
}

export default App;
