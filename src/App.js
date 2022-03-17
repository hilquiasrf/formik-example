import { React }from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import schema from './schema';
import './App.css';

function App() {

  function onSubmit(values, actions) {
    console.log('SUBMIT', values);
  }

  //--- A função de validação abaixo se torna desnecessária a partir do momento que usamos um "schema"
  //-
  // function validate(values){
  //   const errors = {};
  //   if(!values.name) {
  //     errors.name = 'Nome é obrigatório';
  //   }
  //   if(!values.email) {
  //     errors.email = 'Email é obrigatório';
  //   }
  //   return errors;
  // }

  return (
    <div className="App">
      <Formik
        validationSchema={schema}
        //validate={validate}//valida quando usuário interage com o input
        onSubmit={onSubmit}
        validateOnMount    //valida assim que a página carrega
        initialValues={{
          name: '',
          email: '',
        }}
        render={({ values, errors, touched, isValid }) => ( //o parâmetro touched irá disparar uma ação CASO o campo/objeto em questão for "touched"(tocado) pelo usuário
          <Form>
            <div>
              <label>Nome</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" /> 
              {/* OBS: A tag superior subtitui  a validação comentada abaixo */}
              {/* {errors.name && touched.name && (
                <span>{errors.name}</span>
              )} */}
            </div>
            <div>
              <label>Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" />
              {/* OBS: A tag superior subtitui  a validação comentada abaixo */}
              {/* {errors.email && touched.email && (
                <span>{errors.email}</span>
              )} */}
            </div>
            <button type="submit" disabled={!isValid}>Enviar</button>
          </Form>
        )}
      />      
    </div>
  );
}

export default App;
