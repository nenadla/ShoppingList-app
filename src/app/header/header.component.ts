import { Component, OnDestroy, OnInit} from "@angular/core";
import { DataStarageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

 
export class HeaderComponent implements OnInit, OnDestroy {
    collapsed = true;
    isAuthenticated = false;
    private userSub: Subscription;

    constructor(private dataStorageService: DataStarageService,
                private  authService: AuthService
                ){}

    ngOnInit() {
                this.userSub = this.authService.user.subscribe(
                    user => {
                       this.isAuthenticated = !!user; 
                    }
                );  
                }

    onSaveData(){
         this.dataStorageService.storeRecipes();
    }

    onFetchData(){
        this.dataStorageService.fetchRecipes();
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }

    
}