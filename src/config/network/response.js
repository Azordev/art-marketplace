import { Notify } from "notiflix"
import { STATUS_OK } from "../constants";

const error = (res = null, msg = null) => {
  if(res) {
    if (res.response !== undefined) {
      if(res.response.data.status)
      {
        Notify.failure(res.response.data.msg);
        return
      }
    } else {
      Notify.failure('Opps... Ocurrió un error inesperado.');
    }
  } else {
    if(msg) {
      Notify.failure(msg);
    } else {
      Notify.failure('Opps... Ocurrió un error inesperado.');
    }
  }
}

const success = (res, msg) => {
  if(msg) {
    Notify.success(msg);
  } else {
    if(res.status === STATUS_OK && res.message) {
      Notify.success(res.msg);
    } else {
      Notify.success('Realizado con exito');
    }
  }
}

const response = {
  error,
  success
}

export default response;