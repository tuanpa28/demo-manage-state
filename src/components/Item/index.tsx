import { Button } from "@/components";

type ItemProps = {
  car?: any;
  onRemoveCar: (id: number) => void;
};

const Item = ({ car, onRemoveCar }: ItemProps) => {
  return (
    <li className="flex items-center py-2 border-b border-gray-300">
      <span className="flex-grow ml-2">{car.name}</span>
      <Button onClick={() => onRemoveCar(Number(car.id))} type="button" danger>
        Delete
      </Button>
    </li>
  );
};

export default Item;
