import { LoginInputDao } from "../daoLayer/inputDao/loginInputDao";
import { AccountOutputDao } from "../daoLayer/outputDao/accountOutputDao";

export function validateUserInformation(loginInputDao: LoginInputDao, accountOutputDao: AccountOutputDao) {
    expect(accountOutputDao.getUserName().toLowerCase()).toEqual(loginInputDao.getUserName().toLowerCase());
    expect("123456").toEqual(loginInputDao.getPassword());
}