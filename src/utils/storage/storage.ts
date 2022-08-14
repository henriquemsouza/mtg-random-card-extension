import Cookies, { CookieChangeListener } from "universal-cookie";


export class Storage {
  static cookies: Cookies;

  public static initialize(cookies: Cookies = new Cookies()): void {
    this.cookies = cookies;
  }

  public static getData(key: string): string {
    if (!this.cookies) this.initialize();
    const value = this.cookies.get(key) || "";
   
    return value;
  }

  public static setData(key: string, value: unknown): void {
    if (!this.cookies) this.initialize();
    const jsonValue = typeof value === "string" ? value : JSON.stringify(value);
    this.cookies.set(key, jsonValue);
  }

  public static removeData(key: string): void {
    if (!this.cookies) this.initialize();
    this.cookies.remove(key);
  }

 

  public static addListener(callback: CookieChangeListener): void {
    if (!this.cookies) this.initialize();
    this.cookies.addChangeListener(callback);
  }
}
