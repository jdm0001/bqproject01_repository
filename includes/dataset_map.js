
function get_dataset_01(){
  
  dataset = "bq_dataset_01"
  suffix = dataform.projectConfig.vars.dataset_suffix

  r = dataset + "_" + suffix
  return r

}


function get_dataset_02(){
  
  dataset = "bq_dataset_02"
  suffix = dataform.projectConfig.vars.dataset_suffix

  r = dataset + "_" + suffix
  return r

}

module.exports = {
  get_dataset_01,
  get_dataset_02
};
