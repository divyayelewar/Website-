const Register = require("../Models/Register");

// Create a new registration
const createRegistration = async (registrationData) => {
  try {
    const registration = new Register({
      firstName: registrationData.firstName,
      middleName: registrationData.middleName,
      lastName: registrationData.lastName,
      dob: registrationData.dob,
      gender: registrationData.gender,
      email: registrationData.email,
      phone: registrationData.phone,
      address: registrationData.address,
      aadhar: registrationData.aadhar,
      board: registrationData.board,
      schoolName: registrationData.schoolName,
      passingYear: registrationData.passingYear,
      percentage: registrationData.percentage,
      city: registrationData.city
    });

    const savedRegistration = await registration.save();
    return savedRegistration;
  } catch (error) {
    throw new Error("Error creating registration: " + error.message);
  }
};

// Find registration by ID
const findRegistrationById = async (registrationId) => {
  try {
    const registration = await Register.findById(registrationId);

    if (!registration) {
      throw new Error(`Registration not found for ID: ${registrationId}`);
    }

    return registration;
  } catch (error) {
    throw new Error("Error finding registration: " + error.message);
  }
};

// Update registration by ID
const updateRegistrationById = async (registrationId, updatedData) => {
  try {
    const updatedRegistration = await Register.findByIdAndUpdate(
      registrationId,
      updatedData,
      { new: true } // Return the updated document
    );

    if (!updatedRegistration) {
      throw new Error(`Registration not found for ID: ${registrationId}`);
    }

    return updatedRegistration;
  } catch (error) {
    throw new Error("Error updating registration: " + error.message);
  }
};

// Delete registration by ID
const deleteRegistrationById = async (registrationId) => {
  try {
    const registration = await findRegistrationById(registrationId);

    if (!registration) {
      throw new Error(`Registration not found for ID: ${registrationId}`);
    }

    await Register.findByIdAndDelete(registrationId);
    return "Registration deleted successfully.";
  } catch (error) {
    throw new Error("Error deleting registration: " + error.message);
  }
};

// Get all registrations
const getAllRegistrations = async () => {
  try {
    const registrations = await Register.find();
    return registrations;
  } catch (error) {
    throw new Error("Error fetching registrations: " + error.message);
  }
};

module.exports = {
  createRegistration,
  findRegistrationById,
  updateRegistrationById,
  deleteRegistrationById,
  getAllRegistrations
};
