import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export const FoodCard = () => {
    return (
      <Card className="w-11/12">
        <CardHeader shadow={false} floated={false} className="h-60 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
            alt="card-image"
            className="h-full w-full object-cover hover:scale-150 cursor-zoom-in transition-all duration-300"
          />
        </CardHeader>
        <CardBody className="p-2 bg-neutral-950">
          <div className="mb-2 flex items-center justify-between bg-transparent">
            <Typography color="white" className="font-medium">
              Strogonoff
            </Typography>
            <Typography color="white" className="font-medium">
              $95.00
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="p-2 bg-neutral-950">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-orange-700 text-gray-50 p-2"
          >
            Fazer pedido
          </Button>
        </CardFooter>
      </Card>
    );
  }