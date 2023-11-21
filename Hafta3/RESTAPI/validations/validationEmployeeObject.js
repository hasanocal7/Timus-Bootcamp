const validationEmployee = (name, age, stillEmployee) => {
  if (!name) {
    throw new Error("Name is required");
  }

  if (typeof name !== "string") {
    throw new Error("Name's type must be String");
  }

  if (!age) {
    throw new Error("Age is required");
  }

  if (typeof age !== "number") {
    throw new Error("Age's type must be Number");
  }

  if (!stillEmployee) {
    throw new Error("stillEmployee is required");
  }

  if (typeof stillEmployee != "boolean") {
    throw new Error("stillEmployee's type must be Boolean");
  }
};

module.exports = validationEmployee;
