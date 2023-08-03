import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";


  interface ICardProps {
    title: string,
    image: string,
    price: number
  }
   
  export const FoodCard = ({title, image, price}: ICardProps) => {


    return (
      <Card className="w-11/12">
        <CardHeader shadow={false} floated={false} className="h-72 overflow-hidden">
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover hover:scale-150 cursor-zoom-in transition-all duration-300"
          />
        </CardHeader>
        <CardBody className="p-2 bg-neutral-950">
          <div className="mb-2 flex items-center justify-between bg-transparent">
            <Typography color="white" className="font-medium">
              {title}
            </Typography>
            <Typography color="white" className="font-medium">
              ${price}
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="p-2 bg-neutral-950">
            <button className="bg-orange-700 p-3 text-white w-full">Fazer pedido</button>
        </CardFooter>
      </Card>
    );
  }