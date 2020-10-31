export class Activator {
    public static key: string;
    public static get isLicensed(): boolean {
        // NOTE: 
        // before removing or modifying this please consider supporting marker.js
        // by visiting https://markerjs.com/#price for details
        // thank you!

        return Date.now() < Date.parse("12/1/2020");

        /*
        if (Activator.key) {
            return true;
        } else {
            return false;
        }
        */
    }
}
