import { LightningElement } from 'lwc';

export default class LWC_Component extends LightningElement {
    //customtitle = "JAYA"//this we can add in html title={customtitle}
    changeHadler(event)
    {
       this.customtitle =event.target.value;//when we are class level variable in method we can use this.
       // event.target.value;
    }
}