const Teddy = require('./model')

const getDataSets = async(req , res) => {
        try {
            const { id } = req.params; // Get id from the URL parameters
    
            if (id) {
                // Fetch a specific teddy dataset by id
                const teddy = await Teddy.findOne({ id: parseInt(id) });
                if (!teddy) {
                    return res.status(404).json({ message: 'Teddy not found' });
                }
                return res.status(200).json(teddy);
            } else {
                // Fetch all teddy datasets
                const teddies = await Teddy.find();
                return res.status(200).json(teddies);
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Server error' });
        }
    };
    

const postDataSets = async(req , res) => {
    try {
        const { id, title, image } = req.body; // Get data from the request body

        // Validation
        if (!id || !title || !image) {
            return res.status(400).json({ message: 'All fields (id, title, image) are required' });
        }

        // Check if a teddy with the same ID already exists
        const existingTeddy = await Teddy.findOne({ id: parseInt(id) });
        if (existingTeddy) {
            return res.status(400).json({ message: 'Teddy with this ID already exists' });
        }
        
      
        // Create a new teddy object
        const newTeddy = new Teddy({
            id: parseInt(id),
            title,
            image
        });

        // // Save the new teddy to the database
        await newTeddy.save();

        return res.status(201).json({ message: 'Teddy created successfully', data: newTeddy });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

const deleteDataSets = async(req, res) => {
    try {
        const { id } = req.params; // Get id from the URL parameters

        // Find and delete the teddy dataset by id
        const teddy = await Teddy.findOneAndDelete({ id: parseInt(id) });

        // If no teddy found with the given id
        if (!teddy) {
            return res.status(404).json({ message: 'Teddy not found' });
        }

        // If teddy is found and deleted
        return res.status(200).json({ message: 'Teddy deleted successfully', data: teddy });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};


module.exports = {getDataSets , postDataSets , deleteDataSets}