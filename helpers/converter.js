import { isObject, isArray } from 'lodash';

const extractFromEmbedded = (embeddedData) => {
    let json = {};

    try {
        for(let key in embeddedData){
            if(key === '_embedded' && isObject(embeddedData[key])){
                json = { ...json, ...extractFromEmbedded(embeddedData[key])};
            } 
            else if(key !== '_links'){
                if(isArray(embeddedData[key])){
                    json[key] = convertHalArrayToJsonArray(embeddedData[key]);
                }
                else if(isObject(embeddedData[key])){
                    json[key] = convertHalToJson(embeddedData[key]);
                }
                else{
                    json[key] = embeddedData[key];
                }
            }
        }
    } catch (error) {
        json = {};
        console.log(error);
    }

    return json;
}

const convertHalArrayToJsonArray = (halDataArray) => {
    let jsonArray = [];

    try {
        halDataArray.forEach(halDataItem => {
            let json = {};
            json = convertHalToJson(halDataItem);
            jsonArray.push(json);
        })
    } catch (error) {
        jsonArray = [];
        console.log(error);
    }

    return jsonArray;
}

export const convertHalToJson = (halData) => {
    let json = {};

    try {
        for(let key in halData){
            if(key === '_embedded' && isObject(halData[key])){
                json = { ...json, ...extractFromEmbedded(halData[key])};
            }
            else if(key !== '_links'){
                if(isArray(halData[key])){
                    json[key] = convertHalArrayToJsonArray(halData[key]);
                }
                else if(isObject(halData[key])){
                    json[key] = convertHalToJson(halData[key]);
                }
                else{
                    json[key] = halData[key];
                }
            }
        }
    } catch (error) {
        json = {}
        console.log(error)
    }

    return json;
}