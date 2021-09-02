import {ControllerManager} from "./Controller/controllerManager";
console.log("index public")
class Main
{
    constructor() {
        new ControllerManager()
    }
}
//etetete
window.addEventListener("load" , ()=>
{
    new Main();
})