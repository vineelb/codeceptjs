/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type publicHome = typeof import('./pages/publicHome.js');
type loginpage = typeof import('./pages/login.js');
type registrationPage = typeof import('./pages/registrationPage.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, publicHome: publicHome, loginpage: loginpage, signup: registrationPage }
  interface Methods extends Playwright, ai {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
