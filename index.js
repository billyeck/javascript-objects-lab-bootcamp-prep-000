var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]:value});
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key]=value;
  return obj
}
function deleteFromObjectByKey(obj, key){
  var NewObj= Object.assign({}, obj);
  delete NewObj[key];
  return NewObj;
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key];
  return obj;
}
