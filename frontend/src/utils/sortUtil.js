const sortByProperty = (property, order) => {
  return (a, b) => {
    const aValue = a[property];
    const bValue = b[property];

    if (order === 'asc') {
      if (aValue < bValue) return -1;
      if (aValue > bValue) return 1;
    } else if (order === 'desc') {
      if (aValue > bValue) return -1;
      if (aValue < bValue) return 1;
    }
    return 0;
  };
};

export default sortByProperty;