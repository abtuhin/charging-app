const filterByVehicle = (items = [], filterBy = "all") => {
    return filterBy === "all" ? [...items] :[...items].filter(item => item.vehicleId === filterBy);
};

export default filterByVehicle;