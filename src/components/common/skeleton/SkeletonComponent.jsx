import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
const SkeletonComponent = ({ index }) => {
  return (
    <Card key={index} className="w-90 my-3">
      <CardHeader shadow={false} floated={false} className="h-90">
        <div className="w-full h-60 bg-gray-300 rounded max-sm:w-96"></div>
      </CardHeader>
      <CardBody className="flex mx-auto">
        <div className="items-center justify-center">
          <div className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700 mb-2 mt-3 items-center sm:w-72"></div>
          <div className="w-full h-3 bg-gray-200 rounded-md dark:bg-gray-700 mb-2 mt-3 sm:w-36"></div>
          <div className="w-full h-20 bg-gray-200 rounded-md dark:bg-gray-700  mb-2 mt-3 sm:w-72"></div>
        </div>
      </CardBody>
    </Card>
  );
};
export default SkeletonComponent;
