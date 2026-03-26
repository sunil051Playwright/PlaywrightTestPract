import {test as baseTest} from "@playwright/test"
import { LoginPage } from "../pages/Login"
import { HomePage } from "../pages/Home page";
import { CartPage } from "../pages/cart";

type myPOMfixture= {

    loginPage : LoginPage;
    homePage : HomePage;
    cartPage : CartPage;
}

export const test = baseTest.extend<myPOMfixture>({

    loginPage : async({page}, use)=>{
        await use(new LoginPage(page));
    },
      homePage : async({page}, use)=>{
        await use(new HomePage(page));
    },
     cartPage : async({page}, use)=>{
        await use(new CartPage(page));
    }
    
})

export {expect} from "@playwright/test"
