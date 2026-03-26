import { Locator, Page } from "@playwright/test";


export class CartPage{
    readonly page: Page;
    readonly itemlink : Locator;
    

    constructor(page : Page){

        this.page = page;
        this.itemlink = page.locator('.inventory_item_name')
 
    }

}