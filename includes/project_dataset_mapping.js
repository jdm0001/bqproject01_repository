
function get_project(){

  e = (dataform.projectConfig.vars.environmentName)

  if (e == 'dev') {
    return 'bqproject01-d'
  } else if (e == 'stage') {
    return 'bqproject01-s'
  } else if (e == 'prod') {
    return 'bqproject01-p'
  }

}


function get_dataset(){
  
  e = (dataform.projectConfig.vars.environmentName)

  if (e == 'dev') {
    return 'bq_dataset_01_d'
  } else if (e == 'stage') {
    return 'bq_dataset_01_s'
  } else if (e == 'prod') {
    return 'bq_dataset_01_p'
  }

}


module.exports = {
  get_project,
  get_dataset
};
