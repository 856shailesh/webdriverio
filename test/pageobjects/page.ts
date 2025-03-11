export class Page {
    protected async open(path: string): Promise<this> {
        await browser.url(`${path}`); // browser is global object , so don't import it
        return this;
    }
}