import mapService from "../services/maps.service.js";

module.exports.getCordinates = async (req, res) => {
  const { address } = req.query;

  try {
    const coordinates = await mapService.getAddressCoordinate(address);
    res.status(200).json(coordinates);
  } catch (error) {
    res.status(404).json({
      message: "Coordinates not found",
    });
  }
};
