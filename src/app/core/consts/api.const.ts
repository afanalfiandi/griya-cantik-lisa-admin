const GET = '/get';
const CREATE = '/create';
const DELETE = '/delete';
const UPDATE = '/update';

const BANNER = '/banner';
const CUSTOMER = '/customer';
const PAYMENT_METHOD = '/payment_method';
const PAYMENT_STATUS = '/payment_status';
const SERVICE = '/service';
const SERVICE_CATEGORY = '/service_category';
const SPECIALIST = '/specialist';
const SLOT = '/slot';
const TRANSACTION = '/transaction';
const TRANSACTION_STATUS = '/transaction_status';

export const APIConst = {
  AUTH: 'auth/admin',

  // BANNER
  GET_ALL_BANNER: BANNER + GET,
  CREATE_BANNER: BANNER + CREATE,
  DELETE_BANNER: BANNER + DELETE,

  //   CUSTOMER
  GET_ALL_CUSTOMER: CUSTOMER + GET,
  CREATE_CUSTOMER: CUSTOMER + CREATE,
  UPDATE_CUSTOMER: CUSTOMER + UPDATE,
  DELETE_CUSTOMER: CUSTOMER + DELETE,

  //   PAYMENT METHOD
  GET_ALL_PAYMENT_METHOD: PAYMENT_METHOD + GET,

  //   PAYMENT_STATUS
  GET_ALL_PAYMENT_STATUS: PAYMENT_STATUS + GET,

  //   SERVICE
  GET_ALL_SERVICE: SERVICE + GET,
  GET_BY_CATEGORY_ID: SERVICE + GET + 'category',
  CREATE_SERVICE: SERVICE + CREATE,

  //   SERVICE CATEGORY
  GET_ALL_SERVICE_CATEGORY: SERVICE_CATEGORY + GET,

  //   SPECIALIST
  GET_ALL_SPECIALIST: SPECIALIST + GET,
  CREATE_SPECIALIST: SPECIALIST + CREATE,
  UPDATE_SPECIALIST: SPECIALIST + UPDATE,
  DELETE_SPECIALIST: SPECIALIST + DELETE,

  //   SLOT
  GET_ALL_SLOT: SLOT + GET,

  // TRANSACTION
  GET_ALL_TRANSACTION: TRANSACTION + GET,
  GET_TRANSATION_BY_CUST_ID: TRANSACTION + GET + 'customerID=',
  GET_TRANSATION_BY_TRANSACTION_NUMBER:
    TRANSACTION + GET + 'transactionNumber=',
  CREATE_TRANSACTION: TRANSACTION + CREATE,

  // TRANSACTION STATUS
  GET_ALL_TRANSACTION_STATUS: TRANSACTION_STATUS + GET,
};
