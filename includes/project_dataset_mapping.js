
function get_dataset_01(){
  
  e = (dataform.projectConfig.vars.environmentName)

  if (e == 'dev') {
    r = 'bq_dataset_01_d'
  } else if (e == 'stage') {
    r = 'bq_dataset_01_s'
  } else if (e == 'prod') {
    r = 'bq_dataset_01_p'
  }

  return r

}


module.exports = {
  get_dataset_01
};
