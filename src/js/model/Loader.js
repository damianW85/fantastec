class Loader {
    constructor() {
    	this.queue = new createjs.LoadQueue(true);
    	this.queue.loadManifest({src:"preload_manifest.json", type:"manifest"});
    }
}
export {Loader}
