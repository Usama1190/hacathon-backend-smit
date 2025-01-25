import Beneficiary from '../models/BeneficiaryModel.js';

// Get all beneficiaries
const getBeneficiaries = async (req, res) => {
    try {
        const beneficiaries = await Beneficiary.find();
        res.status(200).json({ status: 200, data: beneficiaries });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Server Error' });
    }
};

// Get single beneficiary by ID
const getBeneficiaryById = async (req, res) => {
    try {
        const id = req.params.id;
        const beneficiary = await Beneficiary.findById(id);
        if (!beneficiary) {
            return res.status(404).json({ status: 404, message: 'Beneficiary not found' });
        }
        res.status(200).json({ status: 200, message: beneficiary });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Server Error' });
    }
};

// Create a new beneficiary
const createBeneficiary = async (req, res) => {
    try {
        const getUserData = req.body;
        const { cnic, name, age, address, phone, department } = getUserData;

        // Ensure all fields are provided
        if (!cnic || !name || !age || !address || !phone || !department) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create and save new beneficiary
        const beneficiary = new Beneficiary(getUserData);
        await beneficiary.save();
        res.status(201).json({ status: 201, message: 'Created successfully', data: beneficiary });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Server Error' });
    }
};

// Update beneficiary by ID
const updateBeneficiary = async (req, res) => {
    try {
        const id = req.params.id;
        const getData = req.body;
        const beneficiary = await Beneficiary.findByIdAndUpdate(id, getData, { new: true, runValidators: true });
        if (!beneficiary) {
            return res.status(404).json({ message: 'Beneficiary not found' });
        }
        res.status(200).json({ status: 200, message: 'Updated successfully', data: beneficiary });
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Server Error' });
    }
};

// Delete beneficiary by ID
const deleteBeneficiary = async (req, res) => {
    try {
        const beneficiary = await Beneficiary.findByIdAndDelete(req.params.id);
        if (!beneficiary) {
            return res.status(404).json({ message: 'Beneficiary not found' });
        }
        res.status(200).json({ message: 'Beneficiary deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};



export const searchBeneficiaries = async (req, res) => {
    try {
        const { name, cnic, gender } = req.query; // Get query parameters

        // Build a dynamic query object
        const query = {};
        if (name) query.name = { $regex: name, $options: "i" }; // Case-insensitive search
        if (cnic) query.cnic = cnic;
        if (gender) query.gender = gender;

        const beneficiaries = await Beneficiary.find(query);
        res.status(200).json({ success: true, data: beneficiaries });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching beneficiaries", error: error.message });
    }
};




export {
    getBeneficiaries,
    getBeneficiaryById,
    createBeneficiary,
    updateBeneficiary,
    deleteBeneficiary,
};
