import { useSelector } from "react-redux";

function CarValue() {
    const totalCost = useSelector(({cars: { cars, searchTerm}}) => {
        const filteredCars = cars.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase()); 
        });
        return filteredCars.reduce((acc , car) =>  acc + car.cost, 0)
    });


    return <div className="car-value"> Total cost: ${totalCost} </div>;
}


export default CarValue;