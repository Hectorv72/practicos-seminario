const first_matrix_rows  = document.getElementsByName('first-matrix-rows');
const first_matrix_cols  = document.getElementsByName('first-matrix-cols');
const second_matrix_rows = document.getElementsByName('second-matrix-rows');
const second_matrix_cols = document.getElementsByName('second-matrix-cols');
const view_create_form   = document.getElementById('view-create-form');
const form = {};

const createMatrixs = (e) => {
  e.preventDefault();
  if(form.fm_cols === form.fm_rows){
    form = {
      fm_rows: first_matrix_rows,
      fm_cols: first_matrix_cols,
      sm_rows: second_matrix_rows,
      sm_cols: second_matrix_cols
    }
  }
}

view_create_form.addEventListener("submit",createMatrixs)