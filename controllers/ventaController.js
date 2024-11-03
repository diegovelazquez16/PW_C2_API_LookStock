const { Venta, Prenda } = require('../models');

const createVenta = async (req, res) => {
    try {
        const { id_prenda, cantidad } = req.body;

        const prenda = await Prenda.findByPk(id_prenda);
        if (!prenda) {
            return res.status(404).json({ message: 'Prenda no encontrada' });
        }
        if (prenda.cantidad < cantidad) {
            return res.status(400).json({ message: 'Cantidad insuficiente en stock' });
        }

        const venta = await Venta.create(req.body);

        await prenda.update({ cantidad: prenda.cantidad - cantidad });

        res.status(201).json(venta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const getAllVentas = async (req, res) => {
    try {
        const ventas = await Venta.findAll({
            include: [{ model: Prenda, attributes: ['nombre', 'talla', 'precio'] }]
        });
        res.status(200).json(ventas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getVentaById = async (req, res) => {
    try {
        const venta = await Venta.findByPk(req.params.id, {
            include: [{ model: Prenda, attributes: ['nombre', 'talla', 'precio'] }]
        });
        if (venta) {
            res.status(200).json(venta);
        } else {
            res.status(404).json({ message: 'Venta no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateEstadoVenta = async (req, res) => {
    try {
        const { estado } = req.body;

        if (!['Pendiente', 'Pagado', 'Cancelado'].includes(estado)) {
            return res.status(400).json({ message: 'Estado inválido' });
        }

        const [updated] = await Venta.update({ estado }, {
            where: { id_venta: req.params.id }
        });

        if (updated) {
            const updatedVenta = await Venta.findByPk(req.params.id);
            res.status(200).json(updatedVenta);
        } else {
            res.status(404).json({ message: 'Venta no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createVenta,
    getAllVentas,
    getVentaById,
    updateEstadoVenta
};
