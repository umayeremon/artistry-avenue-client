/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraft = ({ filterItem }) => {
  const { itemName, price, customization, image, rating, stockStatus, _id } =
    filterItem || {};
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://art-craft-b9a10-server.vercel.app/crafts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Craft has been deleted.",
                icon: "success",
              });
              location.reload();
            }
          });
      }
    });
  };
  return (
    <div>
      <Card className="w-full ">
        <CardHeader floated={false} color="blue-gray">
          <img
            src={image}
            alt={itemName}
            className="h-[250px] lg:h-[450px] w-full"
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              {itemName}
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-0.5 h-5 w-5 text-yellow-700"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              {rating}
            </Typography>
          </div>
          <div className="font-poppins space-y-2">
            <h2>
              <span className="text-black font-bold text-base pr-2">
                Customization :{" "}
              </span>{" "}
              {customization}
            </h2>
            <h2>
              <span className="text-black font-bold text-base pr-2">
                {" "}
                Price :{" "}
              </span>
              {price}
            </h2>
            <h2>
              <span className="text-black font-bold text-base pr-2">
                {" "}
                Stock Status :{" "}
              </span>
              {stockStatus}
            </h2>
          </div>
        </CardBody>
        <CardFooter className="pt-3 flex justify-between">
          <Button onClick={() => handleDelete(_id)} size="lg">
            Delete
          </Button>
          <Link to={`/updateCraft/${_id}`}>
            <Button size="lg">Update</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

MyCraft.propTypes = {
  filterItem: PropTypes.object.isRequired,
};

export default MyCraft;