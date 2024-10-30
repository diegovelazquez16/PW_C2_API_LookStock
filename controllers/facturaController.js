const { Factura, Venta } = require('../models');

const createFactura = async (req, res) => {
    try {
        const factura = await Factura.create(req.body);
        res.status(201).json(factura);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllFacturas = async (req, res) => {
    try {
        const facturas = await Factura.findAll({
            include: [{ model: Venta, as: 'Venta' }]  
        });
        res.status(200).json(facturas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getFacturaById = async (req, res) => {
    try {
        const factura = await Factura.findByPk(req.params.id, {
            include: [{ model: Venta, as: 'Venta' }]  
        });
        if (factura) {
            res.status(200).json(factura);
        } else {
            res.status(404).json({ message: 'Factura no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateFactura = async (req, res) => {
    try {
        const [updated] = await Factura.update(req.body, {
            where: { id_factura: req.params.id }
        });
        if (updated) {
            const updatedFactura = await Factura.findByPk(req.params.id);
            res.status(200).json(updatedFactura);
        } else {
            res.status(404).json({ message: 'Factura no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createFactura,
    getAllFacturas,
    getFacturaById,
    updateFactura,
};
