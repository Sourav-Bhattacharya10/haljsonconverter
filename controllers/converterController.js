import { convertHalToJson } from '../helpers/converter';

export const defaultPingAction = (req, res) => {
    res.send("<h4>Inside Converter Router Default</h4>");
};

export const convertHalToJsonAction = (req, res) => {
    const halData = req.body;
    const jsonData = convertHalToJson(halData);
    res.send(jsonData);
}