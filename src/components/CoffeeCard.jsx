import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, category, details, taste, photo } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);
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
        fetch(`https://coffee-store-server-tan-phi.vercel.app/coffee/${_id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter(cof => cof._id !== _id);
              setCoffees(remaining);
            }
          });
        console.log("delete confirm");
      }
    });
  };

  return (
    <div className="card card-side bg-[#F5F4F1] hover:shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex items-center justify-between w-full pr-4">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-3 my-auto">
            <button className="btn bg-[#D2B48C] text-white">VIEW</button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn bg-[#3C393B] text-white">EDIT</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-[#EA4744] text-white"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
