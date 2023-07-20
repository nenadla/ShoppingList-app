import { Component, EventEmitter, Output } from "@angular/core";
import { DataStarageService } from "../shared/data-storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

 
export class HeaderComponent{
    collapsed = true;

    constructor(private dataStorageService: DataStarageService){}

    onSaveData(){
         this.dataStorageService.storeRecipes();
    }

    onFetchData(){
        this.dataStorageService.fetchRecipes();
    }

    
}