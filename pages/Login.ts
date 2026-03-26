import { Locator, Page } from "@playwright/test";

export class LoginPage{
    readonly page : Page;
    readonly usernameTextBox : Locator;
    readonly passwordTextBox : Locator;
    readonly loginButton : Locator;
    readonly logoutlinkMenu : Locator;
    readonly logoutButton : Locator;
    readonly Uname : Locator;
    readonly Pname : Locator;
    readonly Lbutton : Locator;

constructor(page :Page){
    this.page = page
    this.usernameTextBox = page.locator('#user-name')
    this.passwordTextBox = page.locator('#password')
    this.loginButton= page.locator('#login-button')
    this.logoutlinkMenu = page.locator('#react-burger-menu-btn')
    this.logoutButton = page.locator('#logout_sidebar_link')
    this.Uname = page.locator("#loginusername")
    this.Pname = page.locator("#loginpassword")
    this.Lbutton = page.getByRole('button', { name: 'Log in' })
}
async openUrl(){

    await this.page.goto("https://www.saucedemo.com/")
}
async Login(usernamevalue :string, passwordvalue :string)
{
    await this.usernameTextBox.fill(usernamevalue)
    await this.passwordTextBox.fill(passwordvalue)
    await this.loginButton.click();
}
async Logoutfromapp(){

        await this.logoutlinkMenu.click();
        await this.logoutButton.click();
    }

async LoginPageAPI(Unamevalue :string, Pnamevalue :string)
    {
await this.Uname.fill(Unamevalue)
await this.Pname.fill(Pnamevalue)
await this.Lbutton.click()
}
}

