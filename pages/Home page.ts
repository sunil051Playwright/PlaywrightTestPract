import { Page, Locator } from "@playwright/test";

export class HomePage{

    readonly page : Page;
    readonly addTocartButton : Locator;
    readonly removeButton : Locator;
    readonly cartIcon : Locator;
    readonly homepageHeading : Locator;


    constructor(page : Page){
        this.page = page;
        this.homepageHeading = page.getByText('Swag Labs')
        this.addTocartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.removeButton = page.locator('#remove-sauce-labs-backpack');
        this.cartIcon = page.locator('.shopping_cart_badge');
    }

    async addtocart()
    {
        await this.addTocartButton.click();
    }
    async gotoCart()
    {
        await this.cartIcon.click();
    }
}